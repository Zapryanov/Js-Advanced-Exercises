import Header from "./header";

import styles from "./layout.module.css";

function Layout(props) {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>{props.children}</main>
        </div>
    )
}

export default Layout;