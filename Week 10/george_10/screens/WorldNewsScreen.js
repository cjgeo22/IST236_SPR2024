import { Text, StyleSheet, View } from "react-native";
import { NEWSARTICLES } from "../data/dummy_data";
import NewsList from "../components/NewsList";

function WorldNewsScreen(props) {
  // set screen type
  const type = "WORLD";

  // filter articles by type
  const displayedArticles = NEWSARTICLES.filter((newsItem) => {
    return newsItem.type === type;
  });

  return <NewsList items={displayedArticles} />;
}

export default WorldNewsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
});