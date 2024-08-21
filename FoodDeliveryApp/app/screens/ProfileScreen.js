import React, {useState} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import BottomTabBar from '../../components/BottomTabBar';
function ProfileScreen({navigation}){
    const [currentScreen, setCurrentScreen] = useState('Profile');

    const handleNavigation = (screen) => {
        setCurrentScreen(screen);
        navigation.navigate(screen);
    };
    return (
        <>
        <View style={styles.container}>
            <Text>Cart Screen</Text>
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
        justifyContent: 'center',
        alignItems: 'center',
    },
})
export default ProfileScreen