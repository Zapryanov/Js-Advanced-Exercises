import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteLesson) => {},
    removeFavorite: (lessonId) => {},
    itemIsFavorite: (lessonId) => {}
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteLesson) {
        setUserFavorites.concat((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteLesson);
        });
    }

    function removeFavoriteHandler(lessonId) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(lesson => lesson.id !== lessonId);
        })
    };

    function itemIsFavoriteHandler(lessonId) {
        return userFavorites.some(lesson => lesson.id === lessonId);
    };

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;