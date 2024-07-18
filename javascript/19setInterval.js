//setInterval - something should happen after certain interval of time and that keep happening problem - this function do't have end 

setInterval(function(){}, time)

function random(){
    console.log(Math.random())
}
let myNumber = setInterval(function(){
    random()
}, 3000)
0.10553542968083329
0.7217289097203123
0.14309710608578796
0.1084206735831823
0.2855128601444743

// prob - this function don't have any end so recommended that we should assign in one variable   
let myNumber1 = setInterval(()=>{
    random()
}, 3000)

clearInterval(myNumber)

// setTimeout - it's do the similar thing but it calls only one time  

function random(){
    console.log(Math.random())
}
setTimeout(function(){
    random()
}, 3000)
4
0.05199589857879139