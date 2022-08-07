// 1.
function changeHtml() {
    document.getElementById('demo').innerHTML = "Hellow world"
};

function myFunction() {
    let text = document.getElementById("demo1").innerHTML;
    document.getElementById("demo1").innerHTML =
        text.replace("Microsoft", "W3Schools");
}

let price = 100;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;


document.getElementById("demo2").innerHTML = total;

const numbers = [45, 20, 229, 35, 25];
let allOver18 = numbers.every(myFunction);

document.getElementById("demo3").innerHTML = "All over 18 is " + allOver18;

function myFunction(value, index, array) {
    return value > 18;
}