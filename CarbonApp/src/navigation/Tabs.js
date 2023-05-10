import React from "react";
import { } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Ionicons } from '@expo/vector-icons';

import AddEmission from "../screens/AddEmission";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'seagreen',
                tabBarInactiveTintColor: 'grey',
            }}>

            <Tab.Screen
                name={'Home'}
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Entypo
                            name="home"
                            size={24}
                            color={focused ? "seagreen" : "grey"}
                        />
                    )
                }}
            />

            <Tab.Screen
                name={'Budget'}
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name="stats-chart"
                            size={24}
                            color={focused ? "seagreen" : "grey"}
                        />
                    )
                }}
            />

            <Tab.Screen
                name={'Add'}
                component={AddEmission}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name="add-circle-sharp"
                            size={24}
                            color={focused ? "seagreen" : "grey"}
                        />
                    )
                }}
            />

            <Tab.Screen
                name={'Diary'}
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Entypo
                            name="list"
                            size={24}
                            color={focused ? "seagreen" : "grey"}
                        />
                    )
                }}
            />

            <Tab.Screen
                name={'Act'}
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name="hand-left-sharp"
                            size={24}
                            color={focused ? "seagreen" : "grey"}
                        />
                    )
                }}
            />

        </Tab.Navigator>
    );
};

export default Tabs;