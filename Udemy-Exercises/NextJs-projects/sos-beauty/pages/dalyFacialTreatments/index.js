import { getDalyFaceTreatments } from "../../data";

function DalyFacialTreatments(props) {
    const { dalyFacialTreatments } = props;
    console.log(dalyFacialTreatments)
    return (
        <section>
            <h1 className="pageHeading">Ежедневни процедури за лице</h1>
            {dalyFacialTreatments.map((faceService, i) => (
                <article key={i}>
                    <h3>{faceService[0]}</h3>
                    <div>{faceService[1].description}</div>
                    <div>{faceService[1].price}</div>
                </article>
            ))}
        </section>
    )
}

export async function getServerSideProps() {
    const dalyFacialTreatments = await getDalyFaceTreatments();

    return {
        props: {
            dalyFacialTreatments
        }
    }
}

export default DalyFacialTreatments;