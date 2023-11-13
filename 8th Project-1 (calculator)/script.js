let num1Input = document.getElementById("num1");
let num2Input = document.getElementById("num2");
let result;
document.getElementById("add").onclick = function () {
    num1 = parseFloat(num1Input.value);
    num2 = parseFloat(num2Input.value);
    result = num1 + num2;
    document.getElementById("result").textContent = "Result: " + result;
}

document.getElementById("sub").onclick = function () {
    num1 = parseFloat(num1Input.value);
    num2 = parseFloat(num2Input.value);
    result = num1 - num2;
    document.getElementById("result").textContent = "Result: " + result;
}

document.getElementById("multiply").onclick = function () {
    num1 = parseFloat(num1Input.value);
    num2 = parseFloat(num2Input.value);
    result = num1 * num2;
    document.getElementById("result").textContent = "Result: " + result;
}

document.getElementById("divide").onclick = function () {
    num1 = parseFloat(num1Input.value);
    num2 = parseFloat(num2Input.value);
    result = num1 / num2;
    document.getElementById("result").textContent = "Result: " + result;
}

document.getElementById("power").onclick = function () {
    num1 = parseFloat(num1Input.value);
    num2 = parseFloat(num2Input.value);
    result = Math.pow(num1, num2);
    document.getElementById("result").textContent = "Result: " + result;
}

document.getElementById("under-root").onclick = function () {
    num1 = parseFloat(num1Input.value);
    num2 = parseFloat(num2Input.value);
    if (num2 < 0) {
        alert("Enter positive root number!")
    }
    else {
        result = Math.pow(num1, (1 / num2));
        document.getElementById("result").textContent = "Result: " + result;
    }
}