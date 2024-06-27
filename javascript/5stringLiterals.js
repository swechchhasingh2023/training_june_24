let name = "Avengers"
let type = "Action"
let ind = "Hollywood"
let rating = "4.5"

//es5

let out = "An "+name+" is an "+type+" movie with rating of "+rating+" and from ind "+ind+"."
undefined
out
'An Avengers is an Action movie with rating of 4.5 and from ind Hollywood.'

// es6

let out1 = `An ${name} is an ${type} movie with rating of ${rating} and from ind ${ind}.`

out1
'An Avengers is an Action movie with rating of 4.5 and from ind Hollywood.'