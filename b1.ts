function caculate(a:number,b:number,callBack:(total:number)=>void){
    let total:number=a+b;
    callBack(total);
}
caculate(3,5,function(total:number):void{
    console.log('giá trị là',total);
})