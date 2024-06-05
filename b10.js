"use strict";
function myFindIndex(arr, find, callBack) {
    let result;
    for (let i = 0; i < arr.length; i++) {
        if (callBack(arr[i], find)) {
            result = i;
            return result;
        }
    }
    return -1;
}
console.log(myFindIndex([1, 2, 3, 4, 5, 6], 2, function (value, find) {
    return value === find;
}));
