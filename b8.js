"use strict";
function myFind(arr, find, callBack) {
    let result;
    for (let i = 0; i < arr.length; i++) {
        if (callBack(arr[i], find)) {
            result = arr[i];
            return result;
        }
    }
    return null;
}
console.log(myFind([1, 2, 3, 4, 5, 6], 2, function (value, find) {
    return value === find;
}));
