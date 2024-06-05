"use strict";
function caculate(a, b, callBack) {
    let total = a + b;
    callBack(total);
}
caculate(3, 5, function (total) {
    console.log('giá trị là', total);
});
