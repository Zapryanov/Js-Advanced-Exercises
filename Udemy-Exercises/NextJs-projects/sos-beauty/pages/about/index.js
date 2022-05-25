import Image from "next/image";

import { getManicureAboutUs } from "../../data";
import styles from "./index.module.css";

function About(props) {
    const manicureImages = props.manicurePictures;

    return (
        <div>
            <h1 className="pageHeading">За нас</h1>
            <section className={styles["wrapper"]}>
                <article className={styles["top-center"]}>
                    <p>
                        Всяка жена е перфектна такава, каквато е. Салон за красота &rdquo;S.0.S Beauty&rdquo; е тук, 
                        за да ви помогнем да подобрите естествената си красота и увереност. Салонът е специализиран в изкуството 
                        на маникюр, педикюр, ноктопластика, кола маска, козметични процедури за лице, и миглопластика. Предлагаме
                        приятна и спокойна обстановка, където може да отделите време за себе си и да се поглезите. 
                    </p>
                </article>
                <article className={styles["wrap-text-and-images"]}>
                    <div className={styles["wrap-text"]}>
                        <p>
                            &rdquo;S.O.S Beauty&rdquo; е вдъхновяващ салон за красота, където може да се поглезите. Едни от услугите в които 
                            сме специализирани са ноктопластика, поставяне на гел лак, педикюр. Нашия салон предлага също луксозен педикюр,
                            в допълнение с топла атмосфера е идеалното място, когато имате нужда от малко време за себе си! Не поставяме обикновенни лакове!
                            Работим само с качествени професионални продукти! Ако търсите професионално обслужване и топла атмосфера, тук е вашето място, заповядайте!
                        </p>
                    </div>
                    <div className={styles["wrap-images"]}>
                        <ul className={styles["remove-space"]}>
                            {manicureImages.map((image, i) => 
                                <li className={styles["current-image"]} key={i}>
                                    <Image className="img" width={200} height={150} src={image} alt="nails" />
                                </li>
                            )}
                        </ul>
                    </div>
                </article>
            </section>
        </div>
    )
}

export async function getServerSideProps() {
    const data = await getManicureAboutUs();

    return {
        props: {
            manicurePictures: data
        }
    }
}

export default About;