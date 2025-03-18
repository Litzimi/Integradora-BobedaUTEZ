import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';  
import BottomTabNavigator from './src/navigation/BottomTabNavigator'; 
import RecuperarContraScreen from './src/screens/RecuperarContraScreen';
import CodigoVerifScreen from './src/screens/CodigoVerifScreen';
import { ThemeProvider } from './src/context/ThemeContext';

const Stack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={isLoggedIn ? 'Home' : 'Login'}>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RecuperarContra"
            component={RecuperarContraScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CodigoVerif"
            component={CodigoVerifScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
