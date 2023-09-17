import {StyleSheet, Text, View, Modal, TouchableOpacity} from "react-native";
import {useContext, useState} from "react";
import {MaterialIcons} from "@expo/vector-icons";
import Loader from './Loader';

import {AuthContext} from "../contexts/AuthContext";

const LogoutIcon = () => {
    const {loading, onLogoutSubmit} = useContext(AuthContext);
    const [modalVisible, setModalVisible] = useState(false);

    const onLogout = () => {
        onLogoutSubmit();
        setModalVisible(false);
    };

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <Loader visible={loading}/>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>
                            Are you sure you want to log out?
                        </Text>
                        <View style={styles.modalButtons}>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => onLogout()}
                            >
                                <Text style={styles.textStyle}> Logout </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}> Cancel </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <MaterialIcons
                onPress={() => setModalVisible(true)}
                name="logout"
                size={22}
                color="black"
                style={{marginRight: 8}}
            />
        </View>
    );
};

export default LogoutIcon;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 8,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 26,
        alignItems: "center",
        shadowColor: "#000",
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
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "seagreen",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
    },
    modalButtons: {
        flexDirection: "row",
    },
});