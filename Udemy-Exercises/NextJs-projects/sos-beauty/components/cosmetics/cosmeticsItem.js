import Image from "next/image";

function CosmeticsItem(generalInfo, image, price, serviceDescription, titleBig, titleSmall, id) {
    return (
        <li key={id}>
            <h2>{titleBig}</h2>
            <h3>{titleSmall}</h3>
            <div>
                <Image width={500} height={400} src={image} alt={titleBig} />
            </div>
            <ul>
                {
                    generalInfo.map((sentence, i) => {
                        return (
                            <li key={i}>{sentence}</li>
                        )
                    })
                }
            </ul>
            <ul>
                {
                    serviceDescription.map((sentence, i) => {
                        return (
                            <li key={i}>{sentence}</li>
                        )
                    })
                }
            </ul>
            <div>{price}</div>
        </li>
    )
}

export default CosmeticsItem;