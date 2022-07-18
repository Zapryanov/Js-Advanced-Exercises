import Image from "next/image";
import styles from "./index.module.css";
import Head from "next/head";

import Link from "next/link";
import { getContactsInfo } from "../../data/getData";

function ContactsPage(props) {
    const { contactsInfo } = props;

    return (
        <>
            <Head>
                <title>Контакти</title>
                <meta name="description" content="За контакти - град Пловдив, улица „Йоаким Груев“ 15 А. Обучение по нглийски и китайски език за деца" />
            </Head>
            <div className={styles["wrap-contacts-page"]}>
                <h1>Контакти</h1>
                <section className={styles.contacts}>
                    <div className={styles.center}>
                        <div className={styles["wrap-socials"]}>
                            <span>
                                <Image width={20} height={20} src={contactsInfo.mailLogo} alt="email" />
                            </span>
                            <span>{contactsInfo.mailText}</span>
                        </div>
                        <div className={styles["wrap-socials"]}>
                            <span>
                                <Image width={20} height={20} src={contactsInfo.facebookLogo} alt="facebook" />
                            </span>
                            <span>Facebook:
                                <Link href={contactsInfo.facebookLink}>
                                    <a className={styles.linkFacebook} target="_blank">
                                        &nbsp;{contactsInfo.facebookText}
                                    </a>
                                </Link>
                            </span>
                        </div>
                        <div className={styles["wrap-socials"]}>
                            <span>
                                <Image width={20} height={20} src={contactsInfo.addressLogo} alt="address" />
                            </span>
                            <span>{contactsInfo.addressText}</span>
                        </div>
                        <div className={styles["wrap-socials"]}>
                            <span>
                                <Image width={20} height={20} src={contactsInfo.phoneLogo} alt="phone" />
                            </span>
                            <span>{contactsInfo.phoneText}</span>
                        </div>
                    </div>
                </section>
                <section>
                    <div className={`${styles["wrap-google-maps"]} ${styles.maps}`}>
                        <div className={styles["google-map"]}>
                            <Link href="https://www.google.com/maps/place/%D1%83%D0%BB.+%E2%80%9E%D0%99%D0%BE%D0%B0%D0%BA%D0%B8%D0%BC+%D0%93%D1%80%D1%83%D0%B5%D0%B2%E2%80%9C+15%D0%90,+4000+%D0%9A%D0%B0%D0%BF%D0%B0%D0%BD%D0%B0,+%D0%9F%D0%BB%D0%BE%D0%B2%D0%B4%D0%B8%D0%B2/@42.1504037,24.7471568,19z/data=!3m1!4b1!4m5!3m4!1s0x14acd1bd12ab4ecd:0x47a3f048ab238e28!8m2!3d42.1504037!4d24.747704">
                                <a className={styles["see-more"]} target="_blank">
                                    Виж голяма карта
                                </a>
                            </Link>
                            <Link href="https://www.google.com/maps/place/%D1%83%D0%BB.+%E2%80%9E%D0%99%D0%BE%D0%B0%D0%BA%D0%B8%D0%BC+%D0%93%D1%80%D1%83%D0%B5%D0%B2%E2%80%9C+15%D0%90,+4000+%D0%9A%D0%B0%D0%BF%D0%B0%D0%BD%D0%B0,+%D0%9F%D0%BB%D0%BE%D0%B2%D0%B4%D0%B8%D0%B2/@42.1504037,24.7471568,19z/data=!3m1!4b1!4m5!3m4!1s0x14acd1bd12ab4ecd:0x47a3f048ab238e28!8m2!3d42.1504037!4d24.747704">
                                <a className={styles["google-big-link"]} target="_blank">
                                    <Image width={500} height={500} src="https://res.cloudinary.com/audipower/image/upload/v1657875981/mravka-min_asltxa.jpg" alt="google-map" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const contactsInfo = await getContactsInfo();

    return {
        props: {
            contactsInfo
        }
    }
}

export default ContactsPage;