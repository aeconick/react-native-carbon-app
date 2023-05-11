import React from "react";
import { SafeAreaView, StyleSheet, Text, FlatList, StatusBar } from "react-native";


import categories from '../constants/categories';
import MainCategory from "../components/MainCategory";

const Add = () => {
    const renderItem = ({ item }) =>
    (
        <MainCategory
            title={item.category}
        />
    );
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={categories}
                renderItem={renderItem}
                keyExtractor={item => item.category}
                ListHeaderComponent={<Text style={styles.header}>Select a category</Text>}
            />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    header: {
       fontSize: 30,
       marginTop: 20,
       marginLeft: 16,
       marginBottom: 20,
    },
});

export default Add;