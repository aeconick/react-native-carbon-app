import 'react-native-gesture-handler';
import React, {useEffect, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AuthProvider} from "./src/contexts/AuthContext";

import AuthNavigator from './src/navigation/AuthNavigator';
import TabNavigator from './src/navigation/TabNavigator';

const App = () => {
    const [userData, setUserData] = useState(null);

    const readData = async () => {
        try {
            const value = await AsyncStorage.getItem("userData");

            setUserData(JSON.parse(value));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        readData();
    }, []);

    return (
        <NavigationContainer>
            <AuthProvider>
                {userData?.email
                    ? <TabNavigator/>
                    : <AuthNavigator/>}
            </AuthProvider>
        </NavigationContainer>
    );
};

export default App;