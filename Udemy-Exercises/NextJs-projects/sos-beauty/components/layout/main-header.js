import Link from "next/link";

import styles from "./main-header.module.css";

function MainHeader() {
    return (
        <header className={styles["main-header"]}>
            <div>
                <h1>S.O.S Beauty</h1>
                <h2>Beauty Salon</h2>
            </div>
            <nav>
                <ul className={styles.menu}>
                    <li>
                        <Link href="/">
                            <a className={styles["link-menu"]}>Услуги</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contacts">
                            <a className={styles["link-menu"]}>Контакти</a>
                        </Link>
                    </li>
                </ul>
                <div>
                    <Link href="https://www.facebook.com/S.O.SBeauti/">Facebook</Link> 
                </div>
            </nav>
        </header>
    )
}

export default MainHeader;