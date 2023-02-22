const form = document.getElementById("form");

const inputs = document.getElementsByTagName("input");

const name = document.getElementById("name");
const cardName = document.getElementById("card-name");

const number = document.getElementById("number");
const cardNumber = document.getElementById("card-number");

const month = document.getElementById("month");
const cardMonth = document.getElementById("card-month");

const year = document.getElementById("year");
const cardYear = document.getElementById("card-year");

const cvcNumber = document.getElementById("cvc-number");
const cardCvcNumber = document.getElementById("card-cvc-number");

const error = document.querySelectorAll(".error");

const button = document.getElementById("button");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    for (i = 0; i < inputs.length; i++) {
        if(!inputs[i].value) {
            inputs[i].classList.add("invalid");
            error[i].innerHTML = "Can't be blank";
        } else {
            inputs[i].classList.remove("invalid");
            error[i].innerHTML = "";
        }
    }
})