var a = 10
var b = 20
a+b
30  // this code is not in dynamic in nature and reusable

Keyword nameoffunction (parameter){
    Keyword
}

function add (a,b){
    return a+b
}
add(1, 2)
3
add (4, 7)
11
add("hi", "bie")
'hibie'

write function one times use many times

//if pass one parameter - excepting two and you are passing 1 that why breaking
add(9)
NaN
//if pass 3 parameter - it will able to ignore third parameter 
add(1, 7, 8)
8

function isEven(userInput){
    if(userInput%2 == 0){
out= `${userInput} is even`
    }else{
        out= `${userInput} is odd` 
    }
    return out
}

isEven(4)
'4 is even'
isEven(11)
'11 is even'

//es6 - same function we can write using arrow func

function add (a,b){
    return a+b;
}

let add = (a,b)=>{return a+b}
add(1,2)
3
