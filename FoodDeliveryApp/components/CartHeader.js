import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon  from "react-native-vector-icons/Ionicons";

function CartHeader({navigation}){
    const handleBack = ()=>{
        navigation.navigate('Home Screen');
    }
    
    return(
        <>
        <View style={styles.cont}>
            <TouchableOpacity style={styles.icon_cont} onPress={handleBack}>
              <Icon name='chevron-back-outline' size={25} style={styles.icon}/>
            </TouchableOpacity>
            <Text style={styles.text}>My Cart</Text>
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
    icon_cont:{
        padding: 10,
    },
    icon:{
        marginTop: 15,
        color: '#2A65BC'
    },
    text:{
        marginLeft: 90,
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2A65BC'
    },
})
export default CartHeader