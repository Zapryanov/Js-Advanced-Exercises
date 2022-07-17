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
                            <a className={`${styles["position-icon"]} ${styles["facebook-link"]}`}>
                                <Image width={20} height={20} src="https://res.cloudinary.com/audipower/image/upload/v1655233946/facebook-logo_glwf64.png" alt="facebook-icon" />
                                <span className={styles["space-left"]}>Мравка Занимавка</span>
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