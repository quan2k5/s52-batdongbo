function myForEach(arr:number[],callback:(index:number,value:number,arr:number[])=>void){
    for(let i=0;i<arr.length;i++){
        callback(i,arr[i],arr);
    }
}
myForEach([1,2,3,4,5,6],function(index:number,value:number,arr:number[]){
    console.log(`Vị trí thứ ${index}|Phần tử:${value}|Mảng:${arr}`);
})