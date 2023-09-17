import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Entypo } from '@expo/vector-icons';
import axios from 'axios';

const Home = () => {
  const [forecast, setForecast] = useState([]);
  const [status, setStatus] = useState('');

  const calculateStatus = (number) => {
    if (number <= 50) {
      setStatus('Good')
    } else if (number <= 100) {
      setStatus('Moderate')
    } else if (number <= 150) {
      setStatus('Bad')
    } else if (number <= 200) {
      setStatus('Unhealthy')
    } else if (number <= 300) {
      setStatus('Very Unhealthy')
    } else {
      setStatus('Hazardous')
    }
  }

  const getForecastData = () => {
    axios.get(`https://api.waqi.info/feed/here/?token=d3088553f04fdb829e101accb30e6a0a3f7b3a50`)
      .then(function (response) {
        response.data.data.city.name = 'Plovdiv - Kamenitsa, Bulgaria';
        setForecast(response.data.data);
        let statusData = Number(response.data.data.aqi);
        calculateStatus(statusData);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  useEffect(() => {
    getForecastData();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Current Air Quality</Text>
          <View style={styles.locationContainer}>
            <Text style={styles.location}>{forecast.city?.name}</Text>
            <Entypo name="location-pin" size={20} color="black" />
          </View>
          <View style={styles.current}>
            <Image
              style={styles.largeIcon}
              source={require('../../assets/air.png')}
            />
            <Text style={styles.currentIndex}>{forecast.aqi}</Text>
          </View>
          <Text style={styles.currentDescription}>Air Quality is {status}!</Text>
          <Image
            style={styles.bigImage}
            source={require('../../assets/city.png')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    color: 'seagreen',
  },
  location: {
    fontWeight: '200',
    fontSize: 20,
  },
  current: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 60,
  },
  largeIcon: {
    width: 150,
    height: 150,
    marginLeft: 44,
    marginRight: 20,
  },
  currentIndex: {
    fontSize: 108,
    textAlign: 'center',
    color: 'teal'
  },
  currentDescription: {
    width: '100%',
    textAlign: 'center',
    fontWeight: '200',
    fontSize: 24,
    marginBottom: 5,
  },
  bigImage: {
    width: 400,
    height: 328,
  },
  smallImage: {
    height: 60,
    width: 60,
  },
  day: {
    padding: 8,
    alignItems: 'center',
    marginLeft: 20
  },
  dailyText: {
    color: 'teal',
    fontWeight: 'bold',
    fontSize: 30,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    marginLeft: 62,
    width: '100%'
  },
});
