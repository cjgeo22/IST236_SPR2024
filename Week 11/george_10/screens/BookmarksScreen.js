import { Text, StyleSheet, View } from "react-native";
import { NEWSARTICLES } from "../data/dummy_data";
import { useContext } from "react";
import NewsList from "../components/NewsList";
import Colors from "../constants/colors";
import { BookmarksContext } from "../store/context/bookmarks-context";

function BookmarksScreen(props) {
  const bookmarkedArticlesCtx = useContext(BookmarksContext);
  const bookmarkedArticles = NEWSARTICLES.filter((articleItem) => {
    return bookmarkedArticlesCtx.ids.includes(articleItem.id);
  });

  if (bookmarkedArticles.length === 0){
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text} >You Have No Articles Saved!</Text>
      </View>
    );
  }
  return <NewsList items={bookmarkedArticles}/>
}

export default BookmarksScreen;

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
},
text: {
    fontSize: 26,
    textAlign:'center', 
    fontFamily:"noticiaBold",
},
});