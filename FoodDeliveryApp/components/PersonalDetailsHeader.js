import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon  from "react-native-vector-icons/Ionicons";

function PersonalDetailsHeader({navigation}){
    const handleBack = ()=>{
        navigation.navigate('Profile');
    }
    
    return(
        <>
        <View style={styles.cont}>
            <TouchableOpacity style={styles.icon_cont} onPress={handleBack}>
              <Icon name='chevron-back-outline' size={25} style={styles.icon}/>
            </TouchableOpacity>
            <Text style={styles.text}>Personal Details</Text>
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
        padding: 7,
    },
    icon:{
        marginTop: 19,
        color: '#2A65BC'
    },
    text:{
        marginLeft: 50,
        marginTop: 30,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2A65BC'
    },
})
export default PersonalDetailsHeader