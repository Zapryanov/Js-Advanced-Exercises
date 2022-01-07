import { useRouter } from 'next/router';
import Link from 'next/link';

function ClientProjectsPage() {
    const router = useRouter();

    console.log(router.query);

    return (
        <div>
            <h1>The projects of a given Client</h1>
            <ul>
                <li>
                    <Link href="../clients">Go back to the Clients Page</Link>
                </li>
            </ul>
        </div>
    )
}

export default ClientProjectsPage;