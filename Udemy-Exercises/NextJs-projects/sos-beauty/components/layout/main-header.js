import Link from "next/link";
import Image from "next/image";

import styles from "./main-header.module.css";

function MainHeader() {
    return (
        <header className={styles["main-header"]}>
            <div>
                <h1>S.O.S Beauty</h1>
                <div className={styles.salon}>Beauty Salon</div>
            </div>
            <nav>
                <ul className={`${styles.menu} ${styles["main-menu"]}`}>
                    <li>
                        <Link href="/">
                            <a className={styles["link-menu"]}>Услуги</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a className={styles["link-menu"]}>За нас</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/promotions">
                            <a className={styles["link-menu"]}>Промоции</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contacts">
                            <a className={styles["link-menu"]}>Контакти</a>
                        </Link>
                    </li>
                </ul>
                <ul className={`${styles.menu} ${styles["socials-header"]}`}>
                    <li>
                        <Link href="https://www.facebook.com/S.O.SBeauti/">
                            <a className={`${styles["link-menu"]} ${styles["facebook-icon"]} ${styles["social-icons"]}`}  target="_blank">
                                <Image width={20} height={20} src="https://res.cloudinary.com/audipower/image/upload/v1655236128/facebook-icon-3d_szr1ix.png" alt="facebook" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.facebook.com/S.O.SBeauti/">
                            <a className={`${styles["link-menu"]} ${styles["instagram-icon"]} ${styles["social-icons"]}`}  target="_blank">
                                <Image className={styles["instagram-icon"]} width={20} height={20} src="https://res.cloudinary.com/audipower/image/upload/v1652521525/instagram-min_szc2ds.png" alt="facebook" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="tel:+35976862629">
                            <a className={`${styles["link-menu"]} ${styles["link-phone"]} ${styles["social-icons"]}`}>
                                <span className={styles["phone-image"]}>
                                    <Image width={20} height={20} src="https://res.cloudinary.com/audipower/image/upload/v1652476270/phone_nbsxsf.png" alt="phone" />
                                </span>
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