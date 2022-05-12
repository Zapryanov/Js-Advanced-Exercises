import Link from "next/link";
import Image from "next/image";

import styles from "./footer.module.css";
import FooterButton from "../buttons/footer-button";

function Footer() {
    const obj = {
        googleLink: "https://www.google.com/maps/place/S.O.S+Beauty/@42.137649,24.7864931,19z/data=!4m5!3m4!1s0x14acd1671feabfcf:0xbe40cf6f6dab0e16!8m2!3d42.137649!4d24.7870403",
        facebookLink: "https://www.facebook.com/S.O.SBeauti",
        left: styles.left,
        right: styles.right
    }

    return (
        <footer className={styles["footer"]}>
            <div className={styles["each-footer-block"]}>
                <h4>Контакти</h4>
                <div className={styles["contacts"]}>
                    <span>
                        GSM:&nbsp;
                        <a href="tel:+35976862629">0876 862 629</a>
                    </span>
                    <span>гр. Пловдив, комплекс - &quot;Олимпия&quot;</span>
                    <span>ул. &quot;Георги Данчов&quot; - 46</span>
                    <span>/ Срещу входа на Акваленд /</span>
                </div>
            </div>
            <div className={`${styles["each-footer-block"]}, ${styles["footer-socials"]}`}>
                <h4>Facebook</h4>
                <div className={styles["wrap-socials"]}>
                    <FooterButton  direction={obj.left} link={obj.facebookLink} />
                    {/* <Link className={`${styles["link-facebook"]} ${styles["footer-image"]}`} href="https://www.facebook.com/S.O.SBeauti">
                        <a target="_blank">
                            <Image className={styles.image} width={330} height={200} src={"https://res.cloudinary.com/audipower/image/upload/v1652122789/facebook-small_xl76ob.png"} alt="google-map" />  
                        </a>
                    </Link> */}
                </div>
            </div>
            <div className={`${styles["each-footer-block"]} ${styles["footer-socials"]}`}>
                <h4>Google Map</h4>
                <div className={styles["wrap-socials"]}>
                    <FooterButton direction={obj.right} link={obj.googleLink} />
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