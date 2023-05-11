import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


const LogoutIcon = () => {
    //const navigation = useNavigation();

    const onLogout = () => {
        AsyncStorage.clear()
            .then(() => {
                console.log('User has logged out');
                //navigation.navigate('Login');
            })
            .catch((error) => console.log(error));
    };

    return (
        <MaterialIcons onPress={onLogout} name="logout" size={22} color="black" style={{ marginRight: 8 }} />
    );
};

export default LogoutIcon;