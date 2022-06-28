// import '../_mockLocation'
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as Location from 'expo-location';
import Map from '../components/Map';

const TrackCreateScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);


  const startWatching = async () => {
    try {
      let { status } = await Location.requestBackgroundPermissionsAsync();

      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied, Please Enable location services');
        return;
      }

      await Location.watchPositionAsync({
        accuracy: Location.Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10
      }, (location) => {
        console.log(location);
      })

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    } catch (e) {
      setErrorMsg(e);
    }
  }

  useEffect(() => {
    startWatching();
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestBackgroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       setErrorMsg('Permission to access location was denied');
  //       return;
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     setLocation(location);
  //   })();
  // }, []);

  let text = 'Waiting..'; 
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }



  return (
    <SafeAreaView style={styles.container}>
      <Text h2>Create a Track</Text>
      <Map />
      {errorMsg ? <Text style={styles.paragraph}>{ errorMsg }</Text>: null}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TrackCreateScreen;