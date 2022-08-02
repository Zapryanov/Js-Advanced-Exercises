import Image from "next/image";
import styles from "./index.module.css";

function BigButton() {
    return (
        <div className={styles["leaf-effect"]}>
            <a href="https://www.facebook.com/MravkaZanimavka" target="__blank">
                <Image width={1123} height={200} src="https://res.cloudinary.com/audipower/image/upload/v1659386267/save-lesson-min_fcrlay.png" alt="link-facebook" />
            </a>
        </div>
    )
}

export default BigButton;