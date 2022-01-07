import { useRouter } from 'next/router';
import Link from 'next/link';

function ClientProjectsPage() {
    const router = useRouter();

    console.log(router.query);

    function loadProjectHandler() {
        // load data

        console.log("Yes... from (clients/[id]/index.js)");
        router.push(`/clients/${router.query.id}/projectA`)
    }

    return (
        <div>
            <h1>The projects of a given Client</h1>
            <ul>
                <li>
                    <Link href="/clients">Go back to the Clients Page</Link>
                </li>
            </ul>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    )
}

export default ClientProjectsPage;