"use strict";
function displayNumbers(time, callBack) {
    let i = 1;
    setInterval(function () {
        callBack(i);
        i++;
    }, time);
}
displayNumbers(9, function (number) {
    console.log('giá trị hieenjj tại', number);
});
