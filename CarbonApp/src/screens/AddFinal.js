import {View, Text, SafeAreaView, Keyboard, ScrollView} from 'react-native';
import {useState, useContext} from 'react';
import Slider from '@react-native-community/slider';

import Button from '../components/Button';
import Loader from '../components/Loader';
import Input from '../components/Input';
import {LogContext} from "../contexts/LogContext";

const AddFinal = ({
                      route,
                      navigation
                  }) => {
    const {onCreateLogSubmit, loading} = useContext(LogContext);
    const [inputs, setInputs] = useState({
        name: '',
    });
    const [errors, setErrors] = useState({});

    const item = route.params.selectedItem;

    const [range, setRange] = useState(item.info.min);
    const [emissions, setEmissions] = useState((item.info.min * item.info.emissions).toFixed(2));

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
        const logForm = {
            category: item.category,
            type: item.info.type,
            emissions,
            title: inputs.name,
            created: new Date(),
        };

        onCreateLogSubmit(logForm);
    };

    const handleOnchange = (text, input) => {
        setInputs(prevState => ({...prevState, [input]: text}));
    };
    const handleError = (error, input) => {
        setErrors(prevState => ({...prevState, [input]: error}));
    };

    const onSliderChange = (value) => {
        setRange(parseInt(value));
        setEmissions((parseInt(value) * item.info.emissions).toFixed(2));
    };

    return (
        <SafeAreaView style={{backgroundColor: "white", flex: 1}}>
            <Loader visible={loading}/>
            <ScrollView
                contentContainerStyle={{paddingTop: 50, paddingHorizontal: 20}}>
                <Text style={{color: "black", fontSize: 30, fontWeight: 'bold'}}>
                    {item.category}
                </Text>
                <Text style={{color: "grey", fontSize: 20, marginVertical: 10}}>
                    {item.info.type}
                </Text>
                <Text style={{color: "black", fontSize: 24, fontWeight: 'bold'}}>
                    {item.info.unit}
                </Text>
                <Text style={{color: "grey", fontSize: 20, marginVertical: 10}}>
                    {range} {item.info.text}
                </Text>

                <View style={{marginTop: 10, marginBottom: 10}}>
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

                <Text style={{color: "black", fontSize: 24, fontWeight: 'bold'}}>
                    Total
                </Text>
                <Text style={{color: "black", fontSize: 20, marginVertical: 10}}>
                    <Text style={{fontWeight: 'bold'}}>{emissions}</Text> kgCO2eq
                </Text>
                <View style={{marginVertical: 20}}>
                    <Input
                        onChangeText={text => handleOnchange(text, 'name')}
                        onFocus={() => handleError(null, 'name')}
                        iconName="pencil-box-outline"
                        label="Name of emission"
                        placeholder="Enter the name here"
                        error={errors.name}
                    />

                    <Button title="Add this emission" onPress={validate}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

export default AddFinal;