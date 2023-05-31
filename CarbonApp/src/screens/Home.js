import { SafeAreaView, StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native';
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
    // axios.get(`https://api.waqi.info/feed/here/?token=d3088553f04fdb829e101accb30e6a0a3f7b3a50`)
    //   .then(function (response) {
    //     setForecast(response.data.data);
    //     let statusData = Number(response.data.data.aqi);
    //     console.log("StatusData: ",statusData);
    //     calculateStatus(statusData);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })

    //TODO: Delete later and uncomment top
    setForecast({ "aqi": 39, "attributions": [{ "logo": "Europe-EEA.png", "name": "Изпълнителната агенция по околна среда (ИАОС) - Bulgaria Executive Environment Agency (EEA)", "url": "http://www.eea.government.bg/" }, { "logo": "Europe-EEA.png", "name": "European Environment Agency", "url": "http://www.eea.europa.eu/themes/air/" }, { "name": "World Air Quality Index Project", "url": "https://waqi.info/" }], "city": { "geo": [42.142889, 24.765239], "location": "", "name": "Plovdiv - Kamenitsa, Bulgaria", "url": "https://aqicn.org/city/bulgaria/plovdiv-kamenitsa" }, "debug": { "sync": "2023-05-31T23:41:57+09:00" }, "dominentpol": "o3", "forecast": { "daily": { "o3": [Array], "pm10": [Array], "pm25": [Array] } }, "iaqi": { "dew": { "v": 12.5 }, "h": { "v": 42.5 }, "no2": { "v": 0.2 }, "o3": { "v": 38.5 }, "p": { "v": 1015 }, "pm10": { "v": 14 }, "t": { "v": 26 }, "w": { "v": 5.4 } }, "idx": 10564, "time": { "iso": "2023-05-31T15:00:00+03:00", "s": "2023-05-31 15:00:00", "tz": "+03:00", "v": 1685545200 } });
    let statusData = Number(39);
    console.log("StatusData: ", statusData);
    calculateStatus(statusData);
  }

  useEffect(() => {
    getForecastData();
    console.log(forecast);
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Current Air Quality</Text>
          <View style={styles.locationContainer}>
            <Text style={styles.location}>{forecast.city?.name || 'Plovdiv - Kamenitsa, Vulgaria'}</Text>
            <Entypo name="location-pin" size={20} color="black" />
          </View>

          <View style={styles.current}>
            <Image
              style={styles.largeIcon}
              source={require('../pictures/air.png')}
            />
            <Text style={styles.currentIndex}>{forecast.aqi || '00'}</Text>
          </View>

          <Text style={styles.currentDescription}>Air Quality is {status || 'Doop'}!</Text>

          <Image
            style={styles.bigImage}
            source={require('../pictures/city.png')}
          />

          {/* <FlatList
            horizontal
            data={dummieData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(item) => {
              return (
                <View style={styles.day}>
                  <Text style={styles.dailyText}>15 May</Text>
                  <Text style={styles.dailyText}>24</Text>
                  <Image
                    style={styles.smallImage}
                    source={require('../pictures/small.png')}
                  />
                  <Text style={styles.dailyText}>Good</Text>
                </View>
              )
            }}
          /> */}

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
  // subtitle: {
  //   fontSize: 28,
  //   marginVertical: 12,
  //   marginLeft: 20,
  //   color: 'teal',
  //   fontWeight: 'bold',
  // },
  bigImage: {
    //width: '100%',
    //height: 218,
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
