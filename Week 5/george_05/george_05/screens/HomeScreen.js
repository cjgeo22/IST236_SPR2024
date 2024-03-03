import { View, StyleSheet, Text, Image, Linking } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
//import title, navbtn, and colors
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";

function HomeScreen(props) {

  const insets = useSafeAreaInsets();

  //helps screen fit on specific devices
  return (
    <View
      style={[
        styles.rootcontainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingRight: insets.right,
          paddingLeft: insets.left,
        },
      ]}
    >
      <View style = {styles.titleContainer}>
        <Title>Dickey's Barbecue Pit</Title>
      </View>

      <View style={styles.imageContainer} >
        <Image
          style={styles.image}
          source={require("../assets/images/dickeysresturant.jpg")}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text
          style={styles.infoText}
          onPress={() => Linking.openURL("tel:8438390209")}
        >
          843-839-0209
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text
          style={styles.infoText}
          onPress={() =>
            Linking.openURL("https://maps.app.goo.gl/uay6iWEV2NxM9ecc9")
          }
        >
          3735 Oleander Dr{"\n"}Myrtle Beach{"\n"}SC 29577
        </Text>
      </View>

      <View style={styles.infoContainer}>
        <Text
          style={styles.infoText}
          onPress={() =>
            Linking.openURL("https://www.dickeys.com")
          }
        >
          Vist dickeys.com!
        </Text>
      </View>
          {/* where the nav button should link to provide styling */}
      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>View Menu</NavButton>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootcontainer: {
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    flex: 2,
    justifyContent: "center",
    
  },
  imageContainer: {
    flex: 4,
  },
  image: {
    resizeMode: "cover",
    height: 250,
    width: 350,
  },
  infoContainer: {
    flex: 2,
    justifyContent: "center",
    color: Colors.primary500,
  },
  infoText: {
    fontSize: 30,
    textAlign: "center",
    fontFamily: "dock",
    color: Colors.primary500,
  },

});