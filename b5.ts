function checkCondition(check:boolean,callBack:(check:boolean)=>void){
    setTimeout(function(){
        callBack(check);
    },1000);
}
checkCondition(true,function(check:boolean){
    console.log('Điều kiện trả về:',check);
})