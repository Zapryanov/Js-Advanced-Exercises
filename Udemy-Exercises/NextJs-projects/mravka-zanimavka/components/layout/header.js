import Image from "next/image";
import Link from "next/link";

import styles from "./header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">
                    <a>
                        <Image width={150} height={150} src="https://res.cloudinary.com/audipower/image/upload/v1643362514/logo_fusle7.png" alt="logo" />
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
                        <Link href="/lessons">
                            <a className={styles["nav-link"]}>Уроци</a>
                        </Link>
                    </li>
                    {/* <li>
                        <Link href="/gallery">
                            <a className={styles["nav-link"]}>Галерия</a>
                        </Link>
                    </li> */}
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