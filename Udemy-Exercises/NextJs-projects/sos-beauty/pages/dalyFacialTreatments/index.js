import { getDalyFaceTreatments } from "../../data";
import DOMPurify from 'isomorphic-dompurify';
import styles from "./index.module.css";

function DalyFacialTreatments(props) {
    const { dalyFacialTreatments } = props;
    console.log(dalyFacialTreatments)
    return (
        <section>
            <h1 className="pageHeading">Ежедневни процедури за лице</h1>
            {dalyFacialTreatments.map((faceService, i) => (
                <article className={styles["each-facial-treatment"]} key={i}>
                    <h3>{faceService[0]}</h3>
                    <div className={styles.description} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(faceService[1].description, {ALLOWED_TAGS: ['b', 'i', 'em', 'br', 'span', 'strong', 'ul', 'ol', 'li']})}} />
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

export async function getServerSideProps() {
    const dalyFacialTreatments = await getDalyFaceTreatments();

    return {
        props: {
            dalyFacialTreatments
        }
    }
}

export default DalyFacialTreatments;