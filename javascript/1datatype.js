js mainly support three data Types

String > "Hii" 'hey' "10" `test`
Number > 14 64446 795375 77.88 .88990
Boolean > true false

es5 > Ecma Script5
es6 > Ecma Script6

//es5
var a = "hi"
var b = 10
var c = true

var a = "hi"
var b = 10
var c = true
undefined
typeof(a)
'string'
typeof(b)
'number'
typeof(c)
'boolean'
var d = "100"
undefined
typeof(d)
'string'
var e = 10.11
undefined
typeof(e)
'number'

basic operations

var a = 10
undefined
var b = 20
undefined
a+b (addition)
30
a-b
-10
a*b
200
a/b
0.5
b-a
10
a%b  // remainder 5/2 = 1 remainder always will be smaller ex - 10%20 remainder will be 10
10


var a = "Hi"
var b = "javascript"
undefined
a-b
NaN // Not a Number 
a+b
'Hijavascript' //concate 

"hi"*"bi"
NaN
"hi"/"bi"
NaN
"hi"-1
NaN

string + string = string
string + Number = string
Number + string = string
Number + Number = Number

Q - 
"10"+20+30  // 
"10" + 20 // string
"1020" + 30
"102030"

10+"20"+30  // 
"1020" + 30
"102030"

10+20+"30"  // 
30 + "30"
"3030"

"10"+20+30-1
102029

10+"20"+30-1
102029

10+20+"30"-1
3029

"10"-1
9
10*"23"
230
"23"/4
5.75
"23"+"4"
'234'

"10a" -1
NaN
"21"*"3f"
NaN
"21"+"3f"
'213f'

// if the both the side of the operating have pure numaric value then it will work, (+) will still work (concate) rest of the operations will not work.
