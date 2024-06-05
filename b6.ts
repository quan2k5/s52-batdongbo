function task1(){
    console.log('Task 1 đc thực thi');   
}
function task2(){
    console.log('Task 2 đc thực thi');
}
function task3(){
    console.log('Task 3 đc thực thi!Hoàn thành'); 
}
setTimeout(function(){
    task1();
    setTimeout(function(){
        task2();
        setTimeout(function(){
            task3();
        },2000)
    },1500)
},100)