export async function getAllLessons() {
    const response = await fetch("https://mravka-zanimavka-default-rtdb.europe-west1.firebasedatabase.app/lessons.json");
    const data = await response.json();

    const lessons = [];

    for (const key in data) {
        lessons.push({ 
            id: key,
            ...data[key] 
        })
    }

    return lessons;
}

export async function getLessonById(id) {
    const allLessons = await getAllLessons();
    return allLessons.filter(lesson => lesson.id === id);
}