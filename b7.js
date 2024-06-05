"use strict";
function myForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(i, arr[i], arr);
    }
}
myForEach([1, 2, 3, 4, 5, 6], function (index, value, arr) {
    console.log(`Vị trí thứ ${index}|Phần tử:${value}|Mảng:${arr}`);
});
