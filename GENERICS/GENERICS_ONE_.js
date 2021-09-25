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
