


var nameTag = document.querySelector("h1")
console.log(nameTag)


function setColor() {
    // console.log("clicked")

    var userFavColor = document.querySelector(".colorInput")
    // console.log(userFavColor)

    // grab the element to display
    var pTag = document.querySelector(".card p")

    pTag.innerText = "my favorite color is: " + userFavColor.value;

    // change background color based on user input
    var theBody = document.querySelector("body");

    theBody.style.backgroundColor = userFavColor.value
}


// <!-- select tab -->
function chooseLunch(element) {
    alert("You picked " + element.value);
}

// callback function
function message() {
    console.log("Delayed message");

}

console.log("Start");
setTimeout(console.log(message), 2000);
console.log("End");   