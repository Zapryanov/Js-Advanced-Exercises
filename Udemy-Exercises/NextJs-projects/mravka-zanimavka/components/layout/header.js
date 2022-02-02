import Link from "next/link";

function Header() {
    return (
        <header>
            <div>
                <Link href="/">
                    Logo
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