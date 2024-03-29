import styles from "./footer.module.css";
import FooterButton from "../buttons/footer-button";
import FooterImageLink from "../imageLinks/footer-image-link";

function Footer() {
    const obj = {
        googleLink: "https://www.google.com/maps/place/S.O.S+Beauty/@42.137649,24.7864931,19z/data=!4m5!3m4!1s0x14acd1671feabfcf:0xbe40cf6f6dab0e16!8m2!3d42.137649!4d24.7870403",
        googleImage: "/images/google-map-smallest.jpg",
        facebookLink: "https://www.facebook.com/S.O.SBeauti",
        facebookImage: "/images/facebook.jpg"
    }

    return (
        <footer className={styles["footer"]}>
            <div className={styles["each-footer-block"]}>
                <h3>Контакти</h3>
                <div className={styles["contacts"]}>
                    <span>
                        GSM:&nbsp;
                        <a href="tel:+35976862629">0876 862 629</a>
                    </span>
                    <span>гр. Пловдив</span>
                    <span>Комплекс - &quot;Олимпия&quot;</span>
                    <span>ул. &quot;Георги Данчов&quot; - 46</span>
                    <span>/ Срещу входа на Акваленд /</span>
                </div>
            </div>
            <div className={`${styles["each-footer-block"]}`}>
                <h3>Google Map</h3>
                <div className={styles["wrap-socials"]}>
                    <FooterButton className={styles.left} link={obj.googleLink} />
                    <FooterImageLink link={obj.googleLink} image={obj.googleImage} />
                </div>
            </div>
            <div className={`${styles["each-footer-block"]}`}>
                <h3>Facebook</h3>
                <div className={styles["wrap-socials"]}>
                    <FooterButton  className={styles.left} link={obj.facebookLink} />
                    <FooterImageLink link={obj.facebookLink} image={obj.facebookImage} />
                </div>
            </div>
        </footer>
    )
}

export default Footer;