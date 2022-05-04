
function CosmeticsPage(props) {
    const objCosmetics = props.cosmetics;
    console.log(objCosmetics);
    return (
        <div>
            <h1>Козметика</h1>
            <ul>
                {
                    objCosmetics.map(eachService => {
                        return (
                            <li key={eachService.id}>{eachService.titleBig}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export async function getServerSideProps() {
    const response = await fetch("https://sos-beauty-f7b87-default-rtdb.europe-west1.firebasedatabase.app/services-dev/cosmetics.json");
    const cosmetics = await response.json();
    const cosmeticsArray = [];

    for (let key in cosmetics) {
        // let obj = {[key]: cosmetics[key]};
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