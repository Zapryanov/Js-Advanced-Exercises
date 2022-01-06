import { useContext } from 'react';
import LessonList from '../components/lessons/LessonList';

import FavoritesContext from '../store/favorites-context';

function FavoritsPage() {
    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if (favoritesCtx.totalFavorites === 0) {
        content = <section>Все още нямате харесвани. Добавете вашите любими уроци?</section>
    } else {
        content = <LessonList lessons={favoritesCtx.favorites} />
    }

    return (
        <div>
            <h1>Харесвани</h1>
            {content}
        </div>
    )
}

export default FavoritsPage;