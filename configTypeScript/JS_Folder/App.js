"use strict";
console.log("npm init => bizim üçün 'package.json ' fileni yaradir ve biz orda" +
    +" script objesine bezi propertiler elave ede bilerik" +
    +"meselen script{'start': 'lite-server'} yeni npm start edende lite-server start olsun");
console.log("npm install --save-dev lite-server => package-lock.json fileni yaradir");
console.log("npm install => etdikde ise 'package.json ' faylina baxaraq node_modules su install olur");
console.log("npm init => edirem bir chox ts file ichin");
console.log("tsc => yazsam bir chox ts fileni js filesine compile edir (chevirir) ");
console.log("tsc --watch ve ya tsc -w => her defe tsc edib ts filendaki kodlari derleyib" +
    +"edim js yazlimina chevirmiyek diye edirik Starting compilation in watch mode");
console.log("ts filesinde saq click edib console ye verilenleri visualin terminalinda de output qisminde gore bilersiz");
function dataType(data) {
    console.log(data);
}
dataType("noImplicitAny: false => Compilerde Error Olmasin ");
const button1 = document.querySelector("#button1");
button1.addEventListener("click", () => {
    console.log(" Click me ");
});
const button2 = document.querySelector("#button2");
if (button2) {
    button2.addEventListener("click", () => {
        console.log(" Click if");
    });
}
const button3 = document.querySelector("#button3");
let buttonFn = (ms) => {
    console.log(" Click me ", ms);
};
button3.addEventListener("click", buttonFn.bind(this, "strictBindCallApply false  olarsa this yazmasaqda olar"));
let rs = buttonFn("noUnusedLocals true olarsa globallarda ise deyisenin altindan xett çekilmir");
function noImplicitReturns(n1, n2) {
    let result = n1 + n2;
    if (n1 + n2 >= 0) {
        return n1 + n2;
    }
    return;
}
