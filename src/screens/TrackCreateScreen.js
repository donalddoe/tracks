import '../_mockLocation';
import React, {  useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import useLocation from '../hooks/useLocation';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import { withNavigationFocus } from 'react-navigation'
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({ isFocused }) => {
  const { state: { recording }, addLocation } = useContext(LocationContext);
  const callBack = useCallback((location) => {
    addLocation(location, recording)
  }, [recording]);
  const [errorMsg] = useLocation(isFocused || recording, callBack);

  


  return (
    <SafeAreaView style={styles.container}>
      <Text h2>Create a Track</Text>
      <Map />
      {errorMsg ? <Text style={styles.paragraph}>{errorMsg}</Text> : null}
      <TrackForm />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default withNavigationFocus(TrackCreateScreen);