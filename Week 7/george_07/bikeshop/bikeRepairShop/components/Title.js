import { StyleSheet, Text } from "react-native";
import Colors from "../constants/colors.js";

// Creates the Title function for all screens to use
function Title(props) {
  return <Text style={styles.title}>{props.children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 60,
    textAlign: "center",
    color: Colors.primary500,
    textShadowColor: Colors.primary800,
    textShadowRadius: 10,
    fontFamily: "Title"
  },
});