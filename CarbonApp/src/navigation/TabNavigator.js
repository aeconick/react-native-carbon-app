import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Entypo, Ionicons} from "@expo/vector-icons";

import Home from "../screens/Home";
import Budget from "../screens/Budget";
import AddNavigator from "./AddNavigation";
import Diary from "../screens/Diary";
import Act from "../screens/Act";
import LogoutIcon from "../components/LogoutIcon";

const Tab = createBottomTabNavigator();

const TabNavigator = ({navigation}) => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "seagreen",
                tabBarInactiveTintColor: "grey",
                headerRight: () => <LogoutIcon/>,
            }}
        >
            <Tab.Screen
                name={"Home"}
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Entypo
                            name="home"
                            size={24}
                            color={focused ? "seagreen" : "grey"}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name={"Budget"}
                component={Budget}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Ionicons
                            name="stats-chart"
                            size={24}
                            color={focused ? "seagreen" : "grey"}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name={"AddNavigator"}
                component={AddNavigator}
                options={{
                    tabBarLabel: "Add",
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <Ionicons
                            name="add-circle-sharp"
                            size={24}
                            color={focused ? "seagreen" : "grey"}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name={"Diary"}
                component={Diary}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Entypo
                            name="list"
                            size={24}
                            color={focused ? "seagreen" : "grey"}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name={"Act"}
                component={Act}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Ionicons
                            name="hand-left-sharp"
                            size={24}
                            color={focused ? "seagreen" : "grey"}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;