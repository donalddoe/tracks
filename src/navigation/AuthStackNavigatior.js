import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import { Context as AuthContext } from '../context/AuthContext';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  const { clearErrorMessage } = useContext(AuthContext)

  return (
    <NavigationContainer>
    <Stack.Navigator screenListeners={({ navigation }) => ({
    state: (e) => {
      // Do something with the `navigation` object
      navigation.addListener('blur', () => {
      clearErrorMessage();
    });
    },
  })}
 >
      <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Signin" component={SigninScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
      </NavigationContainer>
  )
}

export default AuthNavigator;