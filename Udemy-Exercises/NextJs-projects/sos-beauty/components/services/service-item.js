import Image from "next/image";
import Link from "next/link";

function ServiceItem(props) {
    const { id, image, titleBig, titleSmall } = props;

    return (
        <li key={id}>
            <div>
                <h2>{titleBig}</h2>
                <h3>{titleSmall}</h3>
            </div>
            <div>
                <Image width={500} height={400} src={image} alt={titleBig} />
            </div>
            <div>
                <Link href={`/cosmetics/${id}`}>
                    <a>Виж повече</a>
                </Link>
            </div>
        </li>
    )
}

export default ServiceItem;