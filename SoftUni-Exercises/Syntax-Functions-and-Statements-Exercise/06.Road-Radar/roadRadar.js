function roadRadar(arr) {
    const currentSpeed = arr[0];
    const area = arr[1];

    const speedLimit = {
        "residential": 20,
        "city": 50,
        "interstate": 90,
        "motorway": 130
    }

    let result = {
        1: "speeding",
        2: "excessive speeding" 
    }

    let speeding = currentSpeed - speedLimit[area];

    if (speeding > 0) {
        speeding = Math.ceil(speeding / 20);
        return result[speeding] || "reckless driving";
    }
}

console.log(roadRadar([40, "city"]));
console.log(roadRadar([21, "residential"]));
console.log(roadRadar([120, "interstate"]));
console.log(roadRadar([200, "motorway"]));

// My previous solution

// function roadRadar2(arr) {
//     const currentSpeed = arr[0];
//     const area = arr[1];

//     const speedLimit = {
//         "residential": 20,
//         "city": 50,
//         "interstate": 90,
//         "motorway": 130
//     }    

//     if (currentSpeed - speedLimit[area] > 40) {
//         return "reckless driving";
//     } else if (currentSpeed - speedLimit[area] > 20) {
//         return "excessive speeding";
//     } else if (currentSpeed - speedLimit[area] > 0) {
//         return "speeding";
//     }
// }

// console.log(roadRadar2([40, "city"]));
// console.log(roadRadar2([21, "residential"]));
// console.log(roadRadar2([120, "interstate"]));
// console.log(roadRadar2([200, "motorway"]));