function processArray(arr:number[],callBack:(index:number,b:number)=>void){
    for(let i=0;i<arr.length;i++ ){
        setTimeout(function(){
            callBack(i,arr[i]);
        },1000);
    }
}
processArray([1,2,3,4,5,5,6],function(index:number,value:number){
    console.log(`Phần tư thư ${index} là `,value);
})