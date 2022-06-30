import React, { useContext } from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline, Circle } from 'react-native-maps';
import Spacer from '../components/Spacer';

const TrackDetailScreen = ({ route }) => {
  const { state } = useContext(TrackContext)
  const id = route.params._id; 

  const track = state.find(t => t._id === id)
  const initialCoords = track.locations[0].coords

  if (!id) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
  }

  return (
    <>
      <Spacer>
        <Text style={{ fontSize: 30}}> { track.name } </Text>
      </Spacer>
      <MapView
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords
        }}
        style={styles.map}
      >
        <Polyline coordinates={track.locations.map(loc => loc.coords)} />
      </MapView>
    </>
  )
}

const styles = StyleSheet.create({
  map: {
    height: 300,
    borderRadius: 5
  }
});

export default TrackDetailScreen;