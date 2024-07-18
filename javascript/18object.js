var movieName = "jab we met";
var movieRating = 4.7;
var movieInd = "Bollywood";

var movieName1 = "Avengers";
var movieRating1 = 4.2;
var movieInd1 = "Hollywood";

//for the just two movies we have declare 6 variable so it will be difficult to manage

var a = {}; //object

//movie is the name of the object and name/rating/ind is property of the object

var movie = {
  name: "jab we met",
  rating: 4.7,
  ind: "Bollywood",
};

movie.name
'jab we met'
movie.ind
'Bollywood'
movie['ind'] // either you can access this way 
'Bollywood'


// we can add the property in the object 
movie.type = "Romantic"
movie
{name: 'jab we met', rating: 4.7, ind: 'Bollywood', type: 'Romantic'}

// we can update the existing property
movie.rating = 4.6
movie
{name: 'jab we met', rating: 4.6, ind: 'Bollywood', type: 'Romantic'

// we can delete property
delete movie.ind
true
movie
{name: 'jab we met', rating: 4.6, type: 'Romantic'}


// problem is still not resolved for the above 

JSON
> Javascript Object Notation
> Array of objects
> key value pair of DataTransfer

let data = [
    {
        name: "jab we met",
        rating: 4.7,
        ind: "Bollywood",
      },
      {
        name: "Avengers",
        rating: 4.5,
        ind: "Hollywood",
      }
]

data[1].name
'Avengers'

data.map((item)=> {return item.name})
(2) ['jab we met', 'Avengers']

// which loop use of object? - for in loop

var movie = {
    name: "jab we met",
    rating: 4.7,
    ind: "Bollywood",
  };

  // we want to just print the key from the above object

  for(key in movie){
      console.log(key)
  }
name
rating
ind

for(key in movie){
    console.log(movie[key])
} // you use any name instead of key
jab we met
4.7
Bollywood