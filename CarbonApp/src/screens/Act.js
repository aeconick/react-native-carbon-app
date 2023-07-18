import { StyleSheet, FlatList, View, SafeAreaView, Text } from 'react-native';
import React from 'react';

import tips from '../constants/tips';
import AccordionItem from '../components/AccordionItem';

const Act = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={{ fontSize: 26, fontWeight: 'bold', margin: 12, color: 'seagreen' }}>
                    Sustainable Guide:
                </Text>
                <FlatList
                    horizontal={false}
                    data={tips}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <AccordionItem title={item.title} bodyText={item.body} />
                    )} />
            </View>
        </SafeAreaView>
    );
};

export default Act;

const styles = StyleSheet.create({
    container: {
        paddingVertical: '2%',
        paddingHorizontal: '3%',
        height: '100%',
    },
});