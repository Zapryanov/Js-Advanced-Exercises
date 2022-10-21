import Link from "next/link";

function PageNotFound() {
    return (
        <article className="articleNotFound">
            <h1 className="pageHeading">Търсената страница не е налична</h1>
            <div className="notFoundContainer">
                <p>Отидете на началната страница</p>
                <Link href="/">
                    <a className="linkNotFound">Начална страница</a>
                </Link>
            </div>
        </article>
    )
}

export default PageNotFound;