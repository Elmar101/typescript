/*/ cmd
    tsc ders1.ts => ts faylini js faylina çevrir
    node ders1.js  => js faylini node muhitinde çalişdirir
    tsc ders1.ts -w => iki ishlemi birden edir day herdefe
    tsc ders1.ts sonrada node ders1.js yazmiriq
    *=> ders1.html faylini cmd de -> tsc ders1.ts  yazib
        ders1.js chevirdiyim ucun 
        ders1.html <script src="ders1.js>" yazib brauzerde
        consolda ishlemlerin sonucunu goruruk
/*/

function paramsNumberArray(...nums:number[]):void{
    console.log( ...nums )
}

paramsNumberArray(1,2,3,4,5)
/*/ 
    ...params js deki arguments ozeliyidi => ...params: number -> 
    js de arguments ve for ile  arguments arrayini gezib params arrayine yiqmaqdi 

    ts => function datas(...nums:number[]):void{ console.log( ...nums )} datas(1,2,3,4,5)
                     || 
    js => function datas(){ 
            let nums =[] ; 
            for(i=0;i<arguments.length;i++){
                nums[i] = arguments[i]
            }
             console.log( nums )
           } 
          datas(1,2,3,4,5)
/*/
function sumParamsArray(...params:number[]):void{
    let i: number;
    let sum: number = 0;

    for ( i = 0; i < params.length; i++){
        sum = sum + params[i];
    }

    console.log("sum is : ", sum)
}

sumParamsArray(1,2,3,4,5)

// function default deyeri ts => b: number = 1 js de ise if (b === void 0) { b = 1; } bu sertle saqlanir
function defaultValue(a: number, b: number = 1){
    console.log("default : ", a*b)
}
defaultValue(2)
defaultValue(2,4);

function display(a: number): void ;
function display(a: number, b: number): void ;

function display(a: any, b?: any): void {
    console.log("a is ", a)
    console.log("a is ", b)
}

display(34);
display(34,21);

//array distructuring tuple
let arr : Array<number> = [35, 21];
let [x, y] : Array<number> = arr;
console.log("x is ", x +  " , y is ", y) ;
// array travelsal
let dataArr: number[] = [0,1,2,3];
let j: any;
for(j in dataArr) {
    console.log(j+"- ci: "+dataArr[j]);
}
//unions type
let unionData: number | number[] ;
unionData = 78;
console.log("unionData number is ", unionData)
unionData = [1,2,3,4,5]
console.log("unionData number array is ", unionData)

// interface arayuz 
interface IPerson {
    name: string;
    lName: string;
    sayHi:() => string; //{ return string data } sayHi:( () => string)
    sayHello():string; // { return string data}
    changeName:()=> void;// bu sadece datani deyisecek 
}

let Person: IPerson = {
    name: "elmar",
    lName: "amanov",
    sayHello: () => {return "hello"},
    sayHi: (): string => { return " hi "} ,
    //sayHi:function(): string { return " hello "} ,
    //sayHi:( (): string => { return " hi "} )
    changeName: () => { Person.name = "eldar"}
}
console.log("person info : ", Person.name, Person.lName, 
                              Person.sayHi(),Person.changeName())

// function uniontype

interface IUnionType{
    progName: string;
    commentLine: string | string[] | ( ()=> string );
}

let UnionData: IUnionType = {
    progName: "typeScript",
    commentLine: (): string=> { return "ts is good" }
}
let fn: any=  UnionData.commentLine;
//UnionData.commentLine() ishlemez commentLine error union olduqu ucun
//cunki commentLine string | string[] | ( ()=> string )
//commentLine union datadi 
//union olmasaydi UnionData.commentLine() yazmaq olardi 
console.log( fn() )

//interface and array => Indexable Types

interface INumberIndexArray {
    [index: number]: string;
}

let arrNumberIndex: INumberIndexArray = ["Bob", "Fred"];

console.log("myArray: " + arrNumberIndex);
console.log("myArray[0]: " + arrNumberIndex[0]);
console.log("myArray[1]: " + arrNumberIndex[1]);

let myIndexArr: string = arrNumberIndex[0];

interface IStringIndexObj {
    [index: string]: string;
}
/*/
interface indexableType {
    [index: string]: string;
}
=> [index: string]: string; bele indexable interfacesinin 
   arrayi olmur çünki arreyin index number olur yeni 
   [index: number]: string ; bundan array yaratmaq olar 
   hemçinin objektde 
   [index: string]: string; bundan ancaq objekt yaratmaq 
   olar {name: "Elmar",.......}
/*/

let StringIndexObj: IStringIndexObj = {
    name: "elmar",
    ["sname"]: "Amanov",
};

console.log("StringIndexObj: " + StringIndexObj);
console.log("StringIndexObj.name: " + StringIndexObj.name);
console.log("StringIndexObj.sname: " + StringIndexObj.sname);




/* interface Animal {
    name: string;
}
   
interface Dog extends Animal {
    breed: string;
}
   
// Error: indexing with a numeric string might 
//get you a completely separate type of Animal!

interface NotOkay {
    [x: number]: Animal;
//'number' index type 'Animal' is not assignable 
//to 'string' index type 'Dog'.
    [x: string]: Dog;
} */






 interface personIndexableTypesList {
    [name: string]: string;
}

let arrList: personIndexableTypesList = {
    ["name"]: "Elmar",
    ["sname"]: "Amanov",
    info: " Baku is nice city"
} 

console.log( "arrList", arrList )
console.log( "arrList['name']: ", arrList['name'] )
console.log( "arrList['name']: ", arrList.name )
