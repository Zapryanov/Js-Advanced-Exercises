import Link from "next/link";
import Image from "next/image";

import styles from "./footer-image-link.module.css";

function FooterImageLink({link, image}) {
    return (
        <Link href={link}>
            <a className={styles["wrap-image"]} target="_blank">
                <Image className={styles.image} width={280} height={175} src={image} alt="google-map" />  
            </a>
        </Link>
    )
}

export default FooterImageLink;