import Link from "next/link";

import styles from "./main-header.module.css";

function MainHeader() {
    return (
        <header className={styles["main-header"]}>
            <div>
                <h1>S.O.S Beauty</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href="/contacts">Контакти</Link>
                    </li>
                    <li>
                        <Link href="https://www.facebook.com/S.O.SBeauti/">Facebook</Link> 
                    </li>
                    <li>
                        <Link href="https://www.facebook.com/S.O.SBeauti/">Instagram</Link> 
                    </li>
                    <li>
                        <Link href="https://www.facebook.com/S.O.SBeauti/">Twitter</Link> 
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;