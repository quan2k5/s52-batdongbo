"use strict";
function myFilter(arr, find, callBack) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callBack(arr[i], find)) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(myFilter([1, 2, 3, 4, 5, 6], 2, function (value, find) {
    return value === find;
}));
