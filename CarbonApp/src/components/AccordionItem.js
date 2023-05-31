import { StyleSheet, Text, View, TouchableOpacity, Animated, LayoutAnimation } from 'react-native';
import React, { useState, useRef } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const toggleAnimation = {
    duration: 300,
    update: {
        duration: 300,
        property: LayoutAnimation.Properties.opacity,
        type: LayoutAnimation.Types.easeInEaseOut
    },
    delete: {
        duration: 200,
        property: LayoutAnimation.Properties.opacity,
        type: LayoutAnimation.Types.easeInEaseOut
    }
}

const AccordionItem = ({ title, bodyText }) => {
    const [showContent, setShowContent] = useState(false);
    const animationController = useRef(new Animated.Value(0)).current;

    const toggleListItem = () => {
        const config = {
            duration: 300,
            toValue: showContent ? 0 : 1,
            useNativeDriver: true
        };
        Animated.timing(animationController, config);
        LayoutAnimation.configureNext(toggleAnimation);
        setShowContent(!showContent);
    };

    const arrowTransform = animationController.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '90deg']
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => toggleListItem()}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Animated.View style={{ transform: [{ rotateZ: arrowTransform }] }}>
                        {showContent ? <MaterialIcons name={'keyboard-arrow-up'} size={30} /> : <MaterialIcons name={'keyboard-arrow-down'} size={30} />}
                    </Animated.View>
                </View>
            </TouchableOpacity>
            {showContent && (
                <View styles={styles.bodyContainer}>
                    <Text style={styles.body}>{bodyText}</Text>
                </View>
            )}
        </View>
    )
};

export default AccordionItem;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: '2%',
        borderRadius: 12,
        backgroundColor: 'white',
        marginBottom: '2.5%',
        overflow: 'hidden',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 22,
        color: 'black',
        //fontWeight: 'bold',
    },
    bodyContainer: {
        paddingHorizontal: '2%',
        paddingVertical: '3%',
    },
    body: {
        fontSize: 18,
        margin: 8,
    }
});