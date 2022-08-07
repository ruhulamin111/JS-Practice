// 1
function changeHtml() {
    document.getElementById('demo').innerHTML = "Hellow world"
};

function myFunction() {
    let text = document.getElementById("demo1").innerHTML;
    document.getElementById("demo1").innerHTML =
        text.replace("Microsoft", "W3Schools");
}
// 2
let price = 100;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

document.getElementById("demo2").innerHTML = total;

// 3
const numbers = [45, 20, 229, 35, 25];
let allOver18 = numbers.every(myFunction);
document.getElementById("demo3").innerHTML = "All over 18 is " + allOver18;
function myFunction(value, index, array) {
    return value > 18;
}

// 4
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo4").innerHTML = fruits.includes("Mango");

// 5
const d = new Date(2018, 11, 24, 10, 33, 30, 0);
document.getElementById("demo5").innerHTML = d;

// 6
const d1 = new Date();
d1.setDate(16);
document.getElementById("demo6").innerHTML = d1;

// 7
let text;
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);
if (someday > today) {
    text = "Today is before January 14, 2100.";
} else {
    text = "Today is after January 14, 2100.";
}
document.getElementById("demo7").innerHTML = text;

// 8. 
document.getElementById("demo8").innerHTML = Math.trunc(12.67);

// 9
function random() {
    document.getElementById("demo9").innerHTML = Math.random().toFixed(2) * 100;
}
// 10
function myFunction() {
    // let age = document.getElementById("age").value;
    let voteable = (age < 18) ? "Too young" : "Old enough";
    document.getElementById("demo10").innerHTML = voteable + " to vote.";
}

// 11
let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
document.getElementById("demo11").innerHTML = "Today is " + day;

// 12
const person = { fname: "John", lname: "Doe", age: 25, country: "USA" };
let txt = "";
for (let x in person) {
    txt += person[x] + " ";
}
document.getElementById("demo12").innerHTML = txt;

// 13
const cars = ['bmw', 'marcedes', 'toyota'];
const brand = 'toyota';
let product = '';
for (let item of cars) {
    product = product + item + ' ';
}
// 14
let text1 = "";
for (let i = 0; i < 5; i++) {
    if (i === 2) { continue; }
    text1 = text1 + i;
}
document.getElementById("demo13").innerHTML = text1;

// 14
function myFunction() {
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("demo14").value;
    try {
        if (x == "") throw "empty";
        if (isNaN(x)) throw "not a number";
        x = Number(x);
        if (x < 5) throw "too low";
        if (x > 10) throw "too high";
    }
    catch (err) {
        message.innerHTML = "Input is " + err;
    }
}


