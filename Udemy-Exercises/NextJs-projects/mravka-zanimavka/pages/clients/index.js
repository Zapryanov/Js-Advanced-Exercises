import Link from "next/link";

function ClientsPage() {
    const clients = [
        { id: "ivan", name: "Ivan" },
        { id: "georgi", name: "Georgi" },
        { id: "petar", name: "Petar" }
    ]
    return (
        <div>
            <h1>The Clients Page</h1>
            <ul>
                {clients.map(eachName => {
                    return (
                        <li key={eachName.id}>
                            <Link href={`/clients/${eachName.name}`}>{eachName.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ClientsPage;