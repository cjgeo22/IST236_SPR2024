import { Modal, View, Button, Image, StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";
import NavButton from "../components/NavButton";
import { DESTINATIONS } from "../data/dummy-data";
import Destination from "../models/destinations";

function ImageViewModal(props) {
  
  return (
    <View style={styles.container}>
      <Modal
        visible={props.isVisible}
        animationType="slide"
        transparent={false}
      >
        {/* modal consists of image, description, and navbutton */}
        <View style={styles.modalContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
          <Text style={styles.description}>{props.desc}</Text>
          <NavButton onPress={props.onClose} />
        </View>
      </Modal>
    </View>
  );
}

export default ImageViewModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: Colors.primary800,
  },
  image: {
    width: "95%",
    height: "32%",
    resizeMode: "contain",
    marginTop: 250,
  },
  description: {
    color: "white",
    fontSize: 15,
    fontFamily: "lemon",
    marginBottom: 50,
    marginTop: 55,
    paddingHorizontal: 30,
  }
});
