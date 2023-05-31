import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ title, onPress = () => { } }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            style={{
                height: 55,
                width: '100%',
                backgroundColor: "seagreen",
                marginVertical: 20,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
            }}>
            <Text style={{fontSize: 20,fontWeight:'bold',color:'white',elevation:2}}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;