import styles from "./index.module.css";

function About() {
    return (
        <div>
            <h1 className="pageHeading">За нас</h1>
            <section className={styles["wrapper"]}>
                <article className={styles["top-center"]}>
                    <p>
                        Всяка жена е перфектна такава, каквато е. Салон за красота &rdquo;S0S-Beauty&rdquo; е тук, 
                        за да ви помогнем да подобрите естествената си красота и увереност. Салонът е специализиран в изкуството 
                        на маникюр, педикюр, ноктопластика, кола маска, козметични процедури за лице, и миглопластика. Предлагаме
                        приятна и спокойна обстановка, където може да отделите време за себе си и да се поглезите. 
                        Работим само с качествени, професионални продукти!
                    </p>
                </article>
                <article>
                    <div>Text1</div>
                    <div>Text2</div>
                </article>
            </section>
        </div>
    )
}

export default About;