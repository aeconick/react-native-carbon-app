import React from "react";
import { SafeAreaView, StyleSheet, Text, FlatList } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

//utensils, plane, video, credit-card, tshirt, apple-alt, plug, tools

import categories from '../constants/categories';
import MainCategory from "./MainCategory";

const AddEmission = () => {
    const renderItem = ({ item }) => 
        (
            <MainCategory
            title = {item.category}
            />
        );
    return (
        <SafeAreaView style={styles.container}>
            <Text>Select a category</Text>
            <FlatList
                data={categories}
                renderItem={renderItem}
                keyExtractor={item => item.category}
            />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
    }
});

export default AddEmission;