import React, {useState, useContext} from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert, Platform} from 'react-native';
import BottomTabBar from '../../components/BottomTabBar';
import AddressDetailsHeader from '../../components/AddressDetailsHeader';
import { UserAddressContext } from '../../Global/userProfileAddress';

function Form_2({navigation}){
    const [currentScreen, setCurrentScreen] = useState('Form 2');
    const {userAddress,setAddress} = useContext(UserAddressContext);
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');

    const handleNavigation = (screen) => {
        setCurrentScreen(screen);
        navigation.navigate(screen);
    }; 
    
    // const validateForm = () => {
    //     if (!streetAddress) {
    //         Alert.alert('Street address is required');
    //         return false;
    //     }
    //     if (!city) {
    //         Alert.alert('City is required');
    //         return false;
    //     }
    //     if (!state) {
    //         Alert.alert('State is required');
    //         return false;
    //     }
    //     if (!zipCode || zipCode.length !== 4 || isNaN(zipCode)) {
    //         Alert.alert('Zip Code must be a 4-digit number');
    //         return false;
    //     }
    //     return true;
    // };
    const handleNext = () =>{
        // if (validateForm()) {
            setAddress({streetAddress, city, state, zipCode});
            Alert.alert('Successfully saved.')
            navigation.navigate('Form 3');
        // }
    }

    return (
        <>
        <AddressDetailsHeader navigation={navigation}/>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View>
            <Text style={styles.detail}>Street Address</Text>
            <TextInput placeholder='i.e 121 Long Street' style={styles.input} value={streetAddress} onChangeText={setStreetAddress}></TextInput>
            <Text style={styles.detail}>City</Text>
            <TextInput placeholder='i.e Johannesburg' style={styles.input} value={city} onChangeText={setCity}></TextInput>
            <Text style={styles.detail}>State</Text>
            <TextInput placeholder='i.e. Gauteng' style={styles.input} value={state} onChangeText={setState}></TextInput>
            <Text style={styles.detail}>Zip Code</Text>
            <TextInput placeholder='i.e. 1709' style={styles.input} value={zipCode} onChangeText={setZipCode} maxLength={4} keyboardType='numeric'></TextInput>
            <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
            </View>
           
        </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonText:{
        color:'white',
        fontSize: 18,
    },
    detail:{
        color: '#2A65BC',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 15,
        marginLeft: 20,
    },
    input:{
        backgroundColor: 'white',
        padding: 18,
        width: '90%',
        marginLeft: 20,
        borderRadius: 10,
        borderColor: 'grey',
        borderWidth: 0.5,
        marginTop: 10,
    },
    button: {
        padding: 20,
        backgroundColor: '#2A65BC',
        marginTop: 50,
        alignItems: 'center',
        width: '45%',
        marginLeft: 105,
        borderRadius: 10,
    },
})
export default Form_2
