function stopwatch() {
    const time = document.getElementById("time");
    const start = document.getElementById("startBtn");
    const stop = document.getElementById("stopBtn");

    let timeArr = time.textContent.split(":");
    let minutes = +timeArr[0];
    let seconds = +timeArr[1];

    let showText;

    start.addEventListener("click", handleStart);
    stop.addEventListener("click", handleStop);

    function handleStart(e) {
        minutes = "00";
        seconds = "00";
        time.textContent = `${minutes}:${seconds}`;
        showText = setInterval(displayTime, 1000);
        start.setAttribute("disabled", "true");
        stop.removeAttribute("disabled");
    }
    
    function handleStop(e) {
        stop.setAttribute("disabled", "true");
        start.removeAttribute("disabled");

        clearInterval(showText);
    }

    function displayTime() {
        seconds++;
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }
        if (seconds === 60) {
            seconds = "00";
            minutes++;
            if (minutes < 10) { 
                minutes = `0${minutes}`;
            }
        }
        if (minutes === 0) {
            minutes = `0${minutes}`;
        }        

        time.textContent = `${minutes}:${seconds}`;
    }
}