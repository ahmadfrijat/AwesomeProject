import * as React from 'react';
import { StatusBar as ExpoStatusBar, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantsScreen } from './src/features/restaurants/screens/resturants.screen';

// const isAndroid = Platform.OS === 'android';

export default function App() {
  return (
    <>
    <RestaurantsScreen/>
    <ExpoStatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
