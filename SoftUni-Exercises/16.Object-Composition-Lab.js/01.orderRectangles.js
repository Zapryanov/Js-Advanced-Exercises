function orderRectangles(arr) {

    return arr.reduce((acc, [width, height]) => {
        acc.push({
            width,
            height,
            area: () => width * height,
            compareTo(other) {
                let result = other.area() - this.area();

                return result === 0 
                    ? other.width - this.width
                    : result;
            }
        });
        return acc;
    },[])
    .sort((a, b) => {
        return a.compareTo(b)
    })

}

orderRectangles(
    [[10,5], [3,20], [5,12]]
);