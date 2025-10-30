import { add, subtract, multiply, divide } from "./script.js";

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const select = document.getElementById("operation");
const result = document.getElementById("result");
const btn = document.getElementById("calcBtn");

btn.addEventListener("click", () => {
    const a = Number(num1.value);
    const b = Number(num2.value);
    let res;

    switch (select.value) {
        case "add":
            res = add(a, b);
            break;
        case "subtract":
            res = subtract(a, b);
            break;
        case "multiply":
            res = multiply(a, b);
            break;
        case "divide":
            res = divide(a, b);
            break;
    }

    result.textContent = `Результат: ${res}`;
});