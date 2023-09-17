import {useState, useContext} from 'react';
import {View, Text, SafeAreaView, Keyboard, Alert} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Button from '../components/Button';
import Input from '../components/Input';
import Loader from '../components/Loader';
import {AuthContext} from "../contexts/AuthContext";

const Login = ({navigation}) => {
    const {loading, onLoginSubmit} = useContext(AuthContext);
    const [inputs, setInputs] = useState({email: '', password: ''});
    const [errors, setErrors] = useState({});


    const validate = async () => {
        Keyboard.dismiss();
        let isValid = true;

        if (!inputs.email) {
            handleError('Please input email', 'email');
            isValid = false;
        } else if (inputs.email.length < 5) {
            handleError('Min email length of 5', 'email');
            isValid = false;
        }

        if (!inputs.password) {
            handleError('Please input password', 'password');
            isValid = false;
        } else if (inputs.password.length < 5) {
            handleError('Min password length of 5', 'password');
            isValid = false;
        }

        if (isValid) {
            login();
        }
    };

    const login = () => {
        onLoginSubmit(inputs);
    };

    const handleOnchange = (text, input) => {
        setInputs(prevState => ({...prevState, [input]: text}));
    };

    const handleError = (error, input) => {
        setErrors(prevState => ({...prevState, [input]: error}));
    };

    return (
        <SafeAreaView style={{backgroundColor: "white", flex: 1}}>
            <Loader visible={loading}/>
            <View style={{paddingTop: 50, paddingHorizontal: 20}}>
                <Text style={{color: "black", fontSize: 40, fontWeight: 'bold'}}>
                    Log In
                </Text>
                <Text style={{color: "grey", fontSize: 18, marginVertical: 10}}>
                    Enter Your Details to Login
                </Text>
                <View style={{marginVertical: 20}}>
                    <Input
                        onChangeText={text => handleOnchange(text, 'email')}
                        onFocus={() => handleError(null, 'email')}
                        iconName="email-outline"
                        label="Email"
                        placeholder="Enter your email address"
                        error={errors.email}
                    />
                    <Input
                        onChangeText={text => handleOnchange(text, 'password')}
                        onFocus={() => handleError(null, 'password')}
                        iconName="lock-outline"
                        label="Password"
                        placeholder="Enter your password"
                        error={errors.password}
                        password
                    />
                    <Button title="Log In" onPress={validate}/>
                    <Text
                        onPress={() => navigation.navigate('Register')}
                        style={{
                            color: "black",
                            fontWeight: 'bold',
                            textAlign: 'center',
                            fontSize: 16,
                        }}>
                        Don't have account? Register
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Login;