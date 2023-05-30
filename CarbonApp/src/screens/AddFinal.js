import { View, Text, SafeAreaView, Keyboard, ScrollView } from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Button from '../components/Button';
import Loader from '../components/Loader';
import Input from '../components/Input';

const AddFinal = ({
  route,
  navigation
}) => {
  const [inputs, setInputs] = React.useState({
    name: '',
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const item = route.params.selectedItem;
  //console.log(item);

  const [range, setRange] = React.useState(item.info.min);
  const [emissions, setEmissions] = React.useState((item.info.min * item.info.emissions).toFixed(2));

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.name) {
      handleError('Please input name', 'name');
      isValid = false;
    }

    if (isValid) {
      add();
    }
  };

  const add = () => {
    setLoading(true);

    let token = '';
    const getUserData = async () => {
      try {
        const value = await AsyncStorage.getItem("userData");
  
        let userData = JSON.parse(value);
        token = userData.accessToken;
  
      } catch (e) {
        alert('Failed to fetch the input from storage');
      }
    };
    getUserData();

    const config = {
      headers: {
        'x-authorization': token || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5lbGlfcGNAbWFpbC5iZyIsIl9pZCI6IjY0NTkyYjUxMGExZjExOGZhM2Y4M2M3MiIsImlhdCI6MTY4NTQzODEwNH0.tDB2BUoZyC90A9UWTsM8Lq9F0o-Rv3C_5_Ap3y2N1OA', //TODO
      }
    };

    let logForm = {
      category: item.category,
      type: item.info.type,
      emissions,
      title: inputs.name,
      created: new Date(),
    };

    axios.post('http://192.168.1.100:3030/data/catalog', logForm, config)
      .then(function (response) {
        console.log(response.data);
        setLoading(false);
        navigation.navigate('Budget');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({ ...prevState, [input]: error }));
  };

  const onSliderChange = (value) => {
    setRange(parseInt(value));
    setEmissions((parseInt(value) * item.info.emissions).toFixed(2));
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}>
        <Text style={{ color: "black", fontSize: 30, fontWeight: 'bold' }}>
          {item.category}
        </Text>
        <Text style={{ color: "grey", fontSize: 20, marginVertical: 10 }}>
          {item.info.type}
        </Text>
        <Text style={{ color: "black", fontSize: 24, fontWeight: 'bold' }}>
          {item.info.unit}
        </Text>
        <Text style={{ color: "grey", fontSize: 20, marginVertical: 10 }}>
          {range} {item.info.text}
        </Text>

        <View style={{ marginTop: 10, marginBottom: 10 }}>
          <Slider
            style={{}}
            minimumValue={item.info.min}
            maximumValue={item.info.max}
            minimumTrackTintColor="seagreen"
            maximumTrackTintColor="grey"
            thumbTintColor='seagreen'
            value={item.info.min}
            onValueChange={value => onSliderChange(value)}
          />
        </View>

        <Text style={{ color: "black", fontSize: 24, fontWeight: 'bold' }}>
          Total
        </Text>
        <Text style={{ color: "black", fontSize: 20, marginVertical: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>{emissions}</Text> kgCO2eq
        </Text>
        <View style={{ marginVertical: 20 }}>
          <Input
            onChangeText={text => handleOnchange(text, 'name')}
            onFocus={() => handleError(null, 'name')}
            iconName="pencil-box-outline"
            label="Name of emission"
            placeholder="Enter the name here"
            error={errors.name}
          />

          <Button title="Add this emission" onPress={validate} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
};

export default AddFinal;