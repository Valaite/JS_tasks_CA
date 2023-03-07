//create object

let car = {
    "doors": 5,
    "color": "gray",
    "brand": "Toyota",
}

console.log(car)


//take input values and create object
const userNameInput = document.getElementById("name");
const userSurnameInput = document.getElementById("surname");
const firstForm = document.getElementById("first-form");
const formWarning = document.getElementById("form-warning");

const handleFormSubmit = (event) => {
    event.preventDefault()
    userName = userNameInput.value;
    userSurname = userSurnameInput.value;

    if (userName && userSurname) {
        formWarning.innerHTML = ""
        const person = {
            "name": userName,
            "surname": userSurname,
        }
        console.log(person)
    }
    else {
        formWarning.style.color = "red";
        formWarning.innerHTML = "Please enter data to both fields";
    }
}

firstForm.addEventListener("submit", handleFormSubmit);

//take input values and create object with some boolean test
const nameInput = document.getElementById("user-name");
const ageInput = document.getElementById("age");
const secondForm = document.getElementById("second-form");
const warning = document.getElementById("warning");

const handleSecondFormSubmit = (event) => {
    event.preventDefault()
    let personName = nameInput.value;
    let personAge = Number(ageInput.value);

    if (personName && personAge) {
        warning.innerHTML = ""
        let isLegalAge = false;

        if (personAge >= 18) {
            isLegalAge = true;
        }


        const person = {
            "name": personName,
            "isLegalAge": isLegalAge,
        }
        console.log(person)
    }
    else {
        warning.style.color = "red";
        warning.innerHTML = "Please enter data to both fields";
    }
}

secondForm.addEventListener("submit", handleSecondFormSubmit);