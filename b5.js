"use strict";
function checkCondition(check, callBack) {
    setTimeout(function () {
        callBack(check);
    }, 1000);
}
checkCondition(true, function (check) {
    console.log('Điều kiện trả về:', check);
});
