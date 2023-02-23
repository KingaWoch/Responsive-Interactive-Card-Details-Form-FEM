const form = document.getElementById("form");

const name = document.getElementById("name");
const cardName = document.getElementById("card-name");
const nameError = document.getElementById("name-error");

const number = document.getElementById("number");
const cardNumber = document.getElementById("card-number");
const numberError = document.getElementById("number-error");

const month = document.getElementById("month");
const cardMonth = document.getElementById("card-month");

const year = document.getElementById("year");
const cardYear = document.getElementById("card-year");

const dateError = document.getElementById("date-error");

const cvcNumber = document.getElementById("cvc-number");
const cardCvcNumber = document.getElementById("card-cvc-number");
const cvcError = document.getElementById("cvc-error");

const error = document.querySelectorAll(".error");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // name validation

    let nameRegExp = /^[a-zA-Z\s]*$/;  

    if(!name.value) {
        name.classList.add("invalid");
        nameError.innerText = "Can't be blank";
    } else if
    (!name.value.match(nameRegExp)) {
        nameError.innerText = "Wrong format";
        name.classList.add("invalid");
    } 
    else {
        name.classList.remove("invalid");
        nameError.innerText = "";
    }
    
    // number validation

    let numberRegExp = /^(\d{16}|(\d{4}[ -]){3}\d{4})$/;

    if (!number.value) {
        number.classList.add("invalid");
        numberError.innerText = "Can't be blank";
    } else if
    (!number.value.match(numberRegExp)) {
        number.classList.add("invalid");
        numberError.innerText = "Wrong format, numbers only";
    } else {
        number.classList.remove("invalid");
        numberError.innerText = "";
    }
    
    // date validation

    let monthRegExp = /\b([1-9]|1[0-2])\b/;
    let yearRegExp = /\b([0-9]|[1-9][0-9])\b/;

    if(!month.value || !year.value) {
        month.classList.add("invalid");
        year.classList.add("invalid");
        dateError.innerText = "Can't be blank";
    }else if
    (!month.value.match(monthRegExp) || !year.value.match(yearRegExp)) {
        month.classList.add("invalid");
        year.classList.add("invalid");
        dateError.innerText = "Wrong format";
     } else {
        month.classList.remove("invalid");
        year.classList.remove("invalid");
        dateError.innerText = "";
     }

     // cvc validation 

     let cvcRegExp = /^(00[1-9]|0[1-9][0-9]|[1-9][0-9][0-9])$/;

     if(!cvcNumber.value) {
        cvcNumber.classList.add("invalid");
        cvcError.innerText = "Can't be blank";
     } else if 
     (!cvcNumber.value.match(cvcRegExp)) {
        cvcNumber.classList.add("invalid");
        cvcError.innerText = "Wrong format, numbers only";
     } else {
        cvcNumber.classList.remove("invalid");
        cvcError.innerText = "";
     }

     if (name.value &&
        number.value &&
        month.value &&
        year.value &&
        cvcNumber.value) {
            window.location.href = "thank-you.html";
        }
})


/* getting data from the form */


name.addEventListener("input", () => {
    if(name.value == "") {
        cardName.innerText = "JANE APPLESEED";
    } else {
        cardName.innerText = name.value;
    }
})

number.addEventListener("input", () => {
    if(number.value == "") {
        cardNumber.innerText = "0000 0000 0000 0000";
    } else {
        cardNumber.innerText = number.value.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim();
    }
})

month.addEventListener("input", () => {
    if(month.value == "") {
        cardMonth.innerText = "00";
    } else {
        cardMonth.innerText = month.value;
    }
})

year.addEventListener("input", () => {
    if(year.value == "") {
        cardYear.innerText = "00";
    } else {
        cardYear.innerText = year.value;
    }
})

cvcNumber.addEventListener("input", () => {
    if(cvcNumber.value == "") {
        cardCvcNumber.innerText = "000";
    } else {
        cardCvcNumber.innerText = cvcNumber.value;
    }
})

