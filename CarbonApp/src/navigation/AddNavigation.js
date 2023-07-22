import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Add from '../screens/Add';
import AddSub from '../screens/AddSub';
import AddFinal from '../screens/AddFinal';
import LogoutIcon from '../components/LogoutIcon';

const Stack = createStackNavigator();

const AddNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: "black",
                headerBackTitleVisible: false,
                headerRight: () => <LogoutIcon/>
            }}
            initialRouteName='Login'
        >
            <Stack.Screen name="Add" component={Add}/>
            <Stack.Screen name="AddSub" component={AddSub} options={{
                headerTitle: 'Add',
            }} />
            <Stack.Screen name="AddFinal" component={AddFinal} options={{
                headerTitle: 'Add',
            }} />
        </Stack.Navigator>
    );
};

export default AddNavigator;
