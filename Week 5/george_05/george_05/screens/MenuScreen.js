import { View, StyleSheet, Text, FlatList } from "react-native";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
//import components
import Title from "../components/Title";
import MenuItems from "../components/MenuItems";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";

function MenuScreen(props) {
  const insets = useSafeAreaInsets();
//menu item data
  const [menuItems, setMenuItems] = useState([
    {
      name: "Chicken Sandwich Combo",
      image: require("../assets/images/chickencombo.png"),
      price: "$12.00",
      id: 1,
    },
    {
      name: "Westerner Sandwhich Combo",
      image: require("../assets/images/westernersandwhich.png"),
      price: "$13.99",
      id: 2,
    },
    {
      name: "Two Meat Plate",
      image: require("../assets/images/twomeatplate.png"),
      price: "$16.75",
      id: 3,
    },
    {
      name: "Family Bundle",
      image: require("../assets/images/familybundle.png"),
      price: "$31.00",
      id: 4,
    },
    {
      name: "Build Your Own Big Yellow Box",
      image: require("../assets/images/byobyb.png"),
      price: "$141.00",
      id: 5,
    },
  ]);

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
      <View style={styles.titleContainer}>
        <Title>Menu</Title>
      </View>

      <View style={styles.listContainer}>
        {/* flat list to hold data */}
        <FlatList 
        data = {menuItems}

        keyExtractor={(item) => item.id}
        alwaysBounceVerticle={false}
        showsVerticalScrollIndicator={false}
        renderItem={(itemData) => {
            return (
                <MenuItems
                    name={itemData.item.name}
                    image={itemData.item.image}
                    price={itemData.item.price}
                    />
            )
        }}
         />
      </View>
{/* where the button should link and provide styling */}
      <View>
        <NavButton onPress={props.onNext}>Go Home</NavButton>
      </View>
    </View>
  );
}

export default MenuScreen;

const styles = StyleSheet.create({
  rootcontainer: {
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  listContainer: {
    flex: 7,
    width: "100%",
  },
  
});