const sumAll = function(start, end) {
    let sum = 0;

    if (typeof start !== "number" || typeof end !== "number" || start < 0 || end < 0) {
        return "ERROR";
    }

    if (end < start) {
        let temp = end;
        end = start;
        start = temp;
    }

    for (; start <= end; start++) {
        sum += start;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
