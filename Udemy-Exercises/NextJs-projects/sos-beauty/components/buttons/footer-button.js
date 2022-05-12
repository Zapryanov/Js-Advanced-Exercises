import Link from "next/link";
import styles from "./footer-button.module.css";

function FooterButton({direction, link}) {
    return (
        <div className={`${styles["see-more"]} ${direction}`}>
            <Link href={link}>
                <a className={styles["see-more-text"]} target="_blank">виж повече</a>
            </Link>
        </div>
    )
}

export default FooterButton;