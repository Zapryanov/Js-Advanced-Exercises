import { useContext } from 'react';

import { Link } from 'react-router-dom';
import styles from './MainNavigation.module.css';

import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {
    const favoritesCtx = useContext(FavoritesContext);

    return (
        <header className={styles.header}>
            <div>Мравка Занимавка</div>
            <nav>
                <ul>
                    <li>
                        <Link className={`${styles.link} ${styles["nav-link"]}`} to="/">Мравка Занимавка</Link>
                    </li>
                    <li>
                        <Link className={`${styles.link} ${styles["nav-link"]}`} to="/lessons">Уроци</Link>
                    </li>
                    <li>
                        <Link className={`${styles.link} ${styles["nav-link"]}`} to="/gallery">Галерия</Link>
                    </li>
                    <li>
                        <Link className={`${styles.link} ${styles["nav-link"]}`} to="/favorites">
                            Харесвани -
                            <span className={styles.badge}> {favoritesCtx.totalFavorites}</span>
                        </Link>
                    </li>
                    <li>
                        <Link className={`${styles.link} ${styles["nav-link"]}`} to="/contacts">Контакти</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;