//On click, change <h1>

const testHeading = document.getElementById("test-heading");
let headingClicks = 0;

const headingClick = () => {
    if (headingClicks % 2 == 0) {
        testHeading.style.fontSize = "4em";
        headingClicks += 1
    }
    else {
        testHeading.style.fontSize = "2em";
        headingClicks += 1
    }

}

//jumping button

const jumpingButton = document.getElementById("jumping-button");
let jumpingButtonClicks = 0;

const jumpingButtonClick = () => {
    if (jumpingButtonClicks % 2 == 0) {
        jumpingButton.style.top = "auto";
        jumpingButton.style.left = "auto";
        jumpingButton.style.bottom = 0;
        jumpingButton.style.right = 0;
        jumpingButtonClicks += 1
    }
    else {
        jumpingButton.style.bottom = "auto";
        jumpingButton.style.right = "auto";
        jumpingButton.style.top = 0;
        jumpingButton.style.left = 0;

        jumpingButtonClicks += 1
    }

}

//jumping button Upgraded

const jumpingButtonUpgraded = document.getElementById("jumping-button-upgraded");
let jumpingButtonUpgradedClicks = 0;

const jumpingButtonUpgradedClick = () => {

    if (jumpingButtonUpgradedClicks === 0) {
        jumpingButtonUpgraded.style.left = "auto";
        jumpingButtonUpgraded.style.right = 0;
        jumpingButtonUpgradedClicks += 1;
    }
    else if (jumpingButtonUpgradedClicks === 1) {
        jumpingButtonUpgraded.style.top = "auto";
        jumpingButtonUpgraded.style.bottom = 0;
        jumpingButtonUpgradedClicks += 1;
    }
    else if (jumpingButtonUpgradedClicks === 2) {
        jumpingButtonUpgraded.style.right = "auto";
        jumpingButtonUpgraded.style.left = 0;
        jumpingButtonUpgradedClicks += 1;
    }
    else {
        jumpingButtonUpgraded.style.bottom = "auto";
        jumpingButtonUpgraded.style.right = "auto";
        jumpingButtonUpgraded.style.top = 0;
        jumpingButtonUpgraded.style.left = 0;
        jumpingButtonUpgradedClicks = 0;
    }

}


//input dependant style change

const userInput = document.getElementById("user-input");
const style = getComputedStyle(userInput);
const currentColor = style.backgroundColor;

const styleChange = (event) => {

    let inputText = event.target.value;

    if (inputText.length > 2) {
        userInput.style.backgroundColor = "green";
    }

    else {
        userInput.style.backgroundColor = currentColor;
    }
}

userInput.addEventListener("input", styleChange);

//change colors of the button simple
const colors = ["red", "green", "blue", "yellow"]

const colorButton = document.getElementById("color-button");

const buttonColorChange = (event) => {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorButton.style.backgroundColor = randomColor;
}

colorButton.addEventListener("click", buttonColorChange);

//change colors of the button advanced
const advancedColorButton = document.getElementById("advanced-color-button");

const buttonAdvancedColorChange = (event) => {
    let randomRedValue = [Math.floor(Math.random() * 256)];
    let randomGreenValue = [Math.floor(Math.random() * 256)];
    let randomBlueValue = [Math.floor(Math.random() * 256)];
    let randomRGBColor = `rgb(${randomRedValue}, ${randomGreenValue}, ${randomBlueValue})`

    advancedColorButton.style.backgroundColor = randomRGBColor;
}

advancedColorButton.addEventListener("click", buttonAdvancedColorChange);
