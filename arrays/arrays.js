// arrays allow us to group related data with each other
// they are built with square brackets
// the data inside of arrays are called 'elements'
// we separate elements with a comma ,

var animals = ["zebra", "lion", "giraffe"];

// adding elements to an existing array using the push function

animals.push(hippo);

// or

var anotherAnimal = "hippo";
animals.push(anotherAnimal);

// outputting specific elements 

console.log(animals[1]);
// this outputs lion

// array.length-1 gives the last element in the array


// updating specific values in an array

animals[1] = "frog";
console.log(animals);