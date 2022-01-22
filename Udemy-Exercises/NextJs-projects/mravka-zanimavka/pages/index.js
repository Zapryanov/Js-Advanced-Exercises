import Head from 'next/head';
import Link from 'next/link';

function HomePage() {
    return (
        <div>
            <Head>
                <title>Уроци по китайски с Мравка Занимавка</title>
                <meta name='description' content='изучаване на китайски език с деца от най-ранна детска възраст в град Пловдив' />
            </Head>
            <h1>The Home Page</h1>
            <ul>
                <li>
                    <Link href="/lessons">All lessons</Link>
                </li>
            </ul>
        </div>
    )
}

export default HomePage;