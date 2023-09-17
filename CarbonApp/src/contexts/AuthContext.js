import {createContext, useState} from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Alert} from "react-native";
import {useNavigation} from "@react-navigation/native";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({});
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    const onLoginSubmit = (inputs) => {
            axios.post('http://192.168.1.101:3030/users/login', inputs)
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

    const onRegisterSubmit = async (values) => { //TODO: check email
        // const {confirmPassword, ...registerData} = values;
        //
        // if (!(/.+\@.+\..+/.test(registerData.email))) {
        //     setError('Invalid email!');
        //     return;
        // }
        //
        // if (confirmPassword !== registerData.password) {
        //     setError('Password does not match!');
        //     return;
        // }
        //
        // if (registerData.password.length <= 5) {
        //     setError('Password is too short!');
        //     return;
        // }
        //
        // try {
        //     const result = await authService.register(values);
        //
        //     setAuth(result);
        //
        //     setError('');
        //
        //     navigate('/catalog');
        // } catch (error) {
        //     setError(error.message);
        // }
    };

    const onLogout = async () => {
        // await authService.logout();
        //
        // setAuth({});
    };

    const context = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        loading,
        auth,
        isAuthenticated: !!auth.accessToken, //truthy => true, falsy => false
    };

    return (
        <>
            <AuthContext.Provider value={context}>
                {children}
            </AuthContext.Provider>
        </>
    );
};