export async function getAllChineseLessons() {
    try {
        // Fetch data from external API
        const res = await fetch(`${process.env.databaseUrl}/${process.env.currentDatabase}/${process.env.currentChineseDatabase}.json`)
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

    return currentLesson;
}

export async function getAllEnglishLessons() {
    try {
        // Fetch data from external API
        const res = await fetch(`${process.env.databaseUrl}/${process.env.currentDatabase}/${process.env.currentEnglishDatabase}.json`)
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

export async function getCurrentEnglishLesson(id) {
    const allLessons = await getAllEnglishLessons();
    const currentLesson = allLessons.find(lesson => lesson.id === id);

    return currentLesson;
}

export async function getContactsInfo() {
    const response = await fetch(`${process.env.databaseUrl}/${process.env.currentDatabase}/contacts.json`);
    const data = await response.json();

    return data;
}