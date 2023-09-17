import 'react-native-gesture-handler';
import {useEffect, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AuthProvider} from "./src/contexts/AuthContext";

import AuthNavigator from './src/navigation/AuthNavigator';
import TabNavigator from './src/navigation/TabNavigator';
import {LogProvider} from "./src/contexts/LogContext";

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
                <LogProvider>
                    {userData?.email
                        ? <TabNavigator/>
                        : <AuthNavigator/>}
                </LogProvider>
            </AuthProvider>
        </NavigationContainer>
    );
};

export default App;