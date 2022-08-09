import Image from "next/image";
import styles from "./index.module.css";

function BigButton({ url }) {
    return (
        <div className={styles["leaf-effect"]}>
            <a href="https://www.facebook.com/MravkaZanimavka" target="__blank">
                <Image width={1123} height={200} src={url} alt="link-facebook" />
            </a>
        </div>
    )
}

export default BigButton;