import Head from 'next/head';
import Image from 'next/image';
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
            <section>
                <div>
                    <p>
                    С Мравка Занимавка децата се докосват до китайския език и култура.
                    </p>
                </div>
                <div>
                    <Image src="/learning-plan.png" alt="learning-plan" width="448" height="316" />
                </div>
                <div>
                    <p>
                        Заниманията са подходящи за деца на възраст 6-9 години и са с продължителност 90 минути.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default HomePage;