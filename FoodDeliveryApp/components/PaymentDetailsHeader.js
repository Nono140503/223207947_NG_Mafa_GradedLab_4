import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon  from "react-native-vector-icons/Ionicons";

function PaymentDetailsHeader({navigation}){
    const handleBack = ()=>{
        navigation.navigate('Profile');
    }
    
    return(
        <>
        <View style={styles.cont}>
            <Text style={styles.text}>Payment Details</Text>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    cont:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fff',
        borderBottomColor: 'grey',
        borderBottomWidth: 0.4,
    },
   
    text:{
        marginLeft: 100,
        marginTop: 30,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2A65BC'
    },
})
export default PaymentDetailsHeader