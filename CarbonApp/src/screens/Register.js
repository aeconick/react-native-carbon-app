import React from 'react';
import { View, Text, SafeAreaView, Keyboard, ScrollView, Alert, AsyncStorage } from 'react-native';
import axios from 'axios';

import Button from '../components/Button';
import Loader from '../components/Loader';
import Input from '../components/Input';

const Register = ({ navigation }) => {
    const [inputs, setInputs] = React.useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = React.useState({});
    const [loading, setLoading] = React.useState(false);

    const validate = () => {
        Keyboard.dismiss();
        let isValid = true;

        if (!inputs.email) {
            handleError('Please input email', 'email');
            isValid = false;
        } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
            handleError('Please input a valid email', 'email');
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
            register();
        }
    };

    const register = () => {
        setLoading(true);
        axios.post('http://192.168.1.100:3030/users/register', inputs)
          .then(function (response) {
            console.log(response.data);
            //     AsyncStorage.setItem('user', JSON.stringify(response.data));
                 setLoading(false);
                 navigation.navigate('Login');
          })
          .catch(function (error) {
            console.log(error);
          });
    };

    const handleOnchange = (text, input) => {
        setInputs(prevState => ({ ...prevState, [input]: text }));
    };
    const handleError = (error, input) => {
        setErrors(prevState => ({ ...prevState, [input]: error }));
    };
    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <Loader visible={loading} />
            <ScrollView
                contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}>
                <Text style={{ color: "black", fontSize: 40, fontWeight: 'bold' }}>
                    Register
                </Text>
                <Text style={{ color: "grey", fontSize: 18, marginVertical: 10 }}>
                    Enter Your Details to Register
                </Text>
                <View style={{ marginVertical: 20 }}>
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
                    <Button title="Register" onPress={validate} />
                    <Text
                        onPress={() => navigation.navigate('Login')}
                        style={{
                            color: "black",
                            fontWeight: 'bold',
                            textAlign: 'center',
                            fontSize: 16,
                        }}>
                        Already have account ?Login
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Register;