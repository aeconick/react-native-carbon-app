import {createContext, useState} from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Alert} from "react-native";
import {useNavigation} from "@react-navigation/native";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({});
    const [loading, setLoading] = useState(false);

    const baseUrl = 'http://192.168.1.101:3030';
    const navigation = useNavigation();

    const onLoginSubmit = (inputs) => {
        setLoading(true);
        axios.post(`${baseUrl}/users/login`, inputs)
            .then(function (response) {
                let userData = response.data;
                setAuth(userData);
                AsyncStorage.setItem('userData', JSON.stringify(userData))
                navigation.navigate("Main");
                setLoading(false);
            })
            .catch(function (error) {
                setLoading(false);
                Alert.alert('Error', 'Invalid Details');
            });
    };

    const onRegisterSubmit = (inputs) => { //TODO: check email
        setLoading(true);
        axios.post(`${baseUrl}/users/register`, inputs)
            .then(function (response) {
                setLoading(false);
                navigation.navigate('Login');
            })
            .catch(function (error) {
                setLoading(false);
                Alert.alert('Error', 'Request Failed');
            });
    };

    const onLogoutSubmit = () => { //TODO: logout from server
        setLoading(true);
        AsyncStorage.clear()
            .then(() => {
                setLoading(false);
                navigation.navigate("Login");
            })
            .catch((error) => {
                setLoading(false);
                Alert.alert('Error', 'Logout Failed')
            });

        setAuth({});
    };

    const context = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogoutSubmit,
        loading,
        auth,
    };

    return (
        <>
            <AuthContext.Provider value={context}>
                {children}
            </AuthContext.Provider>
        </>
    );
};