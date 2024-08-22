import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ImageBackground, Platform, Alert } from 'react-native';
import BottomTabBar from '../../components/BottomTabBar';
import Icon from 'react-native-vector-icons/Ionicons';


function ProfileScreen({ navigation }) {
    const [currentScreen, setCurrentScreen] = useState('Profile');
    const handleNavigation = (screen) => {
        setCurrentScreen(screen);
        navigation.navigate(screen);
    };

    const handleLogOut = () => {
        navigation.navigate('Welcome');
    };



    return (
        <>
            <View style={styles.container}>
                    <View style={styles.overlay}>
                        <View style={styles.profile_cont}>
                            <Image 
                                source= {require('../../assets/blank-profile-pic.png') }
                                style={styles.profile_pic} 
                            />
                        </View>
                        
                        <View style={styles.details}>
                            <View style={styles.card}>
                                <View style={styles.name_cont}>
                                    <Text style={styles.name}>Name: </Text>
                                    <Text style={styles.name_detail}>John Doe</Text>
                                </View>
                                
                            </View>
                            <View style={styles.card}>
                                <View style={styles.email_cont}>
                                <Text style={styles.email}>Email:</Text>
                                <Text style={styles.email_detail}>john.doe@example.com</Text>
                                </View>
                            
                            </View>

                            <View style={styles.card}>
                                <View style={styles.address_info}>
                                    <View>
                                        <Text style={styles.address_label}>Address: </Text>
                                        </View>
                                    <View style={styles.address}>
                                        <Text style={styles.detail}>123 Main St</Text>
                                        <Text style={styles.detail}>Anytown</Text>
                                        <Text style={styles.detail}>0015</Text>
                                        <Text style={styles.detail}>USA</Text>
                                    </View>
                                    
                               
                                </View>
                                
                            </View>
                            
                            
                            
                        </View>
                        <TouchableOpacity style={styles.delete}>
                            <Text style={styles.delete_text}>Delete Account</Text>
                            <Icon name='trash-outline' size={20} style={styles.delete_icon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.logout} onPress={handleLogOut}>
                            <Text style={styles.logout_text}>Log Out</Text>
                            <Icon name='exit-outline' size={20} style={styles.log_icon} />
                        </TouchableOpacity>
                    </View>
                <BottomTabBar 
                    navigation={navigation} 
                    currentScreen={currentScreen}
                    onNavigate={handleNavigation} 
                    
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#5170FE',
    },
    detail:{
       fontSize: 16,
    },
    email_detail:{
        fontSize: 16,
        marginLeft: 10,
        marginTop: 7,
     },
     name_detail:{
        fontSize: 16,
        marginLeft: 10,
        marginTop: 2,
     },
    card:{
        backgroundColor:'white',
        height: 'auto',
        width: '95%',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 0.5)', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5, 
        shadowRadius: 3.5,
    },
    name_cont:{
        display: 'flex',
        flexDirection: 'row',
    },
    email_cont:{
        display: 'flex',
        flexDirection: 'row',
    },
    address_label:{
        fontSize: 18,
        color: '#2A65BC',
        fontWeight: 'bold',
    },
    address_info:{
        display: 'flex',
        flexDirection: 'row',
    },
    address:{
        marginLeft: 16,
        width: '50%'
    },
    overlay: {
        alignItems: 'center',
        padding: '5%',
        width: '100%',
        height: '100%',
    },
    background: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    profile_cont: {
        marginTop: '20%',
        marginBottom: 10,
    },
    profile_pic: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    edit: {
        marginTop: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '2%',
    },
    edit_text: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'green',
    },
    icon: {
        marginLeft: '2%',
        color: 'green',
    },
    details: {
        marginTop: '2%',
        width: '95%',
        alignItems: 'center',
    },
    name: {
        color: '#2A65BC',
        fontSize: 18,
        fontWeight: 'bold',
    },
    email: {
        marginTop: '2%',
        fontSize: 18,
        color: '#2A65BC',
        fontWeight: 'bold',
    },
    delete: {
        flexDirection: 'row',
        marginTop: '5%',
        backgroundColor: 'red',
        padding: '5%',
        borderRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 0.3)', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25, 
        shadowRadius: 3.5,
    },
    delete_icon: {
        color: 'white',
        marginLeft: '2%',
        bottom: '1%',
    },
    delete_text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    logout: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: '5%',
        borderRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 0.3)', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.35, 
        shadowRadius: 3.5,
        marginTop: '5%',
        width: '50%',
    },
    logout_text: {
        color: 'red',
        marginLeft: '18%',
        fontWeight: 'bold',
        fontSize: 16,
    },
    log_icon: {
        color: 'red',
        marginLeft: '3%',
    },
});

export default  ProfileScreen;
