"use strict";
const results = [];
const textResults = [];
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var btn = document.querySelector("button");
btn.addEventListener('click', () => {
    const n1 = num1.value;
    const n2 = num2.value;
    const result = add(+n1, +n2);
    const textResult = add(n1, n2);
    console.log(results, textResults);
});
function add(num1, num2) {
    if (typeof num1 == 'number' && typeof num2 == 'number') {
        results.push(num1 + num2);
        return num1 + num2;
    }
    else if (typeof num1 == 'string' && typeof num2 == 'string') {
        textResults.push(num1 + "-" + num2);
        return num1 + "-" + num2;
    }
    results.push(+num1 + +num2);
    return +num1 + +num2;
}
;
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("worked");
    }, 1000);
});
p1.then((e) => {
    console.log(e.split("r"));
});
