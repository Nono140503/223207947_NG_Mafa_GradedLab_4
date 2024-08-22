import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import BottomTabBar from '../../components/BottomTabBar';
import Icon from 'react-native-vector-icons/Ionicons';
import { UserContext } from '../../Global/useProfileNameAndEmail'; 
import { UserAddressContext } from '../../Global/userProfileAddress';
import { useTheme, ThemeContext } from '../../Global/ThemeContext'; // Adjust the path accordingly

function ProfileScreen({ navigation }) {
    const [currentScreen, setCurrentScreen] = useState('Profile');
    const handleNavigation = (screen) => {
        setCurrentScreen(screen);
        navigation.navigate(screen);
    };

    const handleForm1 = () => {
        navigation.navigate('Form 1');
    };

    const handleLogOut = () => {
        navigation.navigate('Welcome');
    };

    const { userData } = useContext(UserContext);
    const { userAddress } = useContext(UserAddressContext);
    const { theme, toggleTheme } = useTheme();

    const backgroundColor = theme === 'dark' ? '#0B0B0C' : '#5170FE';
    const cardBackgroundColor = theme === 'dark' ? '#1F1F1F' : 'white';
    const textColor = theme === 'dark' ? '#FFFFFF' : '#000000';
    

    return (
        <>
            <View style={[styles.container, { backgroundColor }]}>
                <View style={styles.overlay}>
                    <View style={styles.profile_cont}>
                        <Image 
                            source={require('../../assets/blank-profile-pic.png')}
                            style={styles.profile_pic} 
                        />
                    </View>
                    
                    <View style={styles.details}>
                        <View style={[styles.card, { backgroundColor: cardBackgroundColor }]}>
                            <View style={styles.name_cont}>
                                <Text style={[styles.name, { color: '#2A65BC' }]}>Name:</Text>
                                <Text style={[styles.name_detail, { color: textColor }]}>{userData.name}</Text>
                            </View>
                            
                        </View>
                        <View style={[styles.card, { backgroundColor: cardBackgroundColor }]}>
                            <View style={styles.email_cont}>
                                <Text style={[styles.email, { color: '#2A65BC' }]}>Email:</Text>
                                <Text style={[styles.email_detail, { color: textColor }]}>{userData.email}</Text>
                            </View>
                        
                        </View>

                        <View style={[styles.card, { backgroundColor: cardBackgroundColor }]}>
                            <View style={styles.address_info}>
                                <View>
                                    <Text style={[styles.address_label, { color: '#2A65BC' }]}>Address:</Text>
                                </View>
                                <View style={styles.address}>
                                    <Text style={[styles.detail, { color: textColor }]}>{userAddress.streetAddress}</Text>
                                    <Text style={[styles.detail, { color: textColor }]}>{userAddress.city}</Text>
                                    <Text style={[styles.detail, { color: textColor }]}>{userAddress.state}</Text>
                                    <Text style={[styles.detail, { color: textColor }]}>{userAddress.zipCode}</Text>
                                </View>
                            </View>
                        </View>
                    </View>



                    <TouchableOpacity style={styles.toggleButton} onPress={toggleTheme}>
                        <Text style={styles.toggleButtonText}>{theme === 'dark' ? 'Light Theme' : 'Dark Theme'}</Text>
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
    },
    detail: {
        fontSize: 16,
    },
    email_detail: {
        fontSize: 16,
        marginLeft: 10,
        marginTop: 7,
    },
    name_detail: {
        fontSize: 16,
        marginLeft: 10,
        marginTop: 2,
    },
    card: {
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
    name_cont: {
        display: 'flex',
        flexDirection: 'row',
    },
    email_cont: {
        display: 'flex',
        flexDirection: 'row',
    },
    address_label: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    address_info: {
        display: 'flex',
        flexDirection: 'row',
    },
    address: {
        marginLeft: 16,
        width: '50%'
    },
    overlay: {
        alignItems: 'center',
        padding: '5%',
        width: '100%',
        height: '100%',
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
        fontSize: 18,
        fontWeight: 'bold',
    },
    email: {
        marginTop: '2%',
        fontSize: 18,
        fontWeight: 'bold',
    },
    delete: {
        flexDirection: 'row',
        marginTop: '5%',
        padding: '5%',
        borderRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 0.3)', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25, 
        shadowRadius: 3.5,
    },
    delete_icon: {
        marginLeft: '2%',
        bottom: '1%',
    },
    delete_text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    logout: {
        flexDirection: 'row',
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
        marginLeft: '18%',
        fontWeight: 'bold',
        fontSize: 16,
    },
    log_icon: {
        marginLeft: '3%',
    },
    toggleButton: {
        marginTop: '5%',
        padding: '3%',
        borderRadius: 10,
        backgroundColor: '#2A65BC',
        alignItems: 'center',
    },
    toggleButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default ProfileScreen;
