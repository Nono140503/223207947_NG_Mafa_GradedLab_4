import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import BottomTabBar from '../../components/BottomTabBar';
import PaymentDetailsHeader from '../../components/PaymentDetailsHeader';
import Icon from 'react-native-vector-icons/Ionicons';

function Form_3({navigation}) {
    const [currentScreen, setCurrentScreen] = useState('Form 3');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [ccv, setCcv] = useState('');
    const [cardType, setCardType] = useState('');

    // const handleValidMonth = () => {
    //     if (month < 1 || month > 12) {
    //         Alert.alert('Invalid month');
    //     }
    // };

    const detectCardType = (number) => {
        if (number.startsWith('4')) {
            return 'visa';
        } else if (number.startsWith('51') || number.startsWith('52') ||
                   number.startsWith('53') || number.startsWith('54') ||
                   number.startsWith('55')) {
            return 'mastercard';
        }
        return '';
    };

    const handleCardNumberChange = (number) => {
        setCardNumber(number);
        setCardType(detectCardType(number));
    };

    const handleNavigation = (screen) => {
        setCurrentScreen(screen);
        navigation.navigate(screen);
    };

    const handleNext = () => {
        if (validateForm()) {
            navigation.navigate('Home Screen');
        }
    };

    const validateForm = () => {
        if (cardNumber.length !== 16 || isNaN(cardNumber)) {
            Alert.alert('Validation Error', 'Card Number must be 16 digits');
            return false;
        }
        if (month < 1 || month > 12) {
            Alert.alert('Validation Error', 'Invalid month');
            return false;
        }
        if (year.length !== 4 || isNaN(year)) {
            Alert.alert('Validation Error', 'Year must be 4 digits');
            return false;
        }
        if (ccv.length !== 3 || isNaN(ccv)) {
            Alert.alert('Validation Error', 'CCV must be 3 digits');
            return false;
        }
        return true;
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <PaymentDetailsHeader navigation={navigation}/>
                <View style={styles.container}>
                    <Text style={styles.detail}>Credit Card Number</Text>
                    <View style={styles.cardInputContainer}>
                        <TextInput placeholder='Card number should be 16 digits' style={styles.input} maxLength={16} keyboardType="numeric" value={cardNumber} onChangeText={handleCardNumberChange} />
                        {cardType === 'visa' && (
                            <Image source={require('../../assets/visa_logo.png')} style={styles.visa} />
                        )}
                        {cardType === 'mastercard' && (
                            <Image source={require('../../assets/master_card_logo.png')} style={styles.master_card} />
                        )}
                    </View>
                    <Text style={styles.detail}>Expiration Date</Text>
                    <View style={styles.date}>
                        <TextInput placeholder='MM' style={styles.month} maxLength={2} keyboardType="numeric" value={month} onChangeText={(text) => setMonth(Number(text))}/>
                        <TextInput placeholder='YYYY' style={styles.year} maxLength={4} keyboardType="numeric" value={year} onChangeText={(text) => setYear(text)} />
                    </View>
                    <Text style={styles.detail}>CCV</Text>
                    <TextInput placeholder='ie. 111' style={styles.ccv} maxLength={3} keyboardType="numeric" value={ccv} onChangeText={(text) => setCcv(text)} />
                    <Icon name='card-outline' size={25} style={styles.icon}/>

                    <TouchableOpacity style={styles.button} onPress={handleNext}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A1C1E1'
    },
    buttonText:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    icon:{
        bottom: 40,
        left: 132,
        color: '#2A65BC',
    },
    visa:{
        width: 65,
        height: 30,
        right: 80 ,
        marginTop: 10,
    },
    date:{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
    },
    month:{
        backgroundColor: 'white',
        padding: 18,
        marginLeft: 20,
        borderRadius: 10,
        borderColor: 'grey',
        borderWidth: 0.5,
        marginTop: 10,
        width: '20%',
    },
    ccv:{
        backgroundColor: 'white',
        padding: 18,
        marginLeft: 20,
        borderRadius: 10,
        borderColor: 'grey',
        borderWidth: 0.5,
        marginTop: 10,
        width: '40%',
    },
    year:{
        marginLeft: 10,
        backgroundColor: 'white',
        padding: 18,
        marginLeft: 20,
        borderRadius: 10,
        borderColor: 'grey',
        borderWidth: 0.5,
        marginTop: 10,
        width:'30%',
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
        borderRadius: 10,
        borderColor: 'grey',
        borderWidth: 0.5,
        marginTop: 10,
    },
    cardInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
    master_card: {
        width: 60,
        height: 30,
        right: 70 ,
        marginTop: 10,
    },
    button: {
        padding: 20,
        backgroundColor: '#2A65BC',
        marginTop: 50,
        alignItems: 'center',
        width: '45%',
        marginLeft: 100,
        borderRadius: 10,
    },
});

export default Form_3;
