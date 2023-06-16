// Reversing an array
// Write a function `reverseArray` that takes in an array, and returns the array reversed,
// try it without creating a new array

var arr1 = [11, 22, 33, 44, 55];
// expected // [55, 44, 33, 22, 11];

var arr2 = ["a", "b", "c", "d", "e"];
// ["e", "d", "c", "b", "a"];

// 👉write the pseudo code first
// DRIVER 🚗
// PRESENTER 👨‍🏫
// NAVIGATOR 🧭

function reverseArray(someArray) {
    let reverseArray = (arr) => {
        for (let i = 0; i < arr.length / 2; i++) {
            //Swap the elements
            [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
        }

        return arr;
    }
}
console.log(reverseArray(arr2))

// 🚨 don't forget to invoke/call the function

// use a 'for-loop' then refactor it using a 'while' loop

// we expect to get back...
// [55, 44, 33, 22, 11];
// ["e", "d", "c", "b", "a"];


var arr = ["a", "b", "c", "d", "e", "f"]
var arr2 = []

var reverseArrayInPlace;
function (array) {
    var arrLength = array.length;
    for (i = 0; i < arrLength; i++) {
        arr2.push(array.pop())
        array.push(arr2.shift())
    }
}

console.log(reverseArrayInPlace(arr))