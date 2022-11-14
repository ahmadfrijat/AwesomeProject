import * as React from 'react';
import { StatusBar as ExpoStatusBar, StatusBar } from 'expo-status-bar';
import { RestaurantsScreen } from './src/features/restaurants/screens/resturants.screen';
import { ThemeProvider } from 'react-native-paper';
import { theme } from './src/infrastructure/theme';




export default function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <RestaurantsScreen/>
    </ThemeProvider>
    <ExpoStatusBar style='auto' />
    </>
  );
}


