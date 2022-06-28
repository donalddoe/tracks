import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

 import AuthNavigator from './src/navigation/AuthStackNavigatior';

import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { Provider as AuthProvider } from './src/context/AuthContext'



const switchNavigator = createSwitchNavigator({
  loginFlow: AuthNavigator,
  mainFlow: BottomTabNavigator
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}