import { View, Text, SafeAreaView, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome5, AntDesign, FontAwesome } from '@expo/vector-icons';

import icons from '../constants/icons';

const dummieData = [{
    "__v": 0,
    "_id": "6470a8a37b8d2b6050f88de1",
    "_ownerId": "64592b510a1f118fa3f83c72",
    "category": "Meal",
    "created": "2023-05-26T12:40:03.181Z",
    "emissions": 2.8,
    "title": "Ate a low meat meal",
    "type": "Low Meat"
},
{ "__v": 0, "_id": "6470a8d07b8d2b6050f88de3", "_ownerId": "64592b510a1f118fa3f83c72", "category": "Fashion", "created": "2023-05-26T12:40:47.631Z", "emissions": 25, "title": "Got a pair of new jeans", "type": "Jeans" }, { "__v": 0, "_id": "6470a9207b8d2b6050f88de5", "_ownerId": "64592b510a1f118fa3f83c72", "category": "Fashion", "created": "2023-05-26T12:42:07.699Z", "emissions": 12.5, "title": "Bought a new shirt at HM", "type": "Shirt" }, { "__v": 0, "_id": "6470a9827b8d2b6050f88de7", "_ownerId": "64592b510a1f118fa3f83c72", "category": "Food", "created": "2023-05-26T12:43:46.214Z", "emissions": 0.74, "title": "Ate tuna for lunch", "type": "Tuna" }];

const Diary = () => {
    const [personalLogs, setPersonalLogs] = useState([]);

    let token = '';
    const getUserData = async () => {
        try {
            const value = await AsyncStorage.getItem("userData");

            let userData = JSON.parse(value);
            token = userData.accessToken;

        } catch (e) {
            console.log('Failed to fetch the input from storage');
        }
    };
    getUserData();

    const getLogsData = (token) => {
        axios.get(`http://192.168.1.100:3030/data/catalog?"userId"=${token}`)
            .then(function (response) {
                setPersonalLogs(response.data.reverse());
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {
        getLogsData(token)
    }, [token,personalLogs]);

    return (
        <SafeAreaView>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Your logged emissions</Text>
            </View>
            <FlatList
                data={personalLogs}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.listContainer}>
                            <View style={styles.imageContainer}>
                                <FontAwesome5 name={icons[item.category]} size={20} color="seagreen" />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.listTitle}>{item.title}</Text>
                                <Text>{item.emissions} kgCO2eq</Text>
                            </View>
                            <TouchableOpacity style={styles.infoContainer} onPress={() => console.log('hello')}>
                                <AntDesign name="infocirlceo" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </SafeAreaView>
    );
};

export default Diary;

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        padding: 2,
        marginVertical: 4,
        marginHorizontal: 16,
        flexDirection: "row",
        //justifyContent: "flex-start",
        //alignItems: "center",
        //borderWidth: 2,
        //borderBottomColor: 'back',
        //borderColor: "seagreen",
        //borderRadius: 10,
        //backgroundColor: "honeydew",
        borderBottomWidth: 2,
        borderColor: 'gainsboro',
        paddingBottom: 10,
    },
    listTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
    },
    imageContainer: {
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'seagreen',
        alignItems: "center",
        backgroundColor: 'honeydew',
        width: 40,
        height: 40,
        justifyContent: 'space-around',
        alignContent: 'space-around'
    },
    textContainer: {
        justifyContent: 'flex-start',
        marginLeft: 14,
    },
    infoContainer: {
        marginLeft: 330,
        marginTop: 10,
        position: 'absolute',
    },
    titleText: {
        fontSize: 26,
        color: 'seagreen',
    },
    titleContainer: {
        flexDirection: "row",
        margin: 20,
    },
});