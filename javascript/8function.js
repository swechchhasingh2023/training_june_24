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

/////// rest
function add(...args){
    console.log(args)
}

add (5, 6, 9)
(3) [5, 6, 9]

function add(...args){
    let out = 0
    for(i=0;i<args.length;i++){
        out += args[i]
    }
    return out
}
add (1,3,5,6)
15

//spread operator
let a = [1, 2, 3, 4]
let b = ['a', 'b', 'c', 'd', 'e']
let out = [...a, ...b]
out
(9) [1, 2, 3, 4, 'a', 'b', 'c', 'd', 'e']


let a = [1, 2, 3, 4]
let b = ['a', 'b',...a, 'c', 'd', 'e']
b
(9) ['a', 'b', 1, 2, 3, 4, 'c', 'd', 'e']
// in the function we are trying to pass array

function add(...args){
    let out = 0
    for(i=0;i<args.length;i++){
        out += args[i]
    }
    return out
}

let arr = [1, 2, 3, 4]
add(...arr)
10
add([1,2,3,4]) // it will not work
'01,2,3,4' //error

// when you use the array with the three dots it will act like rest operator

// when you pass the array as the arguments it will act like spread operator

