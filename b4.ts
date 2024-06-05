function displayNumbers(time:number,callBack:(number:number)=>void){
    let i=1;
    setInterval(function(){
        callBack(i);
        i++;
    },time);
}
displayNumbers(9,function(number:number){
    console.log('giá trị hieenjj tại',number);
})