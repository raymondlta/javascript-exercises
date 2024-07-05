const fibonacci = function(num) {
    const newNum = parseInt(num);

    if (newNum < 0) {
        return "OOPS";
    }
    else if (newNum === 0) {
        return 0;
    }
    else if (newNum === 1) {
        return 1;
    }

    let first_val = 0;
    let second_val = 1;
    let factorial = 1;

    for (let i = 1; i < newNum; i++) {
        factorial = first_val + second_val;
        first_val = second_val;
        second_val = factorial;
    }

    return factorial;
};

// Do not edit below this line
module.exports = fibonacci;
