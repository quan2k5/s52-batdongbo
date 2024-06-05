function myFindIndex(arr:number[],find:number,callBack:(value:number,find:number)=>boolean){
    let result:number;
    for(let i=0;i<arr.length;i++){
        if(callBack(arr[i],find)){
            result=i;
            return result;
        }
    }
    return  -1;
}
console.log(myFindIndex([1,2,3,4,5,6],2,function(value:number,find:number){
    return value===find;
}));
