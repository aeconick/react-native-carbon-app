import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import {useState, useContext} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
import CircularProgress from 'react-native-circular-progress-indicator';

import months from '../constants/months';
import {LogContext} from "../contexts/LogContext";


const Budget = () => {
        const {personalLogs} = useContext(LogContext);
        const [modalVisible, setModalVisible] = useState(false);


        const date = new Date();
        const monthlyLogs = personalLogs.filter(item => item.created.split('-')[1] == date.getMonth() + 1);
        const yearlyLogs = personalLogs.filter(item => item.created.split('-')[0] == date.getFullYear());

        let monthlyEmissions = 0;
        const monthlyCategory = {
            Meal: 0,
            Transport: 0,
            Streaming: 0,
            Purchase: 0,
            Fashion: 0,
            Food: 0,
            Electricity: 0,
            Custom: 0,
        }
        monthlyLogs.forEach(item => {
            monthlyEmissions += item.emissions
            monthlyCategory[item.category] += item.emissions;
        });

        let yearlyEmissions = 0;
        const yearlyCategory = {
            Meal: 0,
            Transport: 0,
            Streaming: 0,
            Purchase: 0,
            Fashion: 0,
            Food: 0,
            Electricity: 0,
            Custom: 0,
        }
        yearlyLogs.forEach(item => {
            yearlyEmissions += item.emissions
            yearlyCategory[item.category] += item.emissions;
        });

        let tipsArr = [];
        monthlyLogs.forEach(item => {
            if (item.type === 'High Meat' || item.type === 'Medium Meat' || item.type === 'Low Meat') {
                tipsArr.push('Looks like you\'ve eaten meat. Maybe try to switch it out with a veggie option.');
            } else if (item.type == 'Car') {
                tipsArr.push('Looks like you\'ve traveled by a car. Maybe try to use public transportation.');
            } else if (item.category == 'Streaming') {
                tipsArr.push('Looks like you\'ve streamed content. Maybe try to read a book or go for a walk.');
            } else if (item.type == 'Smartphone' || item.type == 'Laptop' || item.type == 'Tablet' || item.type == 'Computer' || item.type == 'Television') {
                tipsArr.push('Looks like you\'ve bought an electronic device. Maybe try to use it less if you can.');
            } else if (item.type == 'Electric Car' || item.type == 'Fossil Fuel Car' || item.type == 'Hybrid Car') {
                tipsArr.push('Looks like you\'ve bought a new car. Maybe try to drive it less if you can.');
            } else if (item.category == 'Fashion') {
                tipsArr.push('Looks like you\'ve bought new clothes. Maybe try to shop vintage if you can.');
            }
        });
        console.log('aideee', tipsArr);

        const getPercent = (parts, whole) => {
            return (parts / whole * 100).toFixed(0);
        }


        return (
            <SafeAreaView>
                <ScrollView style={styles.bottomMargin}>
                    <View style={styles.centeredView}>
                        <Modal
                            animationType='fade'
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                setModalVisible(!modalVisible);
                            }}>

                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <View style={styles.modalText}>
                                        <Text style={styles.modalMainText}>Why is the budget set to 167kg per month?</Text>
                                        <Text style={styles.modalSubText}>The Paris Agreement is an international treaty
                                            adopted in 2015 to combat climate change. It aims to limit global warming to
                                            well below 2 degrees Celsius and pursue efforts to keep it below 1.5 degrees
                                            Celsius. If you wish to respect The Paris Agreement try to
                                            keep your monthly emissions below 167kg.</Text>
                                    </View>
                                    <View style={styles.modalButtons}>
                                        <TouchableOpacity
                                            style={[styles.button, styles.buttonClose]}
                                            onPress={() => setModalVisible(!modalVisible)}>
                                            <Text style={styles.textStyle}> Cancel </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                    </View>

                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>Your current budget</Text>
                    </View>

                    <View style={styles.progressContainer}>
                        <Text style={styles.progressTitle}>{months[date.getMonth()]}</Text>

                        <CircularProgress
                            radius={90}
                            value={monthlyEmissions * 0.5988024}
                            valueSuffix={'%'}
                            maxValue={100}
                            progressValueStyle={{fontSize: 28}}
                            activeStrokeWidth={18}
                            inActiveStrokeWidth={18}
                            activeStrokeColor={'seagreen'}
                            inActiveStrokeColor={'seagreen'}
                            inActiveStrokeOpacity={0.2}
                            progressValueColor={'black'}
                        />

                        <View style={styles.percentContainer}>
                            {monthlyCategory.Meal != 0 &&
                                <Text style={styles.percentMain}><Text style={styles.percentTitle}>Meal: </Text><Text
                                    style={styles.percentSubtitle}>{monthlyCategory.Meal.toFixed(0)} kg
                                    - {getPercent(monthlyCategory.Meal, monthlyEmissions)} %</Text></Text>}
                            {monthlyCategory.Transport != 0 &&
                                <Text style={styles.percentMain}><Text style={styles.percentTitle}>Transport: </Text><Text
                                    style={styles.percentSubtitle}>{monthlyCategory.Transport.toFixed(0)} kg
                                    - {getPercent(monthlyCategory.Transport, monthlyEmissions)} %</Text></Text>}
                            {monthlyCategory.Streaming != 0 &&
                                <Text style={styles.percentMain}><Text style={styles.percentTitle}>Streaming: </Text><Text
                                    style={styles.percentSubtitle}>{monthlyCategory.Streaming.toFixed(0)} kg
                                    - {getPercent(monthlyCategory.Streaming, monthlyEmissions)} %</Text></Text>}
                            {monthlyCategory.Purchase != 0 &&
                                <Text style={styles.percentMain}><Text style={styles.percentTitle}>Purchase: </Text><Text
                                    style={styles.percentSubtitle}>{monthlyCategory.Purchase.toFixed(0)} kg
                                    - {getPercent(monthlyCategory.Purchase, monthlyEmissions)} %</Text></Text>}
                            {monthlyCategory.Fashion != 0 &&
                                <Text style={styles.percentMain}><Text style={styles.percentTitle}>Fashion: </Text><Text
                                    style={styles.percentSubtitle}>{monthlyCategory.Fashion.toFixed(0)} kg
                                    - {getPercent(monthlyCategory.Fashion, monthlyEmissions)} %</Text></Text>}
                            {monthlyCategory.Food != 0 &&
                                <Text style={styles.percentMain}><Text style={styles.percentTitle}>Food: </Text><Text
                                    style={styles.percentSubtitle}>{monthlyCategory.Food.toFixed(0)} kg
                                    - {getPercent(monthlyCategory.Food, monthlyEmissions)} %</Text></Text>}
                            {monthlyCategory.Electricity != 0 &&
                                <Text style={styles.percentMain}><Text style={styles.percentTitle}>Electricity: </Text><Text
                                    style={styles.percentSubtitle}>{monthlyCategory.Electricity.toFixed(0)} kg
                                    - {getPercent(monthlyCategory.Electricity, monthlyEmissions)} %</Text></Text>}
                            {monthlyCategory.Custom != 0 &&
                                <Text style={styles.percentMain}><Text style={styles.percentTitle}>Custom: </Text><Text
                                    style={styles.percentSubtitle}>{monthlyCategory.Custom.toFixed(0)} kg
                                    - {getPercent(monthlyCategory.Custom, monthlyEmissions)} %</Text></Text>}
                            {monthlyEmissions != 0 &&
                                <Text style={styles.percentMain}><Text style={styles.percentTitle}>Total: </Text><Text
                                    style={styles.percentSubtitle}>{monthlyEmissions.toFixed(0)} kg</Text></Text>}
                            <View style={styles.totalBudgetContainer}>
                                <Text style={styles.percentMain}><Text style={styles.percentTitle}>Budget
                                    for {months[date.getMonth()]}: </Text><Text
                                    style={styles.percentSubtitle}>
                                    167 kg{' '}
                                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                                        <AntDesign name="infocirlceo" size={14} color="grey"/>
                                    </TouchableOpacity>
                                    </Text></Text>
                            </View>
                        </View>

                    </View>

                    <View style={styles.tipsContainer}>
                        <MaterialCommunityIcons
                            name="lightbulb-on-outline"
                            size={34} color="seagreen"
                        />

                        {tipsArr.length != 0 &&
                            <Text style={styles.tipsText}>
                                {tipsArr[Math.floor(Math.random() * tipsArr.length)]}
                            </Text>}
                    </View>

                    <View style={styles.progressContainer}>
                        <Text style={styles.progressTitle}>{date.getFullYear()}</Text>
                        <CircularProgress
                            radius={90}
                            value={yearlyEmissions * 0.0499002}
                            valueSuffix={'%'}
                            maxValue={100}
                            progressValueStyle={{fontSize: 28}}
                            activeStrokeWidth={18}
                            inActiveStrokeWidth={18}
                            activeStrokeColor={'seagreen'}
                            inActiveStrokeColor={'seagreen'}
                            inActiveStrokeOpacity={0.2}
                            progressValueColor={'black'}
                        />

                        <View style={styles.percentContainer}>
                            {yearlyCategory.Meal != 0 &&
                                <Text style={styles.percentMain}><Text style={styles.percentTitle}>Meal: </Text><Text
                                    style={styles.percentSubtitle}>{yearlyCategory.Meal.toFixed(0)} kg
                                    - {getPercent(yearlyCategory.Meal, yearlyEmissions)} %</Text></Text>}
                            {yearlyCategory.Transport != 0 &&
                                <Text style={styles.percentMain}><Text style={styles.percentTitle}>Transport: </Text><Text
                                    style={styles.percentSubtitle}>{yearlyCategory.Transport.toFixed(0)} kg
                                    - {getPercent(yearlyCategory.Transport, yearlyEmissions)} %</Text></Text>}
                            {yearlyCategory.Streaming != 0 &&
                                <Text style={styles.percentMain}><Text style={styles.percentTitle}>Streaming: </Text><Text
                                    style={styles.percentSubtitle}>{yearlyCategory.Streaming.toFixed(0)} kg
                                    - {getPercent(yearlyCategory.Streaming, yearlyEmissions)} %</Text></Text>}
                            {yearlyCategory.Purchase != 0 &&
                                <Text style={styles.percentMain}><Text style={styles.percentTitle}>Purchase: </Text><Text
                                    style={styles.percentSubtitle}>{yearlyCategory.Purchase.toFixed(0)} kg
                                    - {getPercent(yearlyCategory.Purchase, yearlyEmissions)} %</Text></Text>}
                            {yearlyCategory.Fashion != 0 &&
                                <Text style={styles.percentMain}><Text style={styles.percentTitle}>Fashion: </Text><Text
                                    style={styles.percentSubtitle}>{yearlyCategory.Fashion.toFixed(0)} kg
                                    - {getPercent(yearlyCategory.Fashion, yearlyEmissions)} %</Text></Text>}
                            {yearlyCategory.Food != 0 &&
                                <Text style={styles.percentMain}><Text style={styles.percentTitle}>Food: </Text><Text
                                    style={styles.percentSubtitle}>{yearlyCategory.Food.toFixed(0)} kg
                                    - {getPercent(yearlyCategory.Food, yearlyEmissions)} %</Text></Text>}
                            {yearlyCategory.Electricity != 0 &&
                                <Text style={styles.percentMain}><Text style={styles.percentTitle}>Electricity: </Text><Text
                                    style={styles.percentSubtitle}>{yearlyCategory.Electricity.toFixed(0)} kg
                                    - {getPercent(yearlyCategory.Electricity, yearlyEmissions)} %</Text></Text>}
                            {yearlyCategory.Custom != 0 &&
                                <Text style={styles.percentMain}><Text style={styles.percentTitle}>Custom: </Text><Text
                                    style={styles.percentSubtitle}>{yearlyCategory.Custom.toFixed(0)} kg
                                    - {getPercent(yearlyCategory.Custom, yearlyEmissions)} %</Text></Text>}
                            {yearlyEmissions != 0 &&
                                <Text style={styles.percentMain}><Text style={styles.percentTitle}>Total: </Text><Text
                                    style={styles.percentSubtitle}>{yearlyEmissions.toFixed(0)} kg</Text></Text>}
                            <View style={styles.totalBudgetContainer}>
                                <Text style={styles.percentMain}><Text style={styles.percentTitle}>Budget
                                    for {date.getFullYear()}: </Text><Text
                                    style={styles.percentSubtitle}>2004 kg</Text></Text>
                            </View>
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
;

export default Budget;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 26,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginLeft: 20,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: 'seagreen',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    },
    modalText: {
        marginBottom: 15, //was 20
        textAlign: 'left',
    },
    modalMainText: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: "justify",
        marginBottom: 10,
    },
    modalSubText: {
        fontSize: 20,
        color: 'grey',
        textAlign: "justify",
        marginBottom: 10,
    },
    modalButtons: {
        marginRight: 20,
    },
    listContainer: {
        flex: 1,
        padding: 2,
        marginVertical: 4,
        marginHorizontal: 16,
        flexDirection: "row",
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
        fontWeight: 'bold',
    },
    titleContainer: {
        flexDirection: "row",
        margin: 20,
    },
    progressContainer: {
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#c6dfd2',
        borderRadius: 12,
        marginLeft: 18,
        marginRight: 18,
        padding: 8,
    },
    progressTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    percentTitle: {
        //fontWeight: 'bold'
    },
    percentSubtitle: {
        color: 'grey',
    },
    percentMain: {
        padding: 2,
        letterSpacing: 1,
        fontSize: 16,
    },
    percentContainer: {
        padding: 24,
        alignItems: 'center'
    },
    totalBudgetContainer: {
        marginTop: 30,
    },
    tipsContainer: {
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#c6dfd2',
        borderRadius: 12,
        marginLeft: 18,
        marginRight: 18,
        marginTop: 10,
        marginBottom: 10,
        padding: 8,
    },
    tipsText: {
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 14,
        paddingRight: 14,
        fontSize: 16,
    },
    bottomMargin: {
        marginBottom: 10,
    }
});