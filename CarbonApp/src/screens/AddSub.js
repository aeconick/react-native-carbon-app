import {SafeAreaView, StyleSheet, Text, FlatList} from "react-native";

import SubCategory from "../components/SubCategory";

const AddSubEmission = ({route}) => {
    const types = route.params.selectedItem.types;
    const selectedItem = route.params.selectedItem;

    const renderItem = ({item}) =>
        (
            <SubCategory
                title={item.type}
                item={selectedItem}
            />
        );

    return (
        <SafeAreaView>
            <FlatList
                data={types}
                renderItem={renderItem}
                keyExtractor={item => item.type}
                ListHeaderComponent={<Text style={styles.header}>Select a sub-category</Text>}
            />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        marginTop: 20,
        marginLeft: 16,
        marginBottom: 20,
    },
});

export default AddSubEmission;