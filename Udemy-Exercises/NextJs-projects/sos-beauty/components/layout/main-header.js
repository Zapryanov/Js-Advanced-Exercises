import Link from "next/link";
import Image from "next/image";

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
                <ul className={styles.menu}>
                    <li>
                        <Link href="https://www.facebook.com/S.O.SBeauti/">
                            <a className={`${styles["link-menu"]} ${styles["facebook-icon"]}`}  target="_blank">
                                <Image width={20} height={20} src="https://res.cloudinary.com/audipower/image/upload/v1644830666/facebook_gt0ii9.svg" alt="facebook" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.facebook.com/S.O.SBeauti/">
                            <a className={styles["link-menu"]}  target="_blank">
                                <Image className={styles["instagram-icon"]} width={20} height={20} src="https://res.cloudinary.com/audipower/image/upload/v1652520875/1200px-Instagram.svg_snthoj.png" alt="facebook" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="tel:+35976862629">
                            <a className={`${styles["link-menu"]} ${styles["link-phone"]}`}>
                                <Image width={20} height={20} src="https://res.cloudinary.com/audipower/image/upload/v1652476270/phone_nbsxsf.png" alt="phone" />
                                <span className={styles.phone}>0876 862 629</span>
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;