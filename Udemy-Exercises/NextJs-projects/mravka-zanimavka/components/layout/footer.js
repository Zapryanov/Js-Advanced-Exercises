import Image from "next/image";
import Link from "next/link";

import styles from "./footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles["wrap-footer-content"]}>
                <div className={styles["space-vertically"]}>
                    <div>
                        <Link href="https://www.facebook.com/MravkaZanimavka">
                            <a className={`${styles["position-icon"]} ${styles["hyper-link"]}`} target="_blank">
                                <Image width={20} height={20} src="https://res.cloudinary.com/audipower/image/upload/v1659217536/facebook_r6r45d.png" alt="facebook-icon" />
                                <span className={styles["space-left"]}>Мравка Занимавка</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={styles["space-vertically"]}>
                    <div>
                        <Link href="/contacts">
                            <a className={`${styles["position-icon"]} ${styles["hyper-link"]}`}>
                                <Image width={20} height={20} src="https://res.cloudinary.com/audipower/image/upload/v1659217349/phone_kb7ijk.png" alt="contacts" />
                                <span className={styles["space-left"]}>Контакти</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={styles["space-vertically"]}>Created by Ivan Zapryanov</div>
                <div className={styles["space-vertically"]}>© 2022 Next-Js-Power</div>
            </div>
        </footer>
    )
}

export default Footer;