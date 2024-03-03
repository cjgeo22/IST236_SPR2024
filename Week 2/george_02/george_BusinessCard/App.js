import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Image, Linking} from "react-native";
import { useFonts } from 'expo-font';
import BebasNeue from './assets/fonts/BebasNeue-Regular.ttf';

//sometimes the font likes to work and sometimes it doesnt
//im using expo on my iOS device so take with that what you will

export default function App() {
  const [fontsLoaded] = useFonts({
    BebasNeue: BebasNeue});
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.imageContainer} source={require("./assets/images/businessPic.jpg")}/>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.nameHeader}>
            CJ George
          </Text>
          <Text style={styles.infoText} onPress={() => Linking.openURL("mailto:cjgeorge1022@outlook.com")}>
            Email:   cjgeorge1022@outlook.com{'\n'}
          </Text>
          <Text style={styles.infoText} onPress={() => Linking.openURL("tel:8439976606")}>
            Phone #:   (843)-997-6606{'\n'}
          </Text>
          <Text style={styles.infoText} onPress={() => Linking.openURL("https://github.com/cjgeo22")}>
            Github:   cjgeo22
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#3e1c00",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row", //sets children arranged horozontially
  },

  imageContainer: {
    flex: 0,
    width: 250,
    height: 250,
    backgroundColor: "#37ff00",
    alignItems: "center",
    justifyContent: "center",
  },

  infoContainer: {
    flex: 1,
    height: 250,
    backgroundColor: "#562b00",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 30,
  },

  nameHeader: {
    fontSize: 30,
    textAlignVertical: "top",
    fontFamily: "BebasNeue",
    paddingBottom: 25,
    color: "#d2bfac",
  },

  infoText: {
    fontSize: 20,
    fontFamily: "BebasNeue",
    color: "#d2bfac",
  }
});
