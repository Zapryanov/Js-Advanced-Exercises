const DUMMY_SERVICES = [
    {
        id: "1",
        titleBig: "Козметика",
        titleSmall: "Dr.Renaud",
        image: "https://res.cloudinary.com/audipower/image/upload/v1645764271/dr-renaud-logo_dnldij.jpg",
        // image: "images/dr-renaud-logo.jpg",
    },
    {
        id: "2",
        titleBig: "Кола Маска",
        titleSmall: "",
        image: "https://res.cloudinary.com/audipower/image/upload/v1645764271/dr-renaud-logo_dnldij.jpg",
        // image: "images/dr-renaud-logo.jpg",
    },
    {
        id: "3",
        titleBig: "Маникюр",
        titleSmall: "Nika Nagel / Mark Lux",
        image: "https://res.cloudinary.com/audipower/image/upload/v1645764271/dr-renaud-logo_dnldij.jpg",
        // image: "images/dr-renaud-logo.jpg",
    }
]

export function getAllServices () {
    return DUMMY_SERVICES
}