var firstNum = 0;
var secondNum = 0;
let theIcon = "";
var extraNum = 0;
var extraCheck = 0;
var extraDecimal = 0;

//does al the calculations
function operate(numOne, numTwo, icon) {
    if (icon === "+") {
        return Number(numOne) + Number(numTwo);
    } else if (icon === "-") {
        return Number(numOne) - Number(numTwo);
    } else if (icon === "*") {
        return Number(numOne) * Number(numTwo);
    } else if (icon === "/") {
        return Number(numOne) / Number(numTwo);
    }
}

// start calculations when "=" is pressed 
function calculate() {
    secondNum = document.getElementById("calculatorScreen").value;
    document.getElementById("calculatorScreen").value = parseFloat(operate(firstNum, secondNum, theIcon).toFixed(3));
    extraCheck = 1;
    extraDecimal = 0;
}

// gets the number and math input to know what to calculate
function changeIcon(buttonIcon) {
    // runs when notting is typed before
    if (firstNum === 0) {
        firstNum = document.getElementById("calculatorScreen").value;
        theIcon = buttonIcon;
        document.getElementById("calculatorScreen").value = "";
        extraDecimal = 0;
    // runs when '+, -, *, /' is pressed a second time before '=' is pressed
    } else if (firstNum > 0 && extraCheck === 0) {
        secondNum = document.getElementById("calculatorScreen").value;
        document.getElementById("calculatorScreen").value = "";
        firstNum = parseFloat(operate(firstNum, secondNum, theIcon).toFixed(3));
        document.getElementById("calculatorScreen").value = firstNum;
        theIcon = buttonIcon;
        secondNum = 0;
        extraNum = 1;
        extraDecimal = 0;
        // runs if '=' is pressed before
    } else if (extraCheck === 1) {
        firstNum = document.getElementById("calculatorScreen").value;
        theIcon = buttonIcon;
        document.getElementById("calculatorScreen").value = "";
        extraCheck = 0;
        extraDecimal = 0;
    }
}

// displays the pressed keys in the calculator screen
function changeDisplay(buttonNum) {
    if (extraNum === 1) {
        document.getElementById("calculatorScreen").value = "";
        let displayValue = document.getElementById("calculatorScreen").value;
        document.getElementById("calculatorScreen").value = displayValue + buttonNum;
        extraNum = 0;
    } else {
        let displayValue = document.getElementById("calculatorScreen").value;
        document.getElementById("calculatorScreen").value = displayValue + buttonNum;
    }
}

//adds a point but limmited to one at a time
function point() {
    if (extraDecimal === 0) {
        let displayValue = document.getElementById("calculatorScreen").value;
        document.getElementById("calculatorScreen").value = displayValue + ".";
        extraDecimal = 1;
    } 
}

//removes the last letter
function backspace() {
    let displayNum = document.getElementById("calculatorScreen").value;
    displayNumMin = displayNum.slice(0, -1);
    document.getElementById("calculatorScreen").value = displayNumMin;


}

//clears all existing data
function clearData() {
    var firstNum = 0;
    var secondNum = 0;
    let theIcon = "";
    var extraNum = 0;
    var extraCheck = 0;
    document.getElementById("calculatorScreen").value = "";
}

