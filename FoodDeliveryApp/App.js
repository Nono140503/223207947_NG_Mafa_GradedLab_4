import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './app/screens/Welcome';
import HomeScreen from './app/screens/HomeScreen';
import CartScreen from './app/screens/CartScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import Form_1 from './app/screens/Form1';
import Form_2 from './app/screens/Form2';
import Form_3 from './app/screens/Form3';
import { UserProvider  } from './Global/useProfileNameAndEmail';
import { UserAddressProvider } from './Global/userProfileAddress';
import { MenuProvider } from './Global/userMenu';
import { ThemeProvider } from './Global/ThemeContext';


const Stack = createStackNavigator();
export default function App() {
  const [userData, setUserData] = useState('Nombali ')
  return (
    
    <ThemeProvider>
       <UserProvider >
      <UserAddressProvider>
        <MenuProvider>
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Home Screen" component={HomeScreen}  options={{ headerShown: false }}/>
          <Stack.Screen name="Cart" component={CartScreen}  options={{ headerShown: false }}/>
          <Stack.Screen name="Profile" component={ProfileScreen}  options={{ headerShown: false }}/>
          <Stack.Screen name="Form 1" component={Form_1}  options={{ headerShown: false }}/>
          <Stack.Screen name="Form 2" component={Form_2}  options={{ headerShown: false }}/>
          <Stack.Screen name="Form 3" component={Form_3}  options={{ headerShown: false}}/>
        </Stack.Navigator>
        </NavigationContainer>
        </MenuProvider>
     
      </UserAddressProvider>
        
    </UserProvider>
    
    </ThemeProvider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
