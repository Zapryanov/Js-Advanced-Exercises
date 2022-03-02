export async function getAllLessons() {
    try {
        // Fetch data from external API
        const res = await fetch(`https://mravka-zanimavka-default-rtdb.europe-west1.firebasedatabase.app/lessons.json`)
        const data = await res.json()
        
        // Transform the data from Firebase
        const loadedLessons = [];
        
        for (const key in data) {
            loadedLessons.push({
                id: key, 
                ...data[key]
            })
        }

        return loadedLessons.reverse();
    } catch(err) {
        console.error(err)
    }
    
}

export async function getCurrentLesson(id) {
    const allLessons = await getAllLessons();
    const currentLesson = allLessons.find(lesson => lesson.id === id);

    return currentLesson;
}