import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons';
import CircularProgress from 'react-native-circular-progress-indicator';

import months from '../constants/months';
import { ScrollView } from 'react-native-gesture-handler';

const Budget = () => {
  const [monthlyLogs, setMonthlyLogs] = useState([]);
  const [monthlyEmissions, setMonthlyEmissions] = useState(0);
  const [yearlyLogs, setYearlyLogs] = useState([]);
  const [yearlyEmissions, setYearlyEmissions] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');

  const [monthlyBudget, setMonthlyBudget] = useState(167);
  const [monthlyMeal, setMonthlyMeal] = useState(0);
  const [monthlyTransport, setMonthlyTransport] = useState(0);
  const [monthlyStreaming, setMonthlyStreaming] = useState(0);
  const [monthlyPurchase, setMonthlyPurchase] = useState(0);
  const [monthlyFashion, setMonthlyFashion] = useState(0);
  const [monthlyFood, setMonthlyFood] = useState(0);
  const [monthlyElectricity, setMonthlyElectricity] = useState(0);
  const [monthlyCustom, setMonthlyCustom] = useState(0);

  const [yearlyBudget, setYearlyBudget] = useState(2004);
  const [yearlyMeal, setYearlyMeal] = useState(0);
  const [yearlyTransport, setYearlyTransport] = useState(0);
  const [yearlyStreaming, setYearlyStreaming] = useState(0);
  const [yearlyPurchase, setYearlyPurchase] = useState(0);
  const [yearlyFashion, setYearlyFashion] = useState(0);
  const [yearlyFood, setYearlyFood] = useState(0);
  const [yearlyElectricity, setYearlyElectricity] = useState(0);
  const [yearlyCustom, setYearlyCustom] = useState(0);

  const date = new Date();

  const getUserData = async () => {
    try {
      const value = await AsyncStorage.getItem("userData");

      let userData = JSON.parse(value);
      setToken(userData.accessToken);
      setUserId(userData._id)

    } catch (e) {
      console.log('Failed to fetch the input from storage');
    }
  };
  getUserData();

  const getLogsData = (userId) => {
    console.log(token);
    axios.get(`http://192.168.1.100:3030/data/catalog?where=_ownerId%3D%22${userId}%22`)
      .then(function (response) {
        setMonthlyLogs(response.data.filter(item => item.created.split('-')[1] == date.getMonth() + 1));
        setYearlyLogs(response.data.filter(item => item.created.split('-')[0] == date.getFullYear()));

        //monthly
        let emissions = 0;

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
          emissions += item.emissions
          monthlyCategory[item.category] += item.emissions;
        });
        console.log(monthlyCategory);
        setMonthlyEmissions(emissions);
        setMonthlyMeal(monthlyCategory.Meal);
        setMonthlyTransport(monthlyCategory.Transport);
        setMonthlyStreaming(monthlyCategory.Streaming);
        setMonthlyPurchase(monthlyCategory.Purchase);
        setMonthlyFashion(monthlyCategory.Fashion);
        setMonthlyFood(monthlyCategory.Food);
        setMonthlyElectricity(monthlyCategory.Electricity);
        setMonthlyCustom(monthlyCategory.Custom);

        //yearly
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
        console.log(yearlyCategory);
        setYearlyEmissions(yearlyEmissions);
        setYearlyMeal(yearlyCategory.Meal);
        setYearlyTransport(yearlyCategory.Transport);
        setYearlyStreaming(yearlyCategory.Streaming);
        setYearlyPurchase(yearlyCategory.Purchase);
        setYearlyFashion(yearlyCategory.Fashion);
        setYearlyFood(yearlyCategory.Food);
        setYearlyElectricity(yearlyCategory.Electricity);
        setYearlyCustom(yearlyCategory.Custom);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  let i = 1;
  useEffect(() => {
    console.log('useEffect: ', i++);
    getLogsData(userId)
  }, [userId]);

  const refresh = () => {
    getLogsData(userId);
  }

  return (
    <SafeAreaView>
      <ScrollView>
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
                  <Text style={styles.modalMainText}>LQLQLQLQLQL</Text>
                  <Text style={styles.modalSubText}>LQLQLQLQLQLQLQ</Text>
                </View>
                <View style={styles.modalButtons}>
                  <TouchableOpacity
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>   Cancel   </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>   Cancel   </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Your current budget</Text>
          <TouchableOpacity style={styles.refresh} onPress={() => refresh()}>
            <FontAwesome name="refresh" size={24} color="seagreen" />
          </TouchableOpacity>
        </View>
        {console.log('monthlyBuder: ',monthlyBudget.toString())}
        <View style={styles.progressContainer}>
          <Text style={styles.progressTitle}>{months[date.getMonth()]}</Text>
          <CircularProgress
            radius={90}
            value={monthlyEmissions*0.5988024}
            valueSuffix={'%'}
            maxValue={100}
            progressValueStyle={{ fontSize: 28 }}
            activeStrokeWidth={18}
            inActiveStrokeWidth={18}
            activeStrokeColor={'seagreen'}
            inActiveStrokeColor={'seagreen'}
            inActiveStrokeOpacity={0.2}
            progressValueColor={'black'}
          />

          {/* TODO: fix total toFixed */}

          <View style={styles.percentContainer}>
            {monthlyMeal != 0 && <Text style={styles.percentMain}><Text style={styles.percentTitle}>Meal: </Text><Text style={styles.percentSubtitle}>{monthlyMeal.toFixed(0)} kg - {((100 * monthlyMeal) / monthlyBudget).toFixed(0)} %</Text></Text>}
            {monthlyTransport != 0 && <Text style={styles.percentMain}><Text style={styles.percentTitle}>Transport: </Text><Text style={styles.percentSubtitle}>{monthlyTransport.toFixed(0)} kg - {((100 * monthlyTransport) / monthlyBudget).toFixed(0)} %</Text></Text>}
            {monthlyStreaming != 0 && <Text style={styles.percentMain}><Text style={styles.percentTitle}>Streaming: </Text><Text style={styles.percentSubtitle}>{monthlyStreaming.toFixed(0)} kg - {((100 * monthlyStreaming) / monthlyBudget).toFixed(0)} %</Text></Text>}
            {monthlyPurchase != 0 && <Text style={styles.percentMain}><Text style={styles.percentTitle}>Purchase: </Text><Text style={styles.percentSubtitle}>{monthlyPurchase.toFixed(0)} kg - {((100 * monthlyPurchase) / monthlyBudget).toFixed(0)} %</Text></Text>}
            {monthlyFashion != 0 && <Text style={styles.percentMain}><Text style={styles.percentTitle}>Fashion: </Text><Text style={styles.percentSubtitle}>{monthlyFashion.toFixed(0)} kg - {((100 * monthlyFashion) / monthlyBudget).toFixed(0)} %</Text></Text>}
            {monthlyFood != 0 && <Text style={styles.percentMain}><Text style={styles.percentTitle}>Food: </Text><Text style={styles.percentSubtitle}>{monthlyFood.toFixed(0)} kg - {((100 * monthlyFood) / monthlyBudget).toFixed(0)} %</Text></Text>}
            {monthlyElectricity != 0 && <Text style={styles.percentMain}><Text style={styles.percentTitle}>Electricity: </Text><Text style={styles.percentSubtitle}>{monthlyElectricity.toFixed(0)} kg - {((100 * monthlyElectricity) / monthlyBudget).toFixed(0)} %</Text></Text>}
            {monthlyCustom != 0 && <Text style={styles.percentMain}><Text style={styles.percentTitle}>Custom: </Text><Text style={styles.percentSubtitle}>{monthlyCustom.toFixed(0)} kg - {((100 * monthlyCustom) / monthlyBudget).toFixed(0)} %</Text></Text>}
            {monthlyEmissions != 0 && <Text style={styles.percentMain}><Text style={styles.percentTitle}>Total: </Text><Text style={styles.percentSubtitle}>{monthlyEmissions.toFixed(0)} kg</Text></Text>}
            <View style={styles.totalBudgetContainer}>
              <Text style={styles.percentMain}><Text style={styles.percentTitle}>Budget for {months[date.getMonth()]}: </Text><Text style={styles.percentSubtitle}>{monthlyBudget} kg</Text></Text>
            </View>
          </View>

        </View>

        <View style={styles.progressContainer}>
          <Text style={styles.progressTitle}>{date.getFullYear()}</Text>
          <CircularProgress
            radius={90}
            value={yearlyEmissions*0.0499002}
            valueSuffix={'%'}
            maxValue={100}
            progressValueStyle={{ fontSize: 28 }}
            activeStrokeWidth={18}
            inActiveStrokeWidth={18}
            activeStrokeColor={'seagreen'}
            inActiveStrokeColor={'seagreen'}
            inActiveStrokeOpacity={0.2}
            progressValueColor={'black'}
          />

          {/* TODO: fix total toFixed */}

          <View style={styles.percentContainer}>
            {yearlyMeal != 0 && <Text style={styles.percentMain}><Text style={styles.percentTitle}>Meal: </Text><Text style={styles.percentSubtitle}>{yearlyMeal.toFixed(0)} kg - {((100 * yearlyMeal) / yearlyBudget).toFixed(0)} %</Text></Text>}
            {yearlyTransport != 0 && <Text style={styles.percentMain}><Text style={styles.percentTitle}>Transport: </Text><Text style={styles.percentSubtitle}>{yearlyTransport.toFixed(0)} kg - {((100 * yearlyTransport) / yearlyBudget).toFixed(0)} %</Text></Text>}
            {yearlyStreaming != 0 && <Text style={styles.percentMain}><Text style={styles.percentTitle}>Streaming: </Text><Text style={styles.percentSubtitle}>{yearlyStreaming.toFixed(0)} kg - {((100 * yearlyStreaming) / yearlyBudget).toFixed(0)} %</Text></Text>}
            {yearlyPurchase != 0 && <Text style={styles.percentMain}><Text style={styles.percentTitle}>Purchase: </Text><Text style={styles.percentSubtitle}>{yearlyPurchase.toFixed(0)} kg - {((100 * yearlyPurchase) / yearlyBudget).toFixed(0)} %</Text></Text>}
            {yearlyFashion != 0 && <Text style={styles.percentMain}><Text style={styles.percentTitle}>Fashion: </Text><Text style={styles.percentSubtitle}>{yearlyFashion.toFixed(0)} kg - {((100 * yearlyFashion) / yearlyBudget).toFixed(0)} %</Text></Text>}
            {yearlyFood != 0 && <Text style={styles.percentMain}><Text style={styles.percentTitle}>Food: </Text><Text style={styles.percentSubtitle}>{yearlyFood.toFixed(0)} kg - {((100 * yearlyFood) / yearlyBudget).toFixed(0)} %</Text></Text>}
            {yearlyElectricity != 0 && <Text style={styles.percentMain}><Text style={styles.percentTitle}>Electricity: </Text><Text style={styles.percentSubtitle}>{yearlyElectricity.toFixed(0)} kg - {((100 * yearlyElectricity) / yearlyBudget).toFixed(0)} %</Text></Text>}
            {yearlyCustom != 0 && <Text style={styles.percentMain}><Text style={styles.percentTitle}>Custom: </Text><Text style={styles.percentSubtitle}>{yearlyCustom.toFixed(0)} kg - {((100 * yearlyCustom) / yearlyBudget).toFixed(0)} %</Text></Text>}
            {yearlyEmissions != 0 && <Text style={styles.percentMain}><Text style={styles.percentTitle}>Total: </Text><Text style={styles.percentSubtitle}>{yearlyEmissions.toFixed(0)} kg</Text></Text>}
            <View style={styles.totalBudgetContainer}>
              <Text style={styles.percentMain}><Text style={styles.percentTitle}>Budget for {date.getFullYear()}: </Text><Text style={styles.percentSubtitle}>{yearlyBudget} kg</Text></Text>
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

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
    marginBottom: 15,
    textAlign: 'left',
    marginBottom: 20,
  },
  modalMainText: {
    fontSize: 26,
    fontWeight: 'bold',

  },
  modalSubText: {
    fontSize: 20,
    color: 'grey',
  },
  modalButtons: {
    flexDirection: 'row',
  },
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
    fontWeight: 'bold',
  },
  refresh: {
    marginLeft: 58,
    marginTop: 6,
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
  }
});