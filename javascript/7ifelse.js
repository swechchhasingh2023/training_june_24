if (condition){
    //if condition is true this part of code will work
}else{
    // else this part will work
}

// only for the one condition

if (condition){
    //if condition is true this part of code will work
}else if (condition){
    
}else{
    // else this part will work
}

// given number if odd or even

var a = 10
if (a%2 == 0){
    console.log(`${a} is even`)
}else{
    console.log(`${a} is odd`)
}

var a = 10
if (a%2 == 0){
    console.log(`${a} is even`)
}else{
    console.log(`${a} is odd`)
}
 ${a} is even
undefined
var a = 11
if (a%2 == 0){
    console.log(`${a} is even`)
}else{
    console.log(`${a} is odd`)
}
${a} is odd


var a = 11
if (a%2 == 0){
    console.log(`${a} is even`)
}else if (a%3 == 0){
    console.log(`${a} is divisible by 3`)
}else{
    console.log(`${a} is odd`)
}

11 is odd

var a = 15
if (a%2 == 0){
    console.log(`${a} is even`)
}else if (a%3 == 0){
    console.log(`${a} is divisible by 3`)
}else{
    console.log(`${a} is odd`)
}
15 is divisible by 3

//It follow the order from top to bottom.

var a = 15
if (a%2 == 0){
    console.log(`${a} is even`)
}if (a%3 == 0){
    console.log(`${a} is divisible by 3`)
}if (a%2 != 0){
    console.log(`${a} is odd`)
}
15 is divisible by 3
15 is odd

//single line ifelse OR ternary operator - useful in realtime

condition ? if condition true : if condition false

var a = 10

a>10 ? "HI" : "Bye"
'Bye'

var a = 9

a>10 ? "HI" : "Bye"
'Bye'
var a = 11

a>10 ? "HI" : "Bye"
'HI'

var a = 11
a>10 ? a+1 : a-1
12

var a = 9
a>10 ? a+1 : a-1
8

