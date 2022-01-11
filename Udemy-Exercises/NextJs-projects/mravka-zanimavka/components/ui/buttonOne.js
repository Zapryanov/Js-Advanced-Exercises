import Link from "next/link";

import styles from "./buttonOne.module.css";

function ButtonOne(props) {
    return (
        <Link href={props.link}>
            <a className={styles.btn}>{props.children}</a>
        </Link>
    )
}

export default ButtonOne;