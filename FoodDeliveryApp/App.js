import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './app/screens/Welcome';
import HomeScreen from './app/screens/HomeScreen';
import CartScreen from './app/screens/CartScreen';
import ProfileScreen from './app/screens/ProfileScreen';


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Home Screen" component={HomeScreen}  options={{ headerShown: false }}/>
      <Stack.Screen name="Cart" component={CartScreen}  options={{ headerShown: false }}/>
      <Stack.Screen name="Profile" component={ProfileScreen}  options={{ headerShown: false }}/>
    </Stack.Navigator>
  </NavigationContainer>
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
