console.log("hello script is working")

// Both of these will select the h1 tag

var h1 = document.querySelector("h1")
var title = document.querySelector("#title");

function changeToDarkMode(){
    console.log("changing to dark mode")

    // WE NEED TO TARGET THE WRAPPER

    var wrapperElement = document.querySelector(".wrapper")

    // show me the class list
    console.log(wrapperElement.classList)

    // remove a class
    wrapperElement.classList.remove("light-mode")

    // add the dark mode class
    wrapperElement.classList.add("dark-mode")
}