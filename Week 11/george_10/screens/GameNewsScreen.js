import NewsList from "../components/NewsList";
import { NEWSARTICLES } from "../data/dummy_data";

function GameNewsScreen(props) {
  // set screen type
  const type = "GAME";

  // filter articles by type
  const displayedArticles = NEWSARTICLES.filter((newsItem) => {
    return newsItem.type === type;
  });

  return <NewsList items={displayedArticles} />;
}


export default GameNewsScreen;