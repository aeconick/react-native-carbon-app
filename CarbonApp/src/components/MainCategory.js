import React from "react";
import { View, StyleSheet, Text, } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

//utensils, plane, video, credit-card, tshirt, apple-alt, plug, tools

const MainCategory = ({
    title,
}) => {
    return (
        <View style={styles.container}>
            <FontAwesome5 name={"tools"} size={30} color="green" />
            <Text>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
    }
});

export default MainCategory;