function tickets(peopleInLine){
    let quarter = 0;
    let fifty = 0;

    for (let i = 0; i < peopleInLine.length; i++) {
        let money = peopleInLine[i];
        if (money === 25) {
            quarter++;
        } else if (money === 50) {
            quarter--;
            if (quarter < 0) {
                return "NO";
            }
            fifty++;
        } else if (money === 100) {
            if (fifty === 0) {
                quarter -= 3;
            } else {
                quarter--;
                fifty--;
            }
            if (quarter < 0 || fifty < 0) {
                return "NO";
            }
        }
    }
    return "YES";
}

// tickets([25, 25, 50, 50]);
// tickets([25, 100]);
tickets([25, 25, 50, 50, 100]);