let numbers = [1, 2, 3, 4, 5]; // Declares an array of numbers.
let listHTML = ""; // Initializes an empty string to build HTML content.

for (let i = 0; i < numbers.length; i++) { // Iterates over the numbers array
    listHTML += "<li>Number at index " + i + " is " + numbers[i] + "</li>"; // Appends each list item to listHTML.
} // closing bracket

document.getElementById("numberList").innerHTML = listHTML; // pdates the content of the HTML element with id="numberList".
