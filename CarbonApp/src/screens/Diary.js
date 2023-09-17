import {View, Text, SafeAreaView, FlatList, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import {useState, useContext} from 'react';
import {FontAwesome5, AntDesign} from '@expo/vector-icons';

import icons from '../constants/icons';
import {LogContext} from "../contexts/LogContext";

const Diary = () => {
    const {personalLogs, onDeleteSubmit} = useContext(LogContext);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedLog, setSelectedLog] = useState({});

    const openModalByItem = (item) => {
        setModalVisible(true);
        setSelectedLog(item);
    }

    const onItemDelete = (id) => {
        onDeleteSubmit(id);

        setModalVisible(false);
    }

    return (
        <SafeAreaView>
            <View style={styles.centeredView}>
                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>

                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.modalText}>
                                <Text style={styles.modalMainText}>Name</Text>
                                <Text style={styles.modalSubText}>{selectedLog.title}</Text>
                                <Text style={styles.modalMainText}>Type</Text>
                                <Text style={styles.modalSubText}>{selectedLog.category} - {selectedLog.type}</Text>
                                <Text style={styles.modalMainText}>Emissions</Text>
                                <Text style={styles.modalSubText}>{selectedLog.emissions} kgCO2eq</Text>
                                <Text style={styles.modalMainText}>Date</Text>
                                <Text style={styles.modalSubText}>{
                                    selectedLog.created?.split('T')[0].split('-').reverse().join('.')
                                }</Text>
                            </View>
                            <View style={styles.modalButtons}>
                                <TouchableOpacity
                                    style={[styles.button, styles.buttonDelete]}
                                    onPress={() => onItemDelete(selectedLog._id)}>
                                    <Text style={styles.textStyle}> Delete </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.textStyle}> Cancel </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>


            <FlatList
                data={personalLogs}
                keyExtractor={(item) => item._id}
                renderItem={({item}) => {
                    return (
                        <View style={styles.listContainer}>
                            <View style={styles.imageContainer}>
                                <FontAwesome5 name={icons[item.category]} size={20} color="seagreen"/>
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.listTitle}>{item.title}</Text>
                                <Text>{item.emissions} kgCO2eq</Text>
                            </View>
                            <TouchableOpacity style={styles.infoContainer} onPress={() => openModalByItem(item)}>
                                <AntDesign name="infocirlceo" size={24} color="black"/>
                            </TouchableOpacity>
                        </View>
                    )
                }}
                ListHeaderComponent={<View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Your logged emissions</Text>
                </View>}
            />
        </SafeAreaView>
    );
};

export default Diary;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        paddingLeft: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginLeft: 20,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: 'seagreen',
    },
    buttonDelete: {
        backgroundColor: 'tomato',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    },
    modalText: {
        marginBottom: 50,
        textAlign: 'left',
    },
    modalMainText: {
        fontSize: 26,
        fontWeight: 'bold',

    },
    modalSubText: {
        fontSize: 20,
        color: 'grey',
    },
    modalButtons: {
        flexDirection: 'row',
    },
    listContainer: {
        flex: 1,
        padding: 2,
        marginVertical: 4,
        marginHorizontal: 16,
        flexDirection: "row",
        borderBottomWidth: 2,
        borderColor: 'gainsboro',
        paddingBottom: 10,
    },
    listTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
    },
    imageContainer: {
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'seagreen',
        alignItems: "center",
        backgroundColor: 'honeydew',
        width: 40,
        height: 40,
        justifyContent: 'space-around',
        alignContent: 'space-around'
    },
    textContainer: {
        justifyContent: 'flex-start',
        marginLeft: 14,
    },
    infoContainer: {
        marginLeft: 330,
        marginTop: 10,
        position: 'absolute',
    },
    titleText: {
        fontSize: 26,
        color: 'seagreen',
        fontWeight: 'bold',
    },
    refresh: {
        marginLeft: 58,
        marginTop: 6,
    },
    titleContainer: {
        flexDirection: "row",
        margin: 20,
    },
});