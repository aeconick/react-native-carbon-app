import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import icons from '../constants/icons';

const MainCategory = ({
    title,
    item,
}) => {
    const navigation = useNavigation();

    const onCategorySelect = () => {
        navigation.navigate('AddSub',{
            selectedItem: item,
        });
    }

    return (
        <TouchableOpacity onPress={onCategorySelect}>
            <View style={styles.container}>
                <View>
                    <FontAwesome5 name={icons[title]} size={30} color="seagreen" />
                </View>
                <View>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View>
                    <MaterialIcons name="keyboard-arrow-right" size={30} color="seagreen" />
                </View>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "seagreen",
        borderRadius: 10,
        backgroundColor: "honeydew",
    },
    title: {
        fontSize: 20,
    }
});

export default MainCategory;