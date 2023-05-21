import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SubCategory = ({
    title,
    item,
}) => {
    const navigation = useNavigation();

    const onCategorySelect = () => {
        console.log('sub category: ', item);
        console.log('sub category title: ', title);

        const finalItem = {
            category: item.category,
            info: item.types.find(el=>el.type==title)
        }

        navigation.navigate('Main',{
            selectedItem: finalItem,
        });
    }

    return (
        <TouchableOpacity onPress={onCategorySelect}>
        <View style={styles.container}>
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
        justifyContent: "space-around",
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

export default SubCategory;