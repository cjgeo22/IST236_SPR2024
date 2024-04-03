import { createContext, useState } from "react";
import { useAnimatedKeyboard } from "react-native-reanimated";

export const BookmarksContext = createContext({
    ids: [],
    addFavoriteArticle: (id) => {},
    removeFavoriteArticle: (id) => {},
});

function BookmarkContextProvider({ children }) {
    const [bookmarkedIds, setBookmarksIds] = useState([]);

    function addFavoriteArticle(id) {
        setBookmarksIds((currentBookmarkedIds) => {
            return [...currentBookmarkedIds, id];
        });
    }

    function removeFavoriteArticle(id) {
        setBookmarksIds((currentBookmarkedIds) => {
            return currentBookmarkedIds.filter((bookId) => bookId != id);
        });
    }

    const value = {
        ids: bookmarkedIds,
        addFavoriteArticle: addFavoriteArticle,
        removeFavoriteArticle: removeFavoriteArticle,
    };

    return (
        <BookmarksContext.Provider value={value}>
            {children}
        </BookmarksContext.Provider>
    );
}

export default BookmarkContextProvider;
