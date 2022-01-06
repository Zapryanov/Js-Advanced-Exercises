import { useContext } from 'react';

import Card from '../ui/Card';
import styles from './LessonItem.module.css';
import FavoritesContext from '../../store/favorites-context';

function LessonItem(props) {
    const favoritesCtx = useContext(FavoritesContext);

    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id)

    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id);
        } else {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                text: props.text,
                image: props.image,
                key: props.id
            })
        }
    }

    return (
        <li className={styles["current-article"]}>
            <Card>
                <h4 className={`${styles["test-1"]} ${styles["test-2"]}`}>{props.title}</h4>
                <div className={styles["wrap-img-article"]}>
                    <img src={props.image} alt={props.title} />
                </div>
                <p className={`${styles["wrap-text-article"]} ${styles["lesson"]}`}>{props.text}</p>
                <button className={`${styles["btn-show-text"]} ${styles["lesson-page"]}`}>Покажи повече</button>
                <div>
                    <button onClick={toggleFavoriteStatusHandler} className={`${styles["btn-show-text"]} ${styles["lesson-page"]}`}>{itemIsFavorite ? "Премахни от харесвани" : "Добави в харесвани"}</button>
                </div>
            </Card>
        </li>
    )
}

export default LessonItem;