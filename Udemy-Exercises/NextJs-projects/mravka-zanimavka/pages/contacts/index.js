import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.css";

import { getContactsInfo } from "../../data/getData";

function ContactsPage(props) {
    const { contactsInfo } = props;

    return (
        <>
            <Head>
                <title>Контакти</title>
                <meta name="description" content={`За контакти - град ${contactsInfo.addressText}. Обучение по английски и китайски език за деца.`} />
            </Head>
            <article className={styles["wrap-contacts-page"]}>
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
                            <Link href={contactsInfo.googleLink}>
                                <a className={styles["see-more"]} target="_blank">
                                    Виж голяма карта
                                </a>
                            </Link>
                            <div className={styles["position-google-map"]}>
                                <Link href={contactsInfo.googleLink}>
                                    <a target="_blank">
                                        <Image width={500} height={500} src={contactsInfo.googleImage} alt="google-map" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
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