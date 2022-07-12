import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getContatcsData } from "../../data";
import styles from "./index.module.css";

function ContactsPage(props) {

    const { contactsData } = props;
    const info = contactsData.infoContacts;

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
                            {info.address.map((item, i) => (
                                <span key={i}>{item}</span>
                            ))}
                        </div>
                        <div className={styles["wrap-spans-contacts"]}>
                            <span className={`${styles["heading-contacts"]} ${styles["icon-phone"]}`}>Телефон</span>
                            <span>&nbsp; {info.telephone[0]}</span>
                        </div>
                        <div className={styles["wrap-spans-contacts"]}>
                            <span className={`${styles["heading-contacts"]} ${styles["icon-time"]}`}>Работно време</span>
                            {info.worktime.map((item, i) => (
                                <span key={i}>&nbsp; {item}</span>
                            ))}
                        </div>
                    </div>
                </article>
                <article className={styles.map}>
                    <div className={styles["wrap-google-maps"]}>
                        <Link href={contactsData.googleLinkBig}>
                            <a  className={styles["google-big-link"]} target="_blank">
                                <Image width={400} height={350} src={contactsData.googleImageBig} alt="google-map" />
                            </a>
                        </Link>
                    </div>
                </article>
                <article className={styles["wrap-salon-image"]}>
                    <div>
                        <Image className={styles["salon-image"]} src={contactsData.shopWindow} width={330} height={230} alt="салон за маникюр, кола маска, козметика за лице" />
                    </div>
                    <div>
                        <Image className={styles["salon-image"]} src={contactsData.salonDesk} width={330} height={230} alt="бюро маникюр" />
                    </div>
                    <div>
                        <Image className={styles["salon-image"]} src={contactsData.salonSofa} width={330} height={230} alt="козметичен салон чакалня" />
                    </div>
                </article>
            </section>

        </div>
    )
}

export async function getServerSideProps() {
    const contactsData = await getContatcsData();

    return {
        props: {
            contactsData
        }
    }
}

export default ContactsPage;