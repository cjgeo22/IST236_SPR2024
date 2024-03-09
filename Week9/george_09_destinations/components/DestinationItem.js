import { useState } from "react";
import { Pressable, View, Text, Image, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import { DESTINATIONS } from "../data/dummy-data";
import { COUNTRIES } from "../data/dummy-data";
import ImageViewModal from "../modals/ImageViewModal";


function DestinationItem(props) {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function viewImageHandler(){
    setModalIsVisible(true);
  }

  function closeImageHandler(){
    setModalIsVisible(false);
  }

  return (
    <View 
        style = {[ 
            styles.itemContainer,
            {backgroundColor: props.listIndex % 2 == 0 ? "#ccc" : "#fff" },
        ]}
    >
        <Pressable
            style = {({ pressed }) => [
                styles.button,
                pressed ? styles.buttonPressed : null,
            ]}
            android_ripple={{ color: Colors.primary300 }}
            onPress = {viewImageHandler}
        >
            <View style = {styles.rowContainer}>
                <Image style = {styles.image} source={{ uri: props.imageUrl }}/>
                <View style = {styles.infoContainer}>
                    <Text style = {styles.name}>{props.name}</Text>
                    <View style = {styles.innerRowContainer}>
                        <Text style = {styles.sites}>Avg. Cost: {props.visitCost}</Text>
                        <Text style = {styles.year}>{props.foundedYear}</Text>
                    </View>
                    <Text style = {styles.rating}>Avg. Rating: {props.rating} / 5</Text>
                </View>
            </View>
        </Pressable>
        <ImageViewModal
            isVisible = {modalIsVisible}
            onClose = {closeImageHandler}
            imageUrl = {props.imageUrl}
            desc = {props.desc}
        />
    </View>
  );
}

export default DestinationItem;

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: "#ccc",
        paddingHorizontal: 5,
        paddingTop: 3,
        marginBottom: 3,
        borderRadius: 7,
    },

    button: {
        flex: 1,
    },

    buttonPressed: {
        opacity: 0.5,
    },

    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        height: 100,
        marinBottom: 10,
    },

    image: {
        width: "25%",
        height: "100%",
        resizeMode: "contain",
        borderRadius: 15,
    },

    infoContainer: {
        width: "75%",
        paddingHorizontal: 20,
    },

    name: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "left",
    },

    sites: {
        width: "85%",
        fontSize: 14,
    },

    year: {
        fontSize: 14,
        fontWeight: "bold",
    },
    
    innerRowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    rating: {
        fontSize: 13,
        fontStyle: "italic",
    },

});