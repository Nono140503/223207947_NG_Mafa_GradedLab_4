import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';


function WelcomeScreen({navigation}){
    const handleHome = ()=>{
        navigation.navigate('Home Screen');
    }
    return (
        <>
            <View style={styles.container}>
                <Image source={require('../../assets/QuickBite-removebg-preview.png')} style={styles.img}/>
                <TouchableOpacity style={styles.button} onPress={handleHome}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
    },
    img:{
        height: 400,
        width: 450,
        marginTop: 150,
    },
    button:{
        backgroundColor: '#2A65BC',
        padding: 20,
        width: '50%',
        alignItems: 'center',
        borderRadius: 20,

    },
    buttonText:{
        color: 'white',
        fontSize: 17,
    },
})
export default WelcomeScreen