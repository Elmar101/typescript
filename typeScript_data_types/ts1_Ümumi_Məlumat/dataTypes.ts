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

//| let fn = function(): number | ve ya let fn = () => number ikiside geriye reqem donderecek fn funuksiasi

//| let strFn = function(): string
//| let strFn = () => string

//| let numFn = function(): number 
//| let numFn = () => number
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
/*/
    tuple type arrayin indexlerinin hansi tipde olmasi [number,number,string]
    ex => let arr:[number,number,string] = [1,2,"Hello"]
/*/
// interface arayuz 
interface IPerson {
    name: string;
    lName: string;
    sayHi: () => string; //{ return string data } sayHi:( () => string)
    sayHello():string; // { return string data}
    changeName:()=> void;// bu sadece datani deyisecek 
    //fn:function():string interfacede govde istifade edilmir tesuflerki bu tipde propertiye type vere bilmirik
}

let Person: IPerson = {
    name: "elmar",
    lName: "amanov",
    sayHello: () => {return "hello"},
    sayHi: (): string => { return " hi "} ,
    /*/Objectlerde yalniz
        ---------------------------------------------
        sayHi:function(): string { return " hello "} ,
        sayHi:( (): string => { return " hi "} )
        sayHi:(): string => { return " hi "} 
        sayHi (): string  { return " hi "} 
    /*/
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
//[index: string]: number | string; - Objectin içindeki propertilerin tipini Melum edir hemde interfacedeki
/*/ 
    [ Objectin içndeki properitilerin valuelerinin tiplerini melum edir ]: bura interfacedeki properitilerin 
     tipini melum edir
/*/
//[index: string] => Objectdeki properitiler string tipde olacaq hamisi
//[]: string => interfaceye diger tipler elave edecemse string sekilinde olacaqlar
//indexable []: T -> isdeye baqlidi objecte properiti teyin et deyeri =>[burdaki tipde olsun qaqa!!!] 
// readonly indexable tipinde olan datanin deyisilmez olduqunu deyerini heç yerde deyişə bilmərik
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
/*/
interface NumberOrStringDictionary {
    [index: string]: number 
    length: number; // ok, length is a number
    name: string; // error
}
/*/
interface NumberOrStringDictionary {
    [index: string]: number | string; // Objectin içindeki propertilerin tipini Melum edir  hemde interfacedeki
    length: number; // ok, length is a number
    name: string; // ok, name is a string
}

let nmArr: NumberOrStringDictionary = {
    length: 7,
    name: "Elmar",
    //[index: string]: number | string; => Bu diger propertiler kech deyeri string yada number olsun!!!
    l: 8,
    sname: "Amanov"
}

interface NumberOrStringDictionary1 {
    [index: number]: number | string; //index: number-> Objectin içindeki propertilerin tipini Melum edir
    // [Objectin içndeki properitilerin tiplerini melum edir]: bura interfacedeki properitilerin tipini melum edir
    length: number; // ok, length is a number - []: number | string [] -> bundan sonrasina baxir
    name: string; // ok, name is a string
}

let nmArray: NumberOrStringDictionary = {
    length: 7,
    name: "Elmar",
    //[index: string]: number | string; => Bu diger propertiler kech deyeri string yada number olsun!!!
    0: 8,
    1: "Amanov"
}

interface NumberOrStringDictionary2 {
    [index: number | string]: number | string; 
    id: number; 
    name: string; 
}

//let dictonaryArr: NumberOrStringDictionary2 = ["a","b","c"]// error id ve name var
let dictonaryObj: NumberOrStringDictionary2= {id: 1 , name: "Elmar", sname: "Amanov", 1: "Web Teacher" }

// readonly indexable tipinde olan datanin deyisilmez olduqunu deyerini heç yerde deyişə bilmərik
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let readonlyStringArr:ReadonlyStringArray = ["a","b","c"]
    //readonlyStringArr[0] = "d" - error
   // readonlyStringArr.push("d") - error ve sair

interface ReadonlyStringObject {
    readonly [index: number]: string;
    x: string
}
let readonlyStringObj: ReadonlyStringObject = {
    x: "A",
    1: "B",
    2: "C"
}
//readonlyStringObj.1 = "D" => error
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


function pad(s: string, n: number, direction: "left" | "right"): string{return s + n + direction}
pad("hi", 10, "left");

let s1 = "right"; //s1: string s2 de çözimi etmişik əzizim qaqaşlar
/*/ 
    s1 = "right"; bele yazlimda ts deyere baxib deyişənə tip verir !!! 
    deyer "ne olursa olsun stringdi çünki dirnaq içindədi"
    pad("hi", 10, s1); => // error: 'string' is not assignable to '"left" | "right"' => s1: string
/*/  
//BUNU HELL ETMEKDEN OTRI 
let s2: "left" | "right" = "right";
pad("hi", 10, s2);

function map<T, U>(f: (t: T) => U, ts: T): U[]{
    return [];
}

let sns = map((n) => n.toString() , [1, 2, 3]);

console.log("sns-", sns)

let z = [1, 2, 3] as const;
//z.push(102); // error
//z[0] = 101; // error

let k: ReadonlyArray<number> = [1, 2, 3];
let p: readonly number[] = [1, 2, 3];
//k.push(102); // error
//p[0] = 101; // error

function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
   
  greet("Maddison", new Date());//Hello Maddison, today is Thu Oct 07 2021!
  //tsc --target es2015 hello.ts eger hello.ts faylin es2015 she gore derelemesini isdeyirsizse

  function printName(obj: { first: string; last?: string }) {
    //console.log(obj.last.toUpperCase()); => error
 
    if (obj.last !== undefined) {
     
      console.log(obj.last.toUpperCase());
    }
   
    // A safe alternative using modern JavaScript syntax:
    console.log(obj.last?.toUpperCase());//undefined
}
printName( { first: "elmar"})

//Bir arayüzü genişletme

interface Animals {
  name: string
}

interface Bears extends Animals {
  honey: boolean
}

let bears:Bears = {name: "IBear", honey: true };
console.log("bears: " + JSON.stringify(bears))       
//Bir türü kesişimler aracılığıyla genişletme

type Animalls = {
  name: string
}

type Bear = Animalls & { 
  honey: boolean 
}

let bear: Bear = {name: " TBear", honey: true}
console.log("bear: " + JSON.stringify(bear))

//Type Assertions - Tür İddiaları => typecasting
/* const myCanvas1 = document.getElementById("main_canvas")! as HTMLCanvasElement;
const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas")!; */

//deyismez Tür h = "ziya" => error Type '"hell"' is not assignable to type '"hello"'
let h: "hello" = "hello";
    h="hello"


const req1 = { url: "https://example.com", method: "GET" }; //method is string type 
handleRequest(req1.url, req1.method);

const req2 = { url: "https://example.com", method: "GET" as "GET"} // method is "GET" type
handleRequest(req2.url, req2.method);

const req3 = { url: "https://example.com", method: "GET"} as const // method is "GET" type
handleRequest(req2.url, req2.method); 
// Bu zaman url: "https://example.com" bu tip  method: "GET" da bu tipdedi 

function handleRequest(url: string, method: string) {
    console.log(method , " - " , url)
}
// as const => deyiseni valuesi tipde edir 

//null undefined     undefined   null
function doSomethingone(x: string | null) {
    if (x === null) {
      // do nothing
    } else {
      console.log("Hello, " + x.toUpperCase());
    }
}

/*/ 
    Null Olmayan Onaylama Operatörü (Sonek!) - Non-null Assertion Operator (Postfix!)
    ! Herhangi bir ifadeden sonra yazmak ,
     etkin bir şekilde değerin null bor undefined: olmadığına dair bir tür iddiasıdır :
/*/

function liveDangerously(x?: number | null) {
    // No error
    console.log(x!.toFixed());
}


console.log("*****************************|if -in False qaytardiqi datalar|************************");
// if -in False qaytardiqi datalar

console.log( "BOŞ STRİNG - " ,  Boolean("") );// false
console.log( "SİFR STRİNG - " , Boolean(0) );// false
console.log( "NaN - " ,         Boolean(NaN) );// false
console.log( "Null - " ,        Boolean(null) );// false
console.log( "UNDEFİNED - " ,   Boolean(undefined) );// false
console.log( "ARRAY - " ,       Boolean([].length )); // false   //ARRAYIN YOXLANMASI
const objCheck = {};
console.log( "OBJECT - " ,      Boolean(Object.entries(objCheck).length )) ;

function keysOf<T extends object>(obj: T): Array<keyof T> {
    return Array.from(Object.keys(obj)) as any;
}
  
const objCheck1 = { a: 1, b: 2 };
keysOf(objCheck1).forEach((key) => console.log(key ,"-",objCheck1[key])); // type of key is "a" | "b"


console.log("*****************************|in operatöru ile Objecti yoxlamaq|************************");
//in operatöru ile Objecti yoxlamaq => property adi varmi => if(propertyAd in ObjectAd) vars trur yoxsa false

type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
}
 
  return animal.fly();
}
let baliq: Fish = { swim(){ console.log('i am baliq')} }// Bele yazlişdan daha çox istifadə edilir !!!
move(baliq);
let qush: Bird = { fly:()=> { console.log('i am qush')} }
move(qush);



console.log("**************************|instanceof ile yoxlamaq|*************************************");
//instanceof ile yoxlamaq 

function logValue(x: Date | string) {
  if (x instanceof Date)  console.log("x Date tipindedi ", x.toUTCString());    // (parameter) x: Date 
  else  console.log("x string tipindedi ", x.toUpperCase()); //(parameter) x: string 
}

logValue("Hello str");
logValue( new Date() )


console.log("**********************************|Assignments - Atamalar|**************************************");
//Assignments - Atamalar => TypeScript, atamanın sağ tarafına bakar ve sol tarafı uygun şekilde bize qaytarar
//random olaraq  Math.random() qiymet alir ve hemin qiymete gore  r in tipi melum olur r ya 10 yada hello world olur ,
let r: string | number = Math.random() < 0.5 ? 10 : "hello world!";
 
console.log("r = ", r , " r in tipi ", typeof r); 
//r =  10  r in tipi  number OR r =  hello world!  r in tipi  string


console.log("*************************|Tip predikatlarından istifadə|********************************");
//=> Using type predicates - Tip predikatlarından istifadə
 // pet is Fish =>return boolean qaytarmasidi yeni funuksia tru yada false qaytaracaq
 //parameterName is Type => pet is Fish = boolean 
type Fishs = { swim: () => void };
type Birds = { fly: () => void };

function isFish(pet: Fishs | Birds): pet is Fish /*/boolean/*/{
    return (pet as Fish).swim !== undefined;
}

let baliqlar: Fishs = { 
    swim(){ console.log('i am baliq')} 
}
let isfish = isFish(baliqlar);
console.log("baliqdirmi:", isfish);//true

let qushlar: Bird = { fly:()=> { console.log('i am qush')} }
    isfish = isFish(qushlar);
    console.log("baliqdirmi:", isfish);//false

 
    
console.log("*********************************|Discriminated unions|************************************")
interface Shapes {
    kind: "circle" | "square";
    radius?: number;
    sideLength?: number;
}

function getArea1(shape: Shapes) {
    return Math.PI * shape.radius! ** 2;
}

// 2 ci yol discrimate unions
interface Circle {
    kind: "circle";
    radius: number;
  }
   
  interface Square {
    kind: "square";
    sideLength: number;
  }
   
  type Shape = Circle | Square;

  function getArea2(shape: Shape) {
    switch (shape.kind) {
        case "circle" :  return Math.PI * shape.radius ** 2 ; break;
        case "square" :  return Math.PI * shape.sideLength **2 ; break
    }
  }

// 3 ci yol => never 
/*/ 
  Exhaustiveness checking - Kapsamlılık kontrolü (never)
  "never" Türü, her tür tayin edilebilir; ancak, hiçbir tür atanamaz never( never kendisi dışında ). 
  Bu, daraltmayı kullanabileceğiniz ve never bir switch ifadesinde kapsamlı kontrol yapmak için 
  açmaya güvenebileceğiniz anlamına gelir .
  Örneğin, bir ekleme default bizim için getArea şekil atamak çalışır 
/*/
interface Circle1 {
    kind: "circle";
    radius: number;
  }
   
  interface Square1 {
    kind: "square";
    sideLength: number;
  }

  type Shape1 = Circle1 | Square1;

  function getAreaNever(shape: Shape1) {
    switch (shape.kind) {
        case "circle" :  return Math.PI * shape.radius ** 2 ; break;
        case "square" :  return Math.PI * shape.sideLength **2 ; break
        default: const _exhaustiveCheck: never = shape; return _exhaustiveCheck;
    }
  }

//-----------------------------------------------------------------------------------------------------
console.log("*****************************|... => yerde qalan arreydi !|***************************")
 // ... => yerde qalan arreydi !
 function multiply(n: number, ...m: number[]) {
    return m.map((x) => n * x);
  }
  // 'a' gets value [10, 20, 30, 40]
  const mkk = multiply(10, 1, 2, 3, 4);
  console.log("mk: ", mkk); //[10, 20, 30, 40]

  //-----------------------------------------------------------------------------------------------------
  console.log("**************************|Destructuring assignment|********************************");
  function sum({ a, b, c }) {
    return a + b + c;
  }
  let cma = sum({ a: 10, b: 3, c: 9 });
  console.log("cem is  ", cma)// cem is 22

 /* Objectin top açıklaması, Destructuring sonra gelir=>{ a, b, c }: { a: number; b: number; c: number }
  çünki { a: number; b: number; c: number } => Bele Yazlim Objesi Yoxdur Ay Qaqa interface yazmirsanee
  Object Destructuring di => {a}:{a: string} Unutma !!!
  /*/

  function suma(  { a, b, c }: { a: number; b: number;c: number }  ) {
    console.log(a + b + c);
  }

  //=> Asaqidaki kimide yazmaq olar 

  type ABC = { a: number; b: number; c: number };
  function sumb({ a, b, c }: ABC) { console.log(a + b + c) }
  //----------------------------------------------------------------------------------------------------
  console.log("*************************************|TYPE GENERICS|***************************************");

  type genericsDataType<T> = T ;
  let gdt: genericsDataType<string> = "Elmar";

  type OrNull<Type> = Type | null;
    
  type OneOrMany<Type> = Type | Type[];
  
  type OneOrManyOrNull1<Type> = OrNull<OneOrMany<Type>>;
          
  type OneOrManyOrNull2<Type> = OneOrMany<Type> | null
  
  type OneOrManyOrNullStrings1 = OneOrManyOrNull1<string>;
              
  type OneOrManyOrNullStrings2 = OneOrMany<string> | null

  // Array<Type>olan Type[] eyni olduqu kimi ReadonlyArray<Type> ile readonly Type[] eynidi





  console.log("****************************************|Tuple Types|****************************************");
  //Tuple Types - Bu tip Arreyin indexlerinin Hansi Tipde olduqunu Teyin Etmekden ötridi - [number,string,boolean];
  type StringNumberPair = [string, number];
  function doSomethingPair(pair: [string, number]):[string, number] {
    return pair
  }
   
  let pr = doSomethingPair(["hello", 42]);
  console.log("pair: " , pr);

  function doSomethingPair1(pair: [string, number]){
    const [a,b] = pair;
    return a + b
  }
   
  let pr1 = doSomethingPair1(["hello", 42]);
  console.log("pair: " , pr1);

  interface IStringNumberPair {
    length: 2;
    0: string;
    1: number;
    slice(start?: number, end?: number): Array<string | number>;
  }

  type Either2dOr3d = [number, number, number?];

  function setCoordinate(coord: Either2dOr3d) {
    const [x, y, l] = coord;
   
    return console.log(`array ${coord.length} lenght`);
                                                    
  }

  setCoordinate([1,2]);

  type StringNumberBooleans = [string, number, ...boolean[]];
  type StringBooleansNumber = [string, ...boolean[], number];
  type BooleansStringNumber = [...boolean[], string, number];

  /*/
    StringNumberBooleansilk iki elemanı sırasıyla stringve numberolan, ancak booleanaşağıdaki 
    herhangi bir sayıda s olabilen bir demeti tanımlar .

    StringBooleansNumberilk öğesi stringve ardından herhangi bir sayıda booleans olan 
    ve a ile biten bir demeti tanımlar number.

    BooleansStringNumberbaşlangıç ​​öğeleri herhangi bir sayıda booleans olan ve 
    stringardından a ile biten bir demeti tanımlar number.
  /*/

  const snb1: StringNumberBooleans = ["hello", 1];
  const snb2: StringNumberBooleans = ["beautiful", 2, true];
  const snb3: StringNumberBooleans = ["world", 3, true, false, true, false, true];

  const sbn1: StringBooleansNumber = ["hello", 1];
  const sbn2: StringBooleansNumber = ["beautiful", true, 2];
  const sbn3: StringBooleansNumber = ["world", true, false, true, false, true, 3];

  const bsn1: BooleansStringNumber = ["hello", 1];
  const bsn2: BooleansStringNumber = [true, "beautiful", 2];
  const bsn3: BooleansStringNumber = [true, false, true, false, true, "world",  3];


  function readButtonInput(...args: [string, number, ...boolean[]]) {
    const [name, version, ...input] = args;
    return console.log("name + version + input = ",name +","+ version +","+ input);
  }

  readButtonInput("hello", 1, true, true);
  //readonly tuple tip     pair: readonly[number, string]

  function doSomethingReadOnly(pair: readonly [string, number]) {
    //pair[0] = "hello!"; error !!!
    return console.log("pair is ", pair);
  }
  doSomethingReadOnly(["hello",1]);

  let point = [3, 4] as const;//let point = [3, 4] as const; === let point: readonly [3, 4] Eynidi !!!!
 
  function distanceFromOrigin([x, y]: [number, number]) {
    return Math.sqrt(x ** 2 + y ** 2);
  }
 
  //distanceFromOrigin(point); - ERROR ÇÜNKİ DƏYİŞƏNİN VALUESİNİ as const TİPDƏ EDƏNDƏ DƏYİŞƏN -READONLY- OLUR !!!