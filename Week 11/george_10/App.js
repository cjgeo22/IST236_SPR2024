import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from './constants/colors';
import BookmarksScreen from './screens/BookmarksScreen';
import USNewsScreen from './screens/USNewsScreen';
import WorldNewsScreen from './screens/WorldNewsScreen';
import GameNewsScreen from './screens/GameNewsScreen';
import NewsDetailScreen from './screens/NewsDetailScreen';
import { Fontisto, FontAwesome, FontAwesome6, Ionicons} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import BookmarksContextProvider from './store/context/bookmarks-context';


//get native stack, drawer, and tabs navigator
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();


//build drawer nav
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="News"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.secondary500 },
        headerTitleStyle: {
          fontFamily: "chom",
          fontSize: 30,
          color: Colors.primary500,
        },

        sceneContainerStyle: { backgroundColor: Colors.primary800 },
        drawerContentStyle: { backgroundColor: Colors.secondary800 },
        drawerInactiveTintColor: Colors.primary500,
        drawerActiveTintColor: Colors.accent500,
        drawerActiveBackgroundColor: Colors.secondary500,
      }}
    >
      {/* drawer screen for news */}
      <Drawer.Screen
        name="News"
        component={TabsNavigator}
        options={{
          title: "News Articles",
          drawerLabel: "News Articles",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="newspaper" size={size} color={color} />
          ),
        }}
      />
      {/* drawer screen for bookmarks*/}
      <Drawer.Screen
        name="BookmarkedNews"
        component={BookmarksScreen}
        options={{
          title: "Saved Articles",
          drawerLabel: "Saved Articles",
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="bookmark" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}


//build tab nav
function TabsNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveBackgroundColor: Colors.primary800,
        tabBarActiveTintColor: Colors.accent500,
        tabBarInactiveBackgroundColor: Colors.primary500,
        tabBarInactiveTintColor: Colors.primary300,
        tabBarLabel: {
          fontSize: 14,
          fontFamily: "rakreg",
        },
        tabBarStyle: {
          backgroundColor: Colors.primary500,
        },
      }}
    >
      {/* tabs screen for US news */}
      <Tabs.Screen
        name="USArticles"
        component={USNewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="building-columns" size={size} color={color} />
          ),
          tabBarLabel: "US News",
        }}
      />

      {/* tabs screen for world news */}
      <Tabs.Screen
        name="WorldArticles"
        component={WorldNewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="world" size={size} color={color} />
          ),
          tabBarLabel: "World News",
        }}
      />
      {/* tabs screen for game news */}
      <Tabs.Screen
        name="GameArticles"
        component={GameNewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="gamepad" size={size} color={color} />
          ),
          tabBarLabel: "Game News",
        }}
      />
    </Tabs.Navigator>
  );
}

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    chom: require("./assets/fonts/Chomsky.otf"),
    rakreg: require("./assets/fonts/rakesly rg.otf"),
    rakbold: require("./assets/fonts/rakesly bd.otf"),
    
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
        <StatusBar style="light" />
        <BookmarksContextProvider>
        {/* nav container */}
        <NavigationContainer style={styles.container}>
          <Stack.Navigator
            //default screen DrawerScreen
            initialRouteName="DrawerScreen"
            screenOptions={{
              headerTintColor: Colors.primary500,
              headerStyle: { backgroundColor: Colors.secondary800 },
              contentStyle: { backgroundColor: Colors.primary500},
            }}
          >
            {/* drawer screen for drawer nav */}
            <Stack.Screen
              name="DrawerScreen"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            {/* news detail screen */}
            <Stack.Screen
              name="NewsDetail"
              component={NewsDetailScreen}
              options={{
                headerBackTitle: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        </BookmarksContextProvider>
      </>
    );
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