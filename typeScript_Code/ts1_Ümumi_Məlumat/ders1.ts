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
function display(a: string , b?: number): void ;

function display(a: string | number, b?: any): void {
    console.log("a is ", a)
    if(b != undefined){ console.log("a is ", b) }
}

display(34);
display(34,21);
display("34");

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
//error Operator '+' cannot be applied to types 'string | number' and 'string | number'
function combine (n1: number | string, n2: number | string){
    let result: number | string ;
    if(n1 === "number" && n2 === "number"){ result = n1 + n2; }
    else { result = n1 as string + n2 as string; }
    // else { result = <string>n1 + <string>n2  }
    //else { result = n1.toString() + n2.toString() }
    return  result

}

console.log( "combine result is : ", combine(1,2) );
console.log( "combine result is : ", combine("Elmar ","Amanov") );

//------------------------------Literal Type  --------------------//

function literalRes (
    n1: number | string,
    n2: number | string,
    literalTypeData: "num" | "str"){
    let result: number | string ;
    if(typeof n1 === "number" && typeof n2 === "number" 
           || literalTypeData === "num"){ 
        result = +n1 + +n2;
    }
    else { result = n1 as string + n2 as string; }
    // else { result = <string>n1 + <string>n2  }
    //else { result = n1.toString() + n2.toString() }
    return  result

}

console.log( "literalRes result is : ", literalRes(1,2,'num') );
console.log( "literalRes result is : ", literalRes("1","2",'num') );
console.log( "literalRes result is : ", literalRes("Elmar ","Amanov","str") );

//-------------------- type -------------------------------------------//

type NUM_STR =  number | string;
type literalResType =  "num" | "str";

function typeResalt (
    n1: NUM_STR,
    n2: NUM_STR,
    literalTypeData: literalResType){
    let result: number | string ;
    if(typeof n1 === "number" && typeof n2 === "number" 
           || literalTypeData === "num"){ 
        result = +n1 + +n2;
    }
    else { result = n1 as string + n2 as string; }
    // else { result = <string>n1 + <string>n2  }
    //else { result = n1.toString() + n2.toString() }
    return  result

}

console.log( "typeResalt result is : ", typeResalt(1,2,'num') );
console.log( "typeResalt result is : ", typeResalt("1","2",'num') );
console.log( "typeResalt result is : ", typeResalt("Elmar ","Amanov","str") );
//---------------------------indexable interface --------------------//
//interface and array => Indexable Types

interface INumberIndexNumber {
    [index: number]: string;
}

let arrNumberIndex: INumberIndexNumber = ["Bob", "Fred"];

let obj: INumberIndexNumber = {
    1: "elmar",
    2: " amanov"
}

console.log("myArray: " + arrNumberIndex);
console.log("myArray[0]: " + arrNumberIndex[0]);
console.log("myArray[1]: " + arrNumberIndex[1]);

let myIndexArr: string = arrNumberIndex[0];

interface IStringIndexObj {
    [index: string]: string;
}

//---------------------------indexable interface --------------------//
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

//---------------------------interface inheritance (extends miras alma) -----------//

interface Person {
    name: string;
}

interface Musician extends Person {
    age: number;
}

let drummer: Musician = <Musician>{
    age: 25,
    name: "Elmar",
}

let naq = <Musician>{
    age: 25,
    name: "Elmar",
}

let gitar = <Musician>{}

gitar.age = 25;
gitar.name = " Eldar"

/*/-------------------multi inheritance => extends IInheritance1,IInheritance2--------/*/

interface IChild1 {
    v1: number;
}

interface IChild2 {
    v2: number;
}

interface IChild extends IChild1 , IChild2 {};

let nm: IChild = {v1: 1, v2: 2};
console.log("v1: " + nm.v1 + " v2: " + nm.v2)
// typecasting numberDataName: number = <number><any>stringDataName;
let str: string = '12';
let num: number = <number><any>str; 
let b = 2 >= num ? "2 -i 12 den boyukdur" : "12 - i 2 den boyukdur";
console.log("typeof num is " , typeof num,)

//----------------------Class -----------------------------//
/*/ 
    static açar sözi ile yaranan dəyişkən classin özine mexsusdu 
    classdan yaranan objecte ve ya this anahtar kelmesinə aidiyatı
    yoxdur 
    ex class A { static a = 12 }
       a1 = new A();
       a1.a = undefined => çünki bizneü A ile object yaratdiqda 
       data A nin constructoruna aid olur  ve biz burdan A classina
       uyqun datalari ötiririk 
       this isə A classindan yaranan objecti sadece this = {}
/*/
let a: number = 55;
class classData {
    x: number = 12;
    static s: number= 123;
    storeData = function(): number {  return this.x; }
    sumnumber():number { return this.x + classData.s }
    diffrence = (): number=> { return this.x - classData.s}

}

let class1 = new classData();
console.log("static s: " + classData.s)

// --------------------example prototype ---------------------------//

function Employee(id: number ,name: string ){
    this.id = id;
    this.name = name;
}

Employee.prototype.sname = "Amanov";
let employee1 = new Employee(1,"Elmar");

console.log("info of employee1 => ", employee1.id + " : ", employee1.name , employee1.sname)

//-------------------- enum custom type ----------------------------//

enum Role {ADMIN = 100 , READ_ONLY = 300, AUTHOR = "AUTHOR"}

const person = {
    name: "Admin",
    password: "password",
    role: Role.ADMIN
}

if(person.role === Role.ADMIN) { console.log("i am a admin") }

// ---------------------type Function  ------------------------//
function combineFn(n1: number,n2: number): number { return n1 + n2; }

let combineData: Function;
combineData = combineFn;

console.log("combineData is ", combineData(5,5) )

// -------------------- arrow function type --------------------//

let combineValue: (a: number,b: number) => number;

combineValue = combineFn;

console.log("combineValue is ", combineValue(5,5) )
