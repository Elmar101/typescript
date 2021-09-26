"use strict";
console.log("*****************************| GENERICS TYPE (Ümumi Tip) LESSONS |**********************************");
//let data = []; => data tip olur any[];
/*/
    let data: Array = []; => Array tipde errorla qarsilasiriq
        Generic type 'Array<növ>' requires 1 type  - Ümumi tip 'Array <növ>' 1 növ tələb edir
        interface Array<növ>

        let data: Array<string> = [] => let data: string[] = []; - data arreyi ancaq string növde melumatlar saxliyacaq

        let data: Array<string | number> = [1, "a", 3]; => let data: (string | number)[] = [1, "a", 3];

        *=> arrayi anion tipde etmek elbetde bir tipin mix növlərdə etmək üçün bizim köməyimizə mörtərizə gəlir
            (string | number)[]
/*/
let data = [1, "a", 3];
let dataMixStrNum = [1, "a", 3];
/*/
    let promise: Promise<string> = new Promise((resolve, reject)=>{

        setTimeout(()=>{ resolve("TypeScripti Bizim ile Öyrənin")},3000)

    }); => Bu zaman promise bize string Datasi qaytarir promise: string

    promise.then(d => d.splice(''); ) => then ile biz gelen datani tuturuq  yeni
    resolve("TypeScripti Bizim ile Öyrənin") - d = "TypeScripti Bizim ile Öyrənin"
    erroru ise catch ile tuturuq reject - den gelen parametri consola vere bilerik
    d = "TypeScripti Bizim ile Öyrənin" resolvda parametr olaraq ötrilən data string tipdedi
    və bizdə stringin metodlarini istifadə edə bilirik

    ------------------------------------------------------------------------------------------------------------------

    let promise: Promise<number> = new Promise((resolve, reject)=>{

        setTimeout(()=>{resolve(10.978)},3000)

    });

    promise.then(d => d.toFixed(); )

/*/
// Ex Promise<string> resolve("string tipde datalar ötirəcək thene") then(str:string => execute code );
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("TypeScripti");
    }, 3000);
});
promise.then(data => console.log(data.split(''))); //['T', 'y', 'p', 'e', 'S', 'c', 'r', 'i', 'p', 't', 'i']
// Ex Promise<number> resolve("number tipde datalar ötirəcək thene") then(num:number => execute code );
let promiseNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10.978);
    }, 3000);
});
promiseNumber.then(data => console.log(data.toFixed())); //11
/*****************************| CREAT GENERICS FUNCTION |***************************************/
console.log("*****************************| CREAT GENERICS FUNCTION  |**********************************");
function merge(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB); // Object.assign(objA, objB);
}
//user_One
let user_One = merge({ name: "Elmar", age: 26 }, { hoppies: ["sport"] });
console.log(`user_One Name is : ${user_One.name} , age is : ${user_One.age}, hoppies is : ${user_One.hoppies} `);
// user_Two 
let user_Two = merge({ name: "Eldar", age: 25 }, { hoppies: ["sport"] });
console.log(`user_Two Name is : ${user_Two.name} , age is : ${user_Two.age}, hoppies is : ${user_Two.hoppies} `);
//user_Tree
let user_Tree = merge({ name: "Rafik", age: 25 }, { info: 'I am a Enjineer' });
console.log(`user_Tree Name is : ${user_Tree.name} , age is : ${user_Tree.age}, information is : ${user_Tree.info} `);
//EXAMPLE TWO 
function strNumGeneric(id, name) {
    return { id: id, name: name };
}
let X = strNumGeneric(6, "MAX");
console.log("X is ", X);
//WORKING WITH CONSTRAINT- məhdudlaşdırmaq < T extends Object, U extends Object > Textends number ve sair
function mergeProble(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB); // Object.assign(objA, objB);
}
let problem = mergeProble({ name: "Elmar" }, 30);
console.log("problem_One is ", problem); // { name: "Elmar" }
// Elbetde cavab yanlisdi {name: "Elmar"} 30 bes hara getdi eger yazlisda sehf varsa code terefde consolda problem
// niede yoxdur Bu problemleri aradan qaldirmaq ichin extends anahtar kelmesini kulanacayiq
function mergeProbleConstraintSolution(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB); // Object.assign(objA, objB);
}
/*/
    let problem_Solution = mergeProbleConstraintSolution( { name: "Elmar" }, 30 )
    Argument of type 'number' is not assignable to parameter of type 'object'.
/*/
// (T & U ) | ( T | U) => Tipletde iki cür mentiqi ifadə var and - & ve , or - | yaxud
let problem_Solution = mergeProbleConstraintSolution({ name: "Elmar" }, { age: 26 });
console.log("problem_One is ", problem_Solution);
function count_And_Describe(element) {
    /*/ Array<string | T>  eyni yazilisdi (string | T)[] ve ya [T , string] /*/
    let text = " Text yoxdur!!!";
    if (element.length > 1) {
        text = "textin lengthsi is " + element.length;
    }
    return [element, text];
}
console.log("count_And_Describe atring data ile ", count_And_Describe("Bes Demisdin Vermiyeciyem ne oldu ???"));
console.log("count_And_Describe Arrey data ile ", count_And_Describe(["Bes Demisdin Vermiyeciyem", "ne oldu ???"]));
console.log("******************************* Promislerde 2 sanie gozleme var ***************************************");
