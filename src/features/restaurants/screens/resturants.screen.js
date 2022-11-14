import * as React from 'react';
import { StatusBar as ExpoStatusBar, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info.card';


export const RestaurantsScreen = () => (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
    <View style={{ padding: 16}}>
    <Searchbar placeholder="Search"/>
    </View>
    <View style={{ flex: 1, padding: 16 }}>
     <RestaurantInfoCard/>
    </View>
  </SafeAreaView>
)