const reverseString = function(string) {
    retString = "";

    /*if (!string || typeof string !== "string") {
        return "ERROR";
    }*/

    for (i = string.length-1; i >= 0; i--) {
        retString += string[i]
    }

    return retString;
};

// Do not edit below this line
module.exports = reverseString;
