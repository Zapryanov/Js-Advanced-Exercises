import Image from "next/image";
import styles from "./index.module.css";

import GoogleMapReact from 'google-map-react';
import Link from "next/link";

const AnyReactComponent = ({ text }) => <div className={styles.googleText}>{text}</div>;

function ContactsPage() {

    const renderMarkers = (map, maps) => {
        let lessons = new maps.Marker({
            position: { lat: process.env.lat, lng: process.env.lng },
            map,
            title: `mravka-zanimavka`
        });
        return lessons;
    };

    return (
        <div className={styles["wrap-contacts-page"]}>
            <h1>Contacts Page</h1>
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
                        defaultCenter={{ lat: process.env.lat, lng: process.env.lng }}
                        defaultZoom={17}
                        yesIWantToUseGoogleMapApiInternals
                        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
                    >
                        <AnyReactComponent
                            lat={process.env.lat}
                            lng={process.env.lng}
                            text="Мравка Занимавка"
                        />
                    </GoogleMapReact>
                </div>
            </section>
        </div>
    )
}

export default ContactsPage;