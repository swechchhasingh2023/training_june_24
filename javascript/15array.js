Array is collection of homogenious data type.

let a = [1, 5, 6, 43, 3443, 23] >> Array of Number
let b = ["Hii", "Bie", "test"] >> Array of String
let c = [true, false, false, true] >> Array of Boolean
this is working in all programming languages

For JS-
Array is collection of homogenious as well as a hetrogenious data type.

let d = [1,4, true, "super",34, false,"style"]

Array Operations:-

let city = ["delhi", "helsinki", "Mumbai", "Pune"]
city.length
4
city[0]
'delhi'
city[1]
'helsinki'
city[city.length-1]
'Pune'

Add the value at the end of the array

let city = ["delhi", "helsinki", "Mumbai", "Pune"]

city.push('Amesterdam')
5
city
(5) ['delhi', 'helsinki', 'Mumbai', 'Pune', 'Amesterdam']
city.push('London')
6
city
(6) ['delhi', 'helsinki', 'Mumbai', 'Pune', 'Amesterdam', 'London']

Remove the value at the end of the array

let city = ["delhi", "helsinki", "Mumbai", "Pune"]

city.pop()
'Pune'

let city = ['delhi', 'helsinki', 'Mumbai', 'Pune', 'Amesterdam']

city.pop(2)
'Amesterdam'

Unshift and Shift
city
(4) ['delhi', 'helsinki', 'Mumbai', 'Pune']
city.unshift('Indore')
5
city
(5) ['Indore', 'delhi', 'helsinki', 'Mumbai', 'Pune']
city.shift()
'Indore'
city
(4) ['delhi', 'helsinki', 'Mumbai', 'Pune']

push > add in the end of the array
unshift > add in the begining of the array
pop > remove the last value
shift > remove the first value

Slice and Splice

