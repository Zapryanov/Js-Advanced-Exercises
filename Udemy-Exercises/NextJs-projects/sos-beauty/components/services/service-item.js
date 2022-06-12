import Image from "next/image";
import Link from "next/link";

import styles from "./service-item.module.css";

function ServiceItem(props) {
    let { id, image, titleBig, titleSmall, country } = props;

    switch (titleBig) {
        case "Козметика": 
            id = "cosmetics";
            break;
        case "Маникюр": 
            id = "manicure";
            break;
        case "Педикюр": 
            id = "pedicure";
            break;
        case "Миглопластика": 
            id = "eyelashes";
            break;
        case "Кола Маска": 
            id = "waxing";
            break;
        case "Микроблейдинг":
            id = "microblading";
            break;
        default:
            break;
    }

    return (
        <li key={id} className={styles["service-item"]}>
            <div>
                <div className={styles["wrap-main-name"]}>
                    <h2>{titleBig}</h2>
                </div>
                <div className={styles["wrap-secondary-name"]}>
                    <h3>
                        {titleSmall}
                        <span className={styles.country}>{country}</span>
                    </h3>
                </div>
            </div>
            <div className={styles["wrap-image-service"]}>
                <Image className={styles.img} width={500} height={400} src={image} alt={titleBig} />
            </div>
            <div className={styles["wrap-btn-service"]}>
                <Link href={`/${id}`}>
                    <a className={styles["btn-service"]}>Виж повече</a>
                </Link>
            </div>
        </li>
    )
}

export default ServiceItem;