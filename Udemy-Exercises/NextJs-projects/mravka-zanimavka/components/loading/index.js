import styles from "./index.module.css";

function Loading() {
    return (
        <div className={styles["wrap-spinner"]}>
            <div className={styles["lds-dual-ring"]}></div>
        </div>
    )
}

export default Loading;