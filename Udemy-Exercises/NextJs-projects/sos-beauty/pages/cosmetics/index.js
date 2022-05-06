import Link from "next/link";
import Image from "next/image";
import CosmeticsList from "../../components/cosmetics/cosmetics-list";


// import ServicesList from "../../components/services/services-list";

function CosmeticsPage(props) {
    return (
        <div>
            <h1>Козметика</h1>
            {/* <ul>
                {
                    props.cosmetics.map(eachService => {
                        return (
                            <li key={eachService.id}>
                                <div>
                                    <div>
                                        <h2>{eachService.titleBig}</h2>
                                    </div>
                                    <div>
                                        <h3>{eachService.titleSmall}</h3>
                                    </div>
                                </div>
                                <div>
                                    <Image width={300} height={220} src={eachService.image} alt={eachService.titleBig} />
                                </div>
                                <div>
                                    <Link href={`/${eachService.id}`}>
                                        <a>Виж повече</a>
                                    </Link>
                                </div>
                            </li>
                        )
                    })
                }
            </ul> */}
            {/* <CosmeticsList cosmeticsObj={props.cosmetics} /> */}
            {/* <ServicesList services={props.cosmetics} /> */}
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
    // console.log(cosmeticsArray)

    return {
        props: {
            cosmetics: cosmeticsArray
        }
    }
}

export default CosmeticsPage;