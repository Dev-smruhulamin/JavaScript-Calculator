let heading = document.getElementById("first");
heading.innerHTML = "JavaScript-Calculator";
heading.style.color = "IndianRed";
heading.style.backgroundColor = "#DFED64";

const inputOne = document.getElementById("inputOne");
const inputTwo = document.getElementById("inputTwo");
const result = document.getElementById("result");



function add() {
    if (inputOne.value && inputTwo.value) {

        let add = parseInt(inputOne.value) + parseInt(inputTwo.value);
        result.innerHTML = add;
    }
    else {
        alert("Please enter the all Value")
    }

}
function subtract() {
    if (inputOne.value && inputTwo.value) {
        let subtract = parseInt(inputOne.value) - parseInt(inputTwo.value);
        result.innerHTML = subtract;
    }
    else {
        alert("Please enter the all Value")
    }

}
function multiple() {
    if (inputOne.value && inputTwo.value) {
        let multiple = parseInt(inputOne.value) * parseInt(inputTwo.value);
        result.innerHTML = multiple;
    }
    else {
        alert("Please enter the all Value")
    }

}
function divide() {
    if (inputOne.value && inputTwo.value) {
        let divide = parseInt(inputOne.value) / parseInt(inputTwo.value);
        result.innerHTML = divide;
    }

    else {
        alert("Please enter the all Value")
    }
}
