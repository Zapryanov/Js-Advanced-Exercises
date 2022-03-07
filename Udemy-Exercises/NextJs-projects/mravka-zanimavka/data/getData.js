export async function getAllChineseLessons() {
    try {
        // Fetch data from external API
        const res = await fetch(`https://mravka-zanimavka-default-rtdb.europe-west1.firebasedatabase.app/lessons/chineseLessons.json`)
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

export async function getCurrentChineseLesson(id) {
    const allLessons = await getAllChineseLessons();
    const currentLesson = allLessons.find(lesson => lesson.id === id);
console.log(currentLesson)
    return currentLesson;
}

export async function getAllEnglishLessons() {
    try {
        // Fetch data from external API
        const res = await fetch(`https://mravka-zanimavka-default-rtdb.europe-west1.firebasedatabase.app/lessons/englishLessons.json`)
        const data = await res.json()
        console.log(data)
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

export async function getCurrentEnglishLesson(id) {
    const allLessons = await getAllEnglishLessons();
    const currentLesson = allLessons.find(lesson => lesson.id === id);

    return currentLesson;
}