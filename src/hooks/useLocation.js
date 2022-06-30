import { useState, useEffect } from "react";
import * as Location from 'expo-location';


export default ( shouldTrack, callback) => {
  const [errorMsg, setErrorMsg] = useState(null);


  useEffect(() => {
    let subscriber;

    const startWatching = async () => {
    try {
      let { status } = await Location.requestBackgroundPermissionsAsync();

      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied, Please Enable location services');
        return;
      }

      subscriber = await Location.watchPositionAsync({
        accuracy: Location.Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10
      },
        callback
      );
    } catch (e) {
      setErrorMsg(e);
    }
  }

    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber) {
      subscriber.remove();
      }
      subscriber = null;
    }

    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    }
  }, [shouldTrack, callback]);

  return [errorMsg]

}