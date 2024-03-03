import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import MenuScreen from './screens/MenuScreen';
import HomeScreen from './screens/HomeScreen';
import Colors from './constants/colors';
import { useFonts } from 'expo-font';

export default function App() {
  //setup custom fonts
  const [fontsLoaded] = useFonts({
    "tango": require('./assets/fonts/texasTango.otf'),
    "dock": require('./assets/fonts/docktrin.ttf')
  })


  //set state variable for the current screen
  const [currentScreen, setCurrentScreen] = useState('home');
  
  function menuScreenHandler() {
    setCurrentScreen("events");
  }

  function homeScreenHandler() {
    setCurrentScreen("home");
  }



  //determine which screen to be on
  let screen = <HomeScreen onNext={menuScreenHandler}/>;


  if (currentScreen == "events"){
    screen = <MenuScreen onNext={homeScreenHandler} />;
  }




  return (
    <>
      <StatusBar style='auto' />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
    alignItems: 'center',
    justifyContent: 'center',
  },
});