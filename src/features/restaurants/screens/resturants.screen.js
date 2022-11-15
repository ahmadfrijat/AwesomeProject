import * as React from 'react';
import { StatusBar as ExpoStatusBar, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info.card';


export const RestaurantsScreen = () => (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
    <Searchbar placeholder="Search"/>
    <FlatList
    data={[{name: 1}, {name: 2},{name: 3}, {name: 4},{name: 5}, {name: 6},{name: 7}, {name: 8},{name: 9}, {name: 10}]}
    renderItem={()=> <RestaurantInfoCard/>}
    keyExtractor={(item) => item.name}
    contentContainerStyle={{padding:16}}
   />
    </SafeAreaView>
)