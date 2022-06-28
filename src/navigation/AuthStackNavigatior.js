import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Signin" component={SigninScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
      </NavigationContainer>
  )
}

export default AuthNavigator;