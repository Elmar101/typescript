const userName:string = "Elmar";

/*/
                            {Cannot assign to 'userName' because it is a constant.
     userName = "Ruslan"; =>
                            {Sabit olduğu üçün 'userName' -ə yeni qiymet atana bilmez!
/*/

function text1():string {
    var str = "Hello Ts";
    return str;
}

//console.log(str) => Cannot find name 'str'. - 'Str' adı tapılmadı. yeni str adinda deyisen yox

var text; // yaza bilersiz
function text2() {
    text = "Hello Ts"; 
}

console.log(text);//undefined

let textStr; // yaza bilersiz
function text3() {
    textStr = "Hello Ts";
}

console.log(textStr);

let age: number = 40;
if(age >= 18){
    var txt = "yashiniz chatir qaqa !"
}
console.log(txt);//"yashiniz chatir qaqa !";

