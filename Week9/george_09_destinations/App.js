import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DestinationsOverviewScreen from './screens/DestinationsOverviewScreen';
import Colors from './constants/colors';
import Title from './components/Title';

//create the stack navigator to manage navigation
const Stack = createNativeStackNavigator();

//force fonts to load properly
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    mountain: require('./assets/fonts/Beckan.otf'),
    lemon: require('./assets/fonts/Lemon Mocktail .ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='HomeScreen'
            screenOptions={{
              headerBackTitleVisible: false,
              headerStyle: {backgroundColor: Colors.priamry500},
              headerTintColor: Colors.primary300,
              headerTitleStyle: {fontFamily: "mountain", fontSize: 32},
              contentStyle: {backgroundColor: Colors.primary800},
            }}
            //different screens tracked using stack navigator
          >
            <Stack.Screen
              name = "HomeScreen"
              component = {HomeScreen}
              options = {{
                title: "VACTION DESTINATIONS"
              }}
            />
            <Stack.Screen 
              name = "DestinationsOverviewScreen"
              component = {DestinationsOverviewScreen}
              // options = {{
              //   title: ""
              // }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
