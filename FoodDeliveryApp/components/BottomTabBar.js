import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function BottomTabBar({ navigation, currentScreen }) {
    const defaultColor = 'grey';
    const activeColor = '#2A65BC';

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home Screen')}
                style={styles.iconContainer}
            >
                <Icon 
                    name='home' 
                    size={30} 
                    color={currentScreen === 'Home Screen' ? activeColor : defaultColor} 
                />
                <Text style={{ color: currentScreen === 'Home Screen' ? activeColor : defaultColor }} >Home</Text>
            </TouchableOpacity>
           
            <TouchableOpacity
                onPress={() => navigation.navigate('Cart')}
                style={styles.iconContainer}
            >
                <Icon 
                    name='cart-outline' 
                    size={30} 
                    color={currentScreen === 'Cart' ? activeColor : defaultColor} 
                />
                <Text style={{ color: currentScreen === 'Cart' ? activeColor : defaultColor }}>Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Profile')}
                style={styles.iconContainer}
            >
                <Icon 
                    name='person-circle-outline' 
                    size={30} 
                    color={currentScreen === 'Profile' ? activeColor : defaultColor} 
                />
                <Text style={{ color: currentScreen === 'Profile' ? activeColor : defaultColor }}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderTopColor: 'grey',
        borderTopWidth: 0.4,
        padding: '2%',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'white',
    
    },
    iconContainer: {
        padding: 10,
        alignItems: 'center',
    },
});

export default BottomTabBar;
