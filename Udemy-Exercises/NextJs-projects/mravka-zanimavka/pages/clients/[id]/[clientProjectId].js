import { useRouter } from 'next/router';

function SelectedClientProjectPage() {
    const router = useRouter();

    function returnToTheClientsPage() {
        router.push(`/clients/${router.query.id}`)
    }

    console.log(router.query);
    return (
        <div>
            <h1>The Project Page for a Specific Project for a Selected Client</h1>
            <button onClick={returnToTheClientsPage}>Go to The Projects of a given Client</button>
        </div>
    )
}

export default SelectedClientProjectPage;