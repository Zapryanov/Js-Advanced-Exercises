import { Link } from 'react-router-dom';

function MainNavigation() {
    return (
        <header>
            <div>Мравка Занимавка</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Мравка Занимавка</Link>
                    </li>
                    <li>
                        <Link to="/lessons">Уроци</Link>
                    </li>
                    <li>
                        <Link to="/gallery">Галерия</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Контакти</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;