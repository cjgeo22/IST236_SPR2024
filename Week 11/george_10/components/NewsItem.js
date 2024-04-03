import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/colors";

function NewsItem(props) {
  // call nav
  const navigation = useNavigation();

  // click event function
  function selectedNewsHandler() {
    navigation.navigate("NewsDetail", {
      NewsId: props.id,
    });
  }

  return (

    <View style={styles.itemContainer}>
      <Pressable onPress={selectedNewsHandler}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.headline}>{props.headline}</Text>
          <Text style={styles.articleReleased}>{props.date}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default NewsItem;

const styles = StyleSheet.create({
  itemContainer: {
    padding:10, 
    marginBottom: 20,
    borderRadius: 7,
    borderWidth:5,
    borderRadius: 20,
    borderColor: Colors.secondary800,
    backgroundColor: Colors.primary500,
  },
  button: {
    flex: 1,
  },
  imageContainer: {
    height: 200,
    paddingBottom: 15
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    flex: 1,
    alignItems: "center",
  },
  headline: {
    fontSize: 24,
    textAlign:'center',
    fontFamily: "rakbold",
    paddingBottom: 20,
  },
  articleReleased: {
    fontSize:16,
    fontFamily: "rakreg",
  }
});