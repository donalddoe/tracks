import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import TrackCreateScreen from '../screens/TrackCreateScreen';
import TrackDetailScreen from '../screens/TrackDetailScreen';
import TrackListScreen from '../screens/TrackListScreen';
import AccountScreen from '../screens/AccountScreen';

const trackListFlow = createNativeStackNavigator();

function TrackListFlowScreen() {
  return (
    <trackListFlow.Navigator>
      <trackListFlow.Screen name="TrackList" component={TrackListScreen}  />
      <trackListFlow.Screen name="TrackDetail" component={TrackDetailScreen} />
    </trackListFlow.Navigator>
  );
}



const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator>
  <Tab.Screen name="Tracks" component={TrackListFlowScreen} options={{ headerShown: false }} />
     <Tab.Screen name="TrackCreate" component={TrackCreateScreen} options={{ headerShown: false }} />
     <Tab.Screen name="Account" component={AccountScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
      </NavigationContainer>
  )
}

export default BottomTabNavigator;