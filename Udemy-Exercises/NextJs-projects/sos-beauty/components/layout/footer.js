import Link from "next/link";
import Image from "next/image";

import styles from "./footer.module.css";

function Footer() {
    return (
        <footer className={styles["footer"]}>
            <div className={styles["each-footer-block"]}>
                <h4>Контакти</h4>
                <span>GSM:&nbsp;
                <a href="tel:+35976862629">0876 862 629</a>
                </span>
                <span>гр. Пловдив, комплекс - &quot;Олимпия&quot;</span>
                <span>ул. &quot;Георги Данчов&quot; - 46</span>
                <span>/ Срещу входа на Акваленд /</span>
            </div>
            <div className={styles["each-footer-block"]}>
                <h4>Facebook</h4>
                <Link className={styles["link-google-map"]} href="https://www.facebook.com/S.O.SBeauti">
                    <a target="_blank">
                        <Image width={330} height={200} src={"https://res.cloudinary.com/audipower/image/upload/v1652122789/facebook-small_xl76ob.png"} alt="google-map" />  
                    </a>
                </Link>
            </div>
            <div className={styles["each-footer-block"]}>
                <h4>Google Map</h4>
                <div className={styles["wrap-google-maps"]}>
                    <Link className={styles["link-google-map"]} href="https://www.google.com/maps/place/S.O.S+Beauty/@42.137649,24.7864931,19z/data=!4m5!3m4!1s0x14acd1671feabfcf:0xbe40cf6f6dab0e16!8m2!3d42.137649!4d24.7870403">
                        <a target="_blank">
                            <Image width={330} height={200} src={"https://res.cloudinary.com/audipower/image/upload/v1652121714/google-map-cutted_ggybkj.jpg"} alt="google-map" />  
                        </a>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;