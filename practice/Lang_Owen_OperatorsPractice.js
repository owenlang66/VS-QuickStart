function howMuchLeftOverCake(numberOfPieces, numberOfPeople){
    var x = (numberOfPieces % numberOfPeople);
    console.log(x);
        if (x == 0){
            console.log("No leftovers for you!");
        }
        else if (x <= 2){
            console.log("You have some leftovers");
        }
        else if (x <= 5){
            console.log("You have some leftovers to share");
        }
        else {
            console.log("Hold another party!");
        }
}

howMuchLeftOverCake(12,5)
