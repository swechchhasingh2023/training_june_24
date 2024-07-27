//closure is mainly used for restricing the scope

//A closure in JavaScript is a function that has access to the variables in its parent scope, even after the parent function has completed execution. This allows for data to be "closed over" or remembered by the inner function, even after the outer function has returned.

// enclose some functions
//local scope - it is not accessible outside of that function
// global scope -  it is accessible anywhere in the application

// var a = 10 // global scope
// function add () {
// var b = 20
//     return(a + b)
// }
// console.log(">>>>>>>addd<<<<<<", add())
// console.log(">>>>>>>a<<<<<<", a) // local scope
// console.log(">>>>>>>b<<<<<<", b)

// function is default closure 
// {} its make a closure

var a = 10 
for (i=0; i<10; i++){
    var b = 20 // with the help of for loops scope will work
    // let b = 20 // only using let u can able to restrict the scope
    console.log(a+b+i)
}
console.log(">>>>>>>a<<<<<<", a) // local scope
console.log(">>>>>>>b<<<<<<", b)

// for loop not make a closure

