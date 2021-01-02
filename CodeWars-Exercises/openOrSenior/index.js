function openOrSenior(data){
    return data.reduce((acc, cur) => {
        let type = cur[0] >= 55 && cur[1] > 7 ? "Senior" : "Open";
        acc.push(type);
        return acc;
    }, []);
}

openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]);
openOrSenior([[3, 12],[55,1],[91, -2],[54, 23]]);
openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]);