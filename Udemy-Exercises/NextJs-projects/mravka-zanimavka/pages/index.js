import Link from 'next/link';

function HomePage(props) {
    const { lessons } = props;

    return (
        <div>
            {/* <h1>The Home Page</h1>
            <ul>
                <li>
                    <Link href="/lessons">All lessons</Link>
                </li>
            </ul> */}
            <ul>
                {lessons.map(lesson => {
                    <li key={lesson.id}>{lesson.title}</li>
                })}
            </ul>
        </div>
    )
}

export async function getStaticProps() {
    return { 
        props : {
            lessons: [{id: "id-1", title: "Lesson-1"}]
        }
    }
}

export default HomePage;