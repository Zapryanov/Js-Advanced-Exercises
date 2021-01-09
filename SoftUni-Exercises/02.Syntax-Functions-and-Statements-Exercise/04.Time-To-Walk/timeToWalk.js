function timeToWalk(steps, footPrint, speed) {
    let distance = steps * footPrint;
    let brakes = Math.floor(distance / 500);
    let totalTime = distance / speed / 1000 * 60;
    let totalTimeInSeconds = Math.ceil((totalTime + brakes) * 60)

    let seconds = totalTimeInSeconds % 60;
    let minutes = Math.floor(totalTimeInSeconds / 60);
    let hours = Math.floor(totalTimeInSeconds / 3600);

    console.log((hours < 10 ? "0" : "") + hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds);
}

timeToWalk(4000, 0.60, 5);