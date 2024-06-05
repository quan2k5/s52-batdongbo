"use strict";
function delayedCallBack(time, callBack) {
    setTimeout(function () {
        callBack();
    }, time);
}
delayedCallBack(2000, function () {
    console.log('run');
});
