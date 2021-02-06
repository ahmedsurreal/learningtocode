var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var result = document.getElementById('result');
document.getElementById("percentageSubmit").addEventListener('submit', function(event){
    if (!num1 || !num2) {
        alert("Please enter values in both fields")
    } else {
        x = parseFloat(num1.value);
        y = parseFloat(num2.value);
    result.innerText = x * 100 / y + "%";
    }
    event.preventDefault();
});