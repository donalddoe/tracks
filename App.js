import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

 import AuthNavigator from './src/navigation/AuthStackNavigatior';

import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { Provider as AuthProvider } from './src/context/AuthContext'
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';


const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: AuthNavigator,
  mainFlow: BottomTabNavigator
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App ref={(navigator) => { setNavigator(navigator) }} />
    </AuthProvider>
  )
}