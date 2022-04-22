import Head from "next/head";
import styles from "./index.module.css";

import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div className={styles.googleText}>{text}</div>;

function ContactsPage() {

    const renderMarkers = (map, maps) => {
        let services = new maps.Marker({
            position: { lat: Number(process.env.lat), lng: Number(process.env.lng) },
            map,
            title: `sos-beauty`
        });
        return services;
    };

    return (
        <div>
            <Head>
                <title>Контакти</title>
                <meta name="description" content="Контакти, адрес на салона за маникюр, педикюр, ноктопластика, кола маска, почистване на лице, Пловдив, улица Георги Данчов 46" />
            </Head>
            <h1>Контакти</h1>

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
                                text="SOS-Beauty"
                            />
                        </GoogleMapReact>
                    </div>
                </section>

        </div>
    )
}

export default ContactsPage;