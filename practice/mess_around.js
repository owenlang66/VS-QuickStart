var min_age = 10;

var min_height = 42;

var rider_age = 9

var rider_height = 44

if (rider_height>=min_height){
    console.log("Get on that ride, kiddo!");
}
        else if(rider_age>=min_age){
            console.log("Get on that ride, kiddo!");
        }
        else {
            console.log("Sorry kiddo, maybe next year.");
        }
        



if (rider_height>=min_height && rider_age>=min_age){
    console.log("Get on that ride, kiddo!")

}
    else {
    console.log("Sorry kiddo, maybe next year")
    }


    for(var num = 7; num <100; num = num+7) {
        console.log(num);
    }


// break example
    for(var x = 1; x<=10; x=x+1){

        if (x==4){
            console.log("It's four!")
            break;}
            console.log(x)
    }


var animals = ["bear", "koala", "dog"];

for (var x = 0; x<animals.length; x++){

    if (animals[x] == "snake"){
    console.log("Hey we found the snake!");
    
}       else {
    console.log("no snake in sight");
    }
}


// return example
function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);


// function example
function countToFive (){

    for(var x = 1; x<=5; x=x+1){
        console.log(x)
}
}
// calling the function
countToFive()


function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('result is', result);



function greetSomeone(person) {
    if (person == "Martin") {
        console.log("Hello, partner!");
    }
    else {
        console.log("Greetings, Earthling!");
    }
}
greetSomeone("Martin");
greetSomeone("Jerry");





function greet(person) {

    if (person != "Count Dooku")
    {
        console.log("Hello, " + person);
    }
    else {
        console.log("I'm coming for you, Dooku!");
    }
}

greet("Jim");
greet("Count Dooku");


var message = "hello"
console.log(message.length)


// parameters practice
function greet(person, timeOfDay){
    if (person == "Count Dooku"){
        return "I'm coming for you, Dooku!"

    }
        console.log(person, timeOfDay);
    return "Good " + timeOfDay + " " + person;
}

var greetingString = greet("Count Dooku", "evening");
console.log(greetingString)


// write a function that will push in an array all even numbers starting from 1-10
function evenPush(){
    var evenArray = [];
    for (var x=1;x<=10;x++){
    if (x%2==0){
        evenArray.push(x)
    }
    }
    return evenArray
}

var final = evenPush();
console.log(final)






for(var i=22; i>5; i--) {
    console.log(i);
    i -= 4;
}
// i will subtract 4 each loop while then decrementing by 1, so it will decrease by 5 each loop until it's less than 5

// Output -> 22, 17, 12, 7


var i = 11;
if(i % 2 == 0) {
    console.log("even");
} else {
    console.log(i);
}

// it will check if 11 module 2 equals zero, it does not, so it automatically console logs 11 and ends 

// Output -> 11




function findAverage(arr) {
    var currentSum = 0;
    var currentSum = (arr[0] + arr[1] + arr[2] + arr[3] + arr[4])
    return currentSum / arr.length;

}
console.log(findAverage([3,6,5,9,2]))


function findAverage(arr){
    var currentSum = 0;
    for (var i = 0; i <arr.length; i++){
        currentSum += arr[i];
    }
    return currentSum/arr.length
}
var arr1 = [3,6,5,9,2];
console.log(findAverage(arr1));

if (weather != "rainy") {
    if (distanceToStadium < 3) {
      console.log("I think I’ll walk to the game.");
    } else {
      console.log("It’s a bit far, so maybe I’ll fly.");
    }
  } else {
    console.log("Hey, I’m a duck! A little water is OK. I’ll swim.");
  }