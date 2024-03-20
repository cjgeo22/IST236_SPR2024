import { Text, StyleSheet, View, Image, ScrollView } from "react-native";
import { NEWSARTICLES } from "../data/dummy_data";
import { useLayoutEffect, useState } from "react";
import BookmarkButton from "../components/BookmarkButton";

function NewsDetailScreen(props) {
  // get NewsId from param
  const NewsId = props.route.params.NewsId;
  // find article via NewsId
  const selectedArticle = NEWSARTICLES.find((article) => article.id === NewsId);

  const [pressed, setPressed] = useState(false);

  // bookmark click event handler
  function headerButtonPressHandler() {
    setPressed(!pressed);
  }

  // update icon on click
  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "",
      headerRight: () => {
        return (
          <BookmarkButton
            pressed={pressed}
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [props.navigation, headerButtonPressHandler]);

  return (
    <View style={styles.rootContainer}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: selectedArticle.imageUrl }}
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.headline}>{selectedArticle.headline}</Text>
          <Text style={styles.author}>{selectedArticle.author}</Text>

          <View style={styles.rowContainer}>
            <Text style={styles.rowItem}>{selectedArticle.date}</Text>
            <Text style={styles.rowItem}>{selectedArticle.agency}</Text>
          </View>
          <Text style={styles.description}>{selectedArticle.description}</Text>
        </View>
        </ScrollView>
    </View>
  );
}

// Export to different files
export default NewsDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageContainer: {
    marginVertical: 15,
    height: 250,
    width: "95%",
    alignSelf: "center",
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 20,
  },
  infoContainer: {
    alignSelf: "center",
    marginVertical: 5,
    marginBottom:15,
    paddingHorizontal:15,
    width: "90%",
    borderWidth: 5,
    borderRadius: 20
  },
  headline: {
    fontSize: 24,
    marginVertical: 15,
    textAlign: "center",
    fontFamily:"rakbold",
  },
  author: {
    fontSize: 20,
    marginVertical: 10,
    textAlign: "center",
    fontFamily:"rakbold",
    paddingBottom: 7,

  },
  rowContainer: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 15,
  },
  rowItem: {
    fontSize: 18,
    fontFamily:"rakbold",
  },
  description: {
    fontSize: 16,
    alignSelf: "center",
    marginBottom:15,
    fontFamily:"rakreg",
  },
});