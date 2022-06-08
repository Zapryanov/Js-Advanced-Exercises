import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

function ContactsPage() {
    const googleLinkBig = "https://www.google.com/maps/place/S.O.S+Beauty/@42.137649,24.7864931,19z/data=!4m5!3m4!1s0x14acd1671feabfcf:0xbe40cf6f6dab0e16!8m2!3d42.137649!4d24.7870403";

    return (
        <div>
            <Head>
                <title>Контакти</title>
                <meta name="description" content="Контакти, адрес на салона за маникюр, педикюр, ноктопластика, кола маска, почистване на лице, Пловдив, улица Георги Данчов 46" />
            </Head>
            <h2 className="pageHeading">Контакти</h2>
            <section className={styles["section-contacts"]}>
                <article className={styles["wrap-info"]}>
                    <div className={styles["position-text"]}>
                        <div className={styles["wrap-spans-contacts"]}>
                            <span className={`${styles["heading-contacts"]} ${styles["icon-location"]}`}>Адрес :</span>
                            <span>&nbsp; гр. Пловдив 4023</span>
                            <span>&nbsp; жк. &quot;Тракия&quot;</span>
                            <span>&nbsp; Комплекс - &quot;ОЛИМПИЯ&quot;</span>
                            <span>&nbsp; ул. &quot;Георги Данчов&quot; - 46</span>
                            <span>&nbsp; / Срещу Акваленд /</span>
                        </div>
                        <div className={styles["wrap-spans-contacts"]}>
                            <span className={`${styles["heading-contacts"]} ${styles["icon-phone"]}`}>Телефон</span>
                            <span>&nbsp; +359 876 862 629</span>
                        </div>
                        <div className={styles["wrap-spans-contacts"]}>
                            <span className={`${styles["heading-contacts"]} ${styles["icon-time"]}`}>Работно време</span>
                            <span>&nbsp; Пон : 10.00 - 19.00</span>
                            <span>&nbsp; Вто : 10.00 - 19.00</span>
                            <span>&nbsp; Сря : 10.00 - 19.00</span>
                            <span>&nbsp; Чет : 10.00 - 19.00</span>
                            <span>&nbsp; Пет : 10.00 - 19.00</span>
                            <span>&nbsp; Съб : 10.00 - 16.00</span>
                            <span>&nbsp; Нед : 10.00 - 14.00</span>
                        </div>
                    </div>
                </article>
                <article className={styles.map}>
                    <div className={styles["wrap-google-maps"]}>
                        <Link href={googleLinkBig}>
                            <a  className={styles["google-big-link"]} target="_blank">
                                <Image width={400} height={350} src="/images/google-map-big.jpg" alt="google-map" />
                            </a>
                        </Link>
                    </div>
                </article>
            </section>

        </div>
    )
}

export default ContactsPage;