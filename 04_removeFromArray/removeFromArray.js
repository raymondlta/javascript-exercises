const removeFromArray = function(list, ...remove_list) {
    for (const value of remove_list) {
        for (i = 0; i < list.length; i++) {
            if (value === list[i]) {
                list.splice(i, 1);
                i--;
            }
        }
    }
    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
