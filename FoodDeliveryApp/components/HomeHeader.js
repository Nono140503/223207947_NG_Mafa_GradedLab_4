import React from "react";
import {View, Text, Image, StyleSheet} from 'react-native';

function HomeHeader(){
    return(
        <>
        <View style={styles.cont}>
            <Image source={require('../assets/QuickBite.png')} style={styles.img}/>
            <Text style={styles.text}>QuickBite</Text>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    cont:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
        borderBottomColor: 'grey',
        borderBottomWidth: 0.4,
    },
    img:{
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    text:{
        marginLeft: 60,
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2A65BC'
    },
})
export default HomeHeader