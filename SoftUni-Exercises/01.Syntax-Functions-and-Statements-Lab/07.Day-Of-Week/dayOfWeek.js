const validDay = {
    "Monday": 1,
    "Tuesday": 2,
    "Wednesday": 3,
    "Thursday": 4,
    "Friday": 5,
    "Saturday": 6,
    "Sunday": 7,
}

function dayOfWeek(d) {
    return validDay[d] || "error";
}

console.log(dayOfWeek("Monday"));
console.log(dayOfWeek("Friday"));
console.log(dayOfWeek("something"));