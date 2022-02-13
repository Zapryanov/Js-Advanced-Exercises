import Image from "next/image";
import styles from "./index.module.css";

function BigButton() {
    return (
        <div className={styles["leaf-effect"]}>
            <a href="https://www.facebook.com/MravkaZanimavka">
                <Image width={1200} height={200} src="https://res.cloudinary.com/audipower/image/upload/v1643362891/save-lesson_izgw4s.png" alt="link-facebook" />
            </a>
        </div>
    )
}

export default BigButton;