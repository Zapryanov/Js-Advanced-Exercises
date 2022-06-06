import CosmeticsList from "../../components/cosmetics/cosmetics-list";
import styles from "./index.module.css";

function CosmeticsPage(props) {
    return (
        <div>
            <h2 className={styles.pageHeading}>Козметика</h2>
            <CosmeticsList services={props.cosmetics} />
        </div>
    )
}

export async function getServerSideProps() {
    const response = await fetch("https://sos-beauty-f7b87-default-rtdb.europe-west1.firebasedatabase.app/services-dev/cosmetics.json");
    const cosmetics = await response.json();
    const cosmeticsArray = [];

    for (let key in cosmetics) {
        cosmetics[key].id = key;
        cosmeticsArray.push(cosmetics[key]);
    }

    return {
        props: {
            cosmetics: cosmeticsArray
        }
    }
}

export default CosmeticsPage;