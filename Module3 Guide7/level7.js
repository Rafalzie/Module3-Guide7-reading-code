//try to change the value of "number" by erasing 10 and writing a different number and observe the different output
let number = 10; // is used to declare a variable in JavaScript 
if (number > 5) { // if statement evaluates a condition and executes the block of code inside the {} if the condition is true
    document.getElementById("message").innerHTML = "Number is greater than 5"; // method of the document object that retrieves an HTML element with a specific id. In this case, it looks for an element with the id of "message".
} else {
    document.getElementById("message").innerHTML = "Number is 5 or less"; // method of the document object that retrieves an HTML element with a specific id. 
}

