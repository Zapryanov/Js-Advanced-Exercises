import Image from "next/image";
import Link from "next/link";

import styles from "./header.module.css";

function Header(props) {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">
                    <a>
                        <Image width={150} height={150} src={props.logos.logoMainPage} alt="logo" />
                    </a>
                </Link>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href="/">
                            <a className={styles["nav-link"]}>Мравка Занимавка</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/lessons/chineseLessons">
                            <a className={styles["nav-link"]}>Учим китайски</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/lessons/englishLessons">
                            <a className={styles["nav-link"]}>Учим английски</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contacts">
                            <a className={styles["nav-link"]}>Контакти</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;