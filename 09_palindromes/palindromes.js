const palindromes = function (str) {
    const str_arr = str.toLowerCase().split('');
    let first_index = 0;
    let last_index = str_arr.length - 1;

    if (last_index <= 0) {
        return false;
    }

    for (;first_index < last_index;) {
        if (!/[a-z0-9]/i.test(str_arr[first_index])) {
            first_index++;
        }
        else if (!/[a-z0-9]/i.test(str_arr[last_index])) {
            last_index--;
        }
        else if (str_arr[first_index] != str_arr[last_index]) {
            return false;
        }
        else {
            first_index++;
            last_index--;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
