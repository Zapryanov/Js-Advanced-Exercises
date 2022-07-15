import Image from "next/image";
import styles from "./index.module.css";
import Head from "next/head";

// import GoogleMapReact from 'google-map-react';
import Link from "next/link";

// const AnyReactComponent = ({ text }) => <div className={styles.googleText}>{text}</div>;

function ContactsPage() {

    // const renderMarkers = (map, maps) => {
    //     let lessons = new maps.Marker({
    //         position: { lat: Number(process.env.lat), lng: Number(process.env.lng) },
    //         map,
    //         title: `mravka-zanimavka`
    //     });
    //     return lessons;
    // };

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
                        {/* <GoogleMapReact
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
                        </GoogleMapReact> */}

                        <div>
                            <Link href="https://www.google.com/maps/place/%D1%83%D0%BB.+%E2%80%9E%D0%99%D0%BE%D0%B0%D0%BA%D0%B8%D0%BC+%D0%93%D1%80%D1%83%D0%B5%D0%B2%E2%80%9C+15%D0%90,+4000+%D0%9A%D0%B0%D0%BF%D0%B0%D0%BD%D0%B0,+%D0%9F%D0%BB%D0%BE%D0%B2%D0%B4%D0%B8%D0%B2/@42.1504037,24.7471568,19z/data=!3m1!4b1!4m5!3m4!1s0x14acd1bd12ab4ecd:0x47a3f048ab238e28!8m2!3d42.1504037!4d24.747704">
                                <a  className={styles["google-big-link"]} target="_blank">
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

export default ContactsPage;