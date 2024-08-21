import React, {useState} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import BottomTabBar from '../../components/BottomTabBar';
import CartHeader from '../../components/CartHeader';

function CartScreen({navigation}){
    const [currentScreen, setCurrentScreen] = useState('Cart');
    const [count, setCount] = useState(0);

    const handleNavigation = (screen) => {
        setCurrentScreen(screen);
        navigation.navigate(screen);
    };
    return (
        <>
        <CartHeader navigation={navigation}/>
        <View style={styles.container}>
            
            <Text style={styles.items}>Items</Text>
            <BottomTabBar
            navigation={navigation} 
            currentScreen={currentScreen}
            onNavigate={handleNavigation}/>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    items:{
        color: '#2A65BC',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 15,
        marginLeft: 20,
    },
})
export default CartScreen