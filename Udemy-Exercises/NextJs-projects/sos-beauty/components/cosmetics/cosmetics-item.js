import Image from "next/image";
import Link from "next/link";

import styles from "./cosmetics-item.module.css";

function CosmeticItem(props) {
    let { id, image, titleBig, titleSmall } = props;
// console.log("Hello from cosmetics-item :))))))))")
    return (
        <li key={id} className={styles["cosmetics-item"]}>
            <div className={styles["wrap-headings"]}>
                <div className={styles["wrap-main-name"]}>
                    <h2>{titleBig}</h2>
                </div>
                <div className={styles["wrap-secondary-name"]}>
                    <h3>{titleSmall}</h3>
                </div>
            </div>
            <div className={styles["wrap-image-cosmetics"]}>
                <Image className={styles.img} width={300} height={220} src={image} alt={titleBig} />
            </div>
            <div className={styles["wrap-btn-cosmetics"]}>
                <Link href={`/${id}`}>
                    <a className={styles["btn-cosmetics"]}>Виж повече</a>
                </Link>
            </div>
        </li>
    )
}

export default CosmeticItem;