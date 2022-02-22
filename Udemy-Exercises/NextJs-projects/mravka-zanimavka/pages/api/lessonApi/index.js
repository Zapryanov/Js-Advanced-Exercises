function handler(req, res) {
    if (req.method === "POST") {
        const titleLesson = req.body.title;
        const urlLesson = req.body.image;
        const textLesson = req.body.text;
        const accessToken = req.body.accessToken;

        if (!titleLesson || !urlLesson || !textLesson) {
            res.status(422).join({ message: "You have an empty input field/s...!" });
            return;
        }

        const newLesson = {
            title: titleLesson,
            image: urlLesson,
            text: textLesson
        }

        // const connectionString = `${process.env.databaseUrl}/${process.env.currentDatabase}.json?auth=${accessToken}`
        // fetch(connectionString, {
            
        fetch(`https://mravka-zanimavka-default-rtdb.europe-west1.firebasedatabase.app/lessons.json?auth=${accessToken}`, {
                method: "POST",
                body: JSON.stringify(newLesson),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
            .then(data => console.log("The lesson is added from api/lessonApi - ", data))

        res.status(201).json({ message: "Success...", lessonApi: newLesson })
    } else {
        res.status(200).json({ message: "Test message - everything is OK...!" });
    }
}

export default handler;