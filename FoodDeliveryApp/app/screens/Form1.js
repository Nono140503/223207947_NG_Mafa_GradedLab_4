import React, {useState, useContext} from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert, Platform} from 'react-native';
import BottomTabBar from '../../components/BottomTabBar';
import PersonalDetailsHeader from '../../components/PersonalDetailsHeader';
import { UserContext } from '../../Global/useProfileNameAndEmail';

function Form_1({navigation}){
    const [currentScreen, setCurrentScreen] = useState('Form 1');
    const {userData,setUserData} = useContext(UserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const handleNavigation = (screen) => {
        setCurrentScreen(screen);
        navigation.navigate(screen);
    };
    
    // const validateForm = () => {
        
    //     if (!name) {
    //         Alert.alert('Name is required');
    //         return false;
    //     }
    //     if (!email || !email.includes('@')) {
    //         Alert.alert('Please enter avalid email is required');
    //         return false;
    //     }
    //     if (!number || number.length !== 10 || isNaN(number)) {
    //         Alert.alert('Phone Number must be a 10-digit number');
    //         return false;
    //     }
    //     return true;
    // };
    const handleSave = () =>{
        // if(validateForm()){
            setUserData({name, email});
            Alert.alert('Successfully saved.')
        // }
           
        
    }
    const handleNext = () =>{
        navigation.navigate('Form 2');
    }
    return (
        <>
        <PersonalDetailsHeader navigation={navigation}/>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.content}>
                <Text style={styles.detail}>Name</Text>
                <TextInput placeholder='Enter your name and surname' style={styles.input} value={name} onChangeText={setName}></TextInput>
                <Text style={styles.detail}>Email</Text>
                <TextInput placeholder='Enter your email address' style={styles.input} value={email} onChangeText={setEmail} keyboardType='email-address'></TextInput>
                <Text style={styles.detail}>Phone Number</Text>
                <TextInput placeholder='i.e 0818188118' style={styles.input} value={userData.phoneNumber} onChangeText={setNumber} maxLength={10} keyboardType='numeric'></TextInput>
                <TouchableOpacity style={styles.button} onPress={handleSave}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
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
    content:{
        marginTop: 30,
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
export default Form_1
