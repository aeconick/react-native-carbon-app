import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


const LogoutIcon = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();

    const onLogout = () => {
        setModalVisible(false);

        AsyncStorage.clear()
            .then(() => {
                console.log('User has logged out');
                navigation.navigate('Login');
            })
            .catch((error) => console.log(error));
    };

    return (
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
                        <Text style={styles.modalText}>Are you sure you want to log out?</Text>
                        <View style={styles.modalButtons}>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => onLogout()}>
                                <Text style={styles.textStyle}>   Logout   </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>   Cancel   </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <MaterialIcons onPress={() => setModalVisible(true)} name="logout" size={22} color="black" style={{ marginRight: 8 }} />
        </View>
    );
};

export default LogoutIcon;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 26,
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
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 74,
    },
    modalButtons: {
        flexDirection: 'row',
    }
});