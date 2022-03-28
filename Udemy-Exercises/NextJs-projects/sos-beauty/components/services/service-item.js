import Image from "next/image";
import Link from "next/link";

import styles from "./service-item.module.css";

function ServiceItem(props) {
    const { id, image, titleBig, titleSmall } = props;

    return (
        <li key={id} className={styles["service-item"]}>
            <div>
                <div className={styles["wrap-main-name"]}>
                    <h2>{titleBig}</h2>
                </div>
                <div className={styles["wrap-secondary-name"]}>
                    <h3>{titleSmall}</h3>
                </div>
            </div>
            <div className={styles["wrap-image-service"]}>
                <Image className={styles.img} width={500} height={400} src={image} alt={titleBig} />
            </div>
            <div>
                <Link href={`/cosmetics/${id}`}>
                    <a className={styles["btn-service"]}>Виж повече</a>
                </Link>
            </div>
        </li>
    )
}

export default ServiceItem;