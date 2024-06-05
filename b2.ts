function delayedCallBack(time:number,callBack:()=>void){
    setTimeout(function(){
        callBack();
    },time)
}
delayedCallBack(2000,function(){
    console.log('run');
})