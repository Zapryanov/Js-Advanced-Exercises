import Link from "next/link";
import Image from "next/image";

import styles from "./footer-image-link.module.css";

function FooterImageLink({link, image}) {
    return (
        <Link className={`${styles["link-facebook"]} ${styles["footer-image"]}`} href={link}>
            <a target="_blank">
                <Image className={styles.image} width={330} height={200} src={image} alt="google-map" />  
            </a>
        </Link>
    )
}

export default FooterImageLink;