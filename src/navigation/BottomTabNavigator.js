import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons'; 


import TrackCreateScreen from '../screens/TrackCreateScreen';
import TrackDetailScreen from '../screens/TrackDetailScreen';
import TrackListScreen from '../screens/TrackListScreen';
import AccountScreen from '../screens/AccountScreen';

const trackListFlow = createNativeStackNavigator();

function TrackListFlowScreen() {
  return (
    <trackListFlow.Navigator>
      <trackListFlow.Screen name="Tracks" component={TrackListScreen}  />
      <trackListFlow.Screen name="TrackDetail" component={TrackDetailScreen} />
    </trackListFlow.Navigator>
  );
}



const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator>
        <Tab.Screen name="Track" component={TrackListFlowScreen} options={{
          headerShown: false,
          title: 'Tracks',
          tabBarIcon: () => (
            <Feather name="map-pin" size={24} color="black" />
          ),
        }} />
        <Tab.Screen name="TrackCreate" component={TrackCreateScreen} options={{
          headerShown: false,
          title: 'Add Track',
          tabBarIcon: () => (
            <Feather name="plus" size={24} color="black" />
          )
        }} />
        <Tab.Screen name="Account" component={AccountScreen} options={{
          headerShown: false,
          tabBarIcon: () => (
            <Feather name="user" size={24} color="black" />
          )
        }} />
      </Tab.Navigator>
      </NavigationContainer>
  )
}

export default BottomTabNavigator;