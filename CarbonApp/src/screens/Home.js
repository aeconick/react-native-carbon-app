import { SafeAreaView, StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';

let dummieData = [
  {
    "avg": 24,
    "day": "2023-05-29",
    "max": 35,
    "min": 16
  },
  {
    "avg": 24,
    "day": "2023-05-30",
    "max": 39,
    "min": 17
  },
  {
    "avg": 27,
    "day": "2023-05-31",
    "max": 38,
    "min": 13
  },
  {
    "avg": 29,
    "day": "2023-06-01",
    "max": 40,
    "min": 15
  },
  {
    "avg": 26,
    "day": "2023-06-02",
    "max": 26,
    "min": 18
  }
];

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView>

    
      <View style={styles.container}>
        <Text style={styles.title}>Current Air Quality</Text>

        <View style={styles.locationContainer}>
        <Text style={styles.location}>Plovdiv - Kamenitsa, Bulgaria</Text>
        <Entypo name="location-pin" size={20} color="black" />
        </View>

        <View style={styles.current}>
          <Image
            style={styles.largeIcon}
            source={require('../pictures/air.png')}
          />
          <Text style={styles.currentIndex}>24</Text>
        </View>

        <Text style={styles.currentDescription}>Air Quality is Good!</Text>

        

        <Image
          style={styles.bigImage}
          source={require('../pictures/city.png')}
        />

<View>
          <Text style={styles.subtitle}>Upcoming Forecast</Text>
        </View>

        <FlatList
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
    fontSize: 20
  },
  current: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  largeIcon: {
    width: 150,
    height: 150,
    marginLeft: 50,
    marginRight: 20,
  },
  currentIndex: {
    fontSize: 80,
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
  subtitle: {
    fontSize: 24,
    marginVertical: 12,
    marginLeft: 20,
    color: 'seagreen',
    fontWeight: 'bold',
  },
  bigImage: {
    width: '100%',
    height: 218,
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
    fontSize: 20,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    marginLeft:62,
    width: '100%'
  },
});
