import { add, multiply } from "./script.js";

const sum = add(5, 3);
const product = multiply(4, 2);

document.getElementById("result").textContent = `Сума: ${sum}, Добуток: ${product}`;