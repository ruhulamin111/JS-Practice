// 1.
function changeHtml() {
    document.getElementById('demo').innerHTML = "Hellow world"
};

function myFunction() {
    let text = document.getElementById("demo1").innerHTML;
    document.getElementById("demo1").innerHTML =
        text.replace("Microsoft", "W3Schools");
}
