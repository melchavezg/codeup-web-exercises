/* ACTION ITEMS*/

// leave comments on almost every line of code , on the notes/curriculum examples

// creating a variable named `weshoulddeletestuff`
// that variableis holding a value, type: boolean
// confirm() is a method that returns a boolean based on the user hitting"okay" or "cancel" in the browser
// confirm(): makes the pop up happen and the message that appears is what we put in as a string ex: "are you sure you .."
var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');

if (weShouldDeleteStuff) {
    // delete all the things...
} else {
    alert("Operation Canceled!");
}
