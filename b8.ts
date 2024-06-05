function myFind(arr:number[],find:number,callBack:(value:number,find:number)=>boolean){
    let result:any;
    for(let i=0;i<arr.length;i++){
        if(callBack(arr[i],find)){
            result=arr[i];
            return result;
        }
    }
    return  null;
}
console.log(myFind([1,2,3,4,5,6],2,function(value:number,find:number){
    return value===find;
}));
