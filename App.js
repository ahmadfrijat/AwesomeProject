import * as React from 'react';
import { Text } from "react-native";
import { StatusBar as ExpoStatusBar, StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RestaurantsScreen } from './src/features/restaurants/screens/resturants.screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Settings = () => (
    <Text>Settings</Text>
);
const Map = () => (
    <Text>Map</Text>
); 

const Stack = createBottomTabNavigator();

export default function App() {

  return (
    <>
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Restaurants" component={RestaurantsScreen} />
            <Stack.Screen name="Map" component={Map} />
            <Stack.Screen name="Settings" component={Settings} />
          </Stack.Navigator>
        </NavigationContainer>
        <ExpoStatusBar style='auto' />
    </>
  );
}


