import CosmeticsItem from "./cosmeticsItem";

function CosmeticsList(props) {
    const {cosmeticsObj} = props;

    return (
        <ul>
            {cosmeticsObj.map((eachCosmetic, id) => {
                <CosmeticsItem 
                    key={id}
                    id={id}
                    titleBig={eachCosmetic.titleBig}
                    titleSmall={eachCosmetic.titleSmall}
                    image={eachCosmetic.image}
                    generalInfo={eachCosmetic.generalInfo}
                    serviceDescription={eachCosmetic.serviceDescription}
                    price={eachCosmetic.price}
                />
            })}
        </ul>
    )
}

export default CosmeticsList;