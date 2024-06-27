es6

var > we can redeclare and reassign
let > we can not redeclare but can reassign
const > we can not redeclare nor reassign

var a = 10 for the processer two step processer

var a >>>>>> declare
a= 10 >>> assignment

console // node 


> var a = 10
undefined
> a
10
> var a = 20
undefined
> a
20
> a = 30
30
> 

//suppose declare name = swechchha but some boday came and chane in the code var name = Akash whole thing will get the change so it is not a good option.

> let b = 20
undefined
> b
20
> let b = 21
Uncaught SyntaxError: Identifier 'b' has already been declared
> b =22
22

> const c = 10
undefined
> c
10
> const c = 11
Uncaught SyntaxError: Identifier 'c' has already been declared
> c = 11
Uncaught TypeError: Assignment to constant variable.
> 
