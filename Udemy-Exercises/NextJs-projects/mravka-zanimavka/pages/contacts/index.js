import Image from "next/image";
import styles from "./index.module.css";
import Head from "next/head";

import GoogleMapReact from 'google-map-react';
import Link from "next/link";

const AnyReactComponent = ({ text }) => <div className={styles.googleText}>{text}</div>;

function ContactsPage() {

    const renderMarkers = (map, maps) => {
        let lessons = new maps.Marker({
            position: { lat: Number(process.env.lat), lng: Number(process.env.lng) },
            map,
            title: `mravka-zanimavka`
        });
        return lessons;
    };

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
                                <Image width={20} height={20} src="https://res.cloudinary.com/audipower/image/upload/v1644830649/mail_qbj18y.svg" alt="email" />
                            </span>
                            <span>mravkazanimavka@gmail.com</span>
                        </div>
                        <div className={styles["wrap-socials"]}>
                            <span>
                                <Image width={20} height={20} src="https://res.cloudinary.com/audipower/image/upload/v1644830666/facebook_gt0ii9.svg" alt="email" />
                            </span>
                            <span>Facebook:
                                <Link href="https://www.facebook.com/MravkaZanimavka">
                                    <a className={styles.linkFacebook}>
                                        &nbsp;Мравка Занимавка
                                    </a>
                                </Link>
                            </span>
                        </div>
                        <div className={styles["wrap-socials"]}>
                            <span>
                                <Image width={20} height={20} src="https://res.cloudinary.com/audipower/image/upload/v1644830685/home-icon_jcbh4g.png" alt="email" />
                            </span>
                            <span>Пловдив, ул. &#8222;Йоаким Груев&#8220; 15 А</span>
                        </div>
                    </div>
                </section>
                <section>
                    <div className={`${styles["wrap-google-maps"]} ${styles.maps}`}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: process.env.bootstrapURLKeys }}
                            defaultCenter={{ lat: Number(process.env.lat), lng: Number(process.env.lng) }}
                            defaultZoom={17}
                            yesIWantToUseGoogleMapApiInternals
                            onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
                        >
                            <AnyReactComponent
                                lat={Number(process.env.lat)}
                                lng={Number(process.env.lng)}
                                text="Мравка Занимавка"
                            />
                        </GoogleMapReact>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ContactsPage;