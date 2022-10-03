import Head from 'next/head';

import DOMPurify from 'isomorphic-dompurify';

import { getDalyFaceTreatments } from "../../data";

import styles from "./index.module.css";

function DalyFacialTreatments({dalyFacialTreatments}) {
    const data = Object.entries(dalyFacialTreatments);

    return (
        <section>
            <Head>
                <title>Ежедневни процедури за лице</title>
                <meta name="description" content="Почистване на лице, почистване и оформяне на вежди, масаж на лице, шия и деколте, дарсонвал." />
            </Head>
            <h1 className="pageHeading">Ежедневни процедури за лице</h1>
            {data.map((faceService, i) => (
                <article className={styles["each-facial-treatment"]} key={i}>
                    <h2>{faceService[1].heading}</h2>
                    <div className={styles.description} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(faceService[1].description, {ALLOWED_TAGS: ['b', 'i', 'em', 'br', 'span', 'strong', 'ul', 'ol', 'li']})}} />
                    {faceService[1].discount ? <div className={styles.discount} dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(faceService[1].discount, {ALLOWED_TAGS: ['b', 'i', 'em', 'br', 'span', 'strong', 'ul', 'ol', 'li']})}} /> : null}
                    <div className={styles["wrap-face-treatments-price"]}>
                        <span className={styles["word-price"]}>Цена</span>
                        <span className={styles.dots}>............................................................................................................................................................................................................................................................................................................................</span>
                        <span className={styles.price}>{faceService[1].price} лв</span>
                    </div>
                </article>
            ))}
        </section>
    )
}

export async function getStaticProps() {
    const dalyFacialTreatments = await getDalyFaceTreatments();

    return {
        props: {
            dalyFacialTreatments
        },
        revalidate: 1800
    }
}

export default DalyFacialTreatments;