
function CosmeticsPage(props) {
    console.log(props.cosmetics)
    return (
        <div>
            <h1>Козметика</h1>
            <ul>
                
            </ul>
        </div>
    )
}

export async function getServerSideProps() {
    const response = await fetch("https://sos-beauty-f7b87-default-rtdb.europe-west1.firebasedatabase.app/services/cosmetics.json");
    const cosmetics = await response.json();
    // console.log("Cosmetics: ", cosmetics);
    const cosmeticsArray = [];
    for (let key in cosmetics) {
        // console.log(key, cosmetics[key].titleBig);
        cosmeticsArray.push(cosmetics[key]);
    }

    return {
        props: {
            cosmetics: cosmeticsArray
        }
    }
}

export default CosmeticsPage;