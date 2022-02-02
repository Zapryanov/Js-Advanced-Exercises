import Image from "next/image";
import Link from "next/link";

import styles from "./header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <div>
                <Link href="/">
                    <a>
                        <Image width={150} height={150} src="https://res.cloudinary.com/audipower/image/upload/v1643362514/logo_fusle7.png" alt="logo" />
                    </a>
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Мравка Занимавка</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/lessons">
                            <a>Уроци</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/gallery">
                            <a>Галерия</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contacts">
                            <a>Контакти</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;