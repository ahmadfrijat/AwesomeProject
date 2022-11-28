import * as React from 'react';
import { Text } from "react-native";
import { StatusBar as ExpoStatusBar, StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RestaurantsScreen } from './src/features/restaurants/screens/resturants.screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';



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
          <Stack.Navigator
           screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === "Restaurants") {
                iconName = "md-restaurant";
              } else if (route.name === "Settings") {
                iconName = "md-settings";
              } else if (route.name === "Map") {
                iconName = "md-map";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
          >
            <Stack.Screen name="Restaurants" component={RestaurantsScreen} />
            <Stack.Screen name="Map" component={Map} />
            <Stack.Screen name="Settings" component={Settings} />
          </Stack.Navigator>
        </NavigationContainer>
        <ExpoStatusBar style='auto' />
    </>
  );
}


