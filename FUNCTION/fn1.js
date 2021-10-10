console.log("****************************|Function Type Expressions|*********************************");
function greeter(fn) {
    fn("Hello, World");
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole); //Hello, World
function greeterT(fn) {
    fn("Hi, World");
}
greeterT(printToConsole);
function doSomething(fn) {
    console.log(fn.description + " returned " + fn(6));
}
/* let objDescription: DescribableFunction = {
    description: "I am callBack",
     (7)=> true
}  */
//doSomething();
//--------------------------------------------------------------------------------------------------------------------
console.log("Constructor oluşdurmaq !!! new anahtar keslmesinden istifade etmeliyem");
var Greet = /** @class */ (function () {
    function Greet(a, b) {
    }
    return Greet;
}());
var grt = new Greet(7, true); //Greet Classinin Constructorunu Tetikleyir 
function fnObj(ctor) {
    return new ctor("Hello, world!");
}
//-----------------------------------------------------------------------------------------------------
console.log("*******************************|Generic Functions|**********************************");
function firstElement(arr) {
    return arr;
}
console.log("number of firstElement value is: ", firstElement([1, 2, 3, 4, 5]));
//-----------------------------------------------------------------------------------------------------
function mapFn(arr, func) {
    return arr.map(func); // arr.map(item => item )
}
var parsed = mapFn(["1", "2", "3"], function (n) { return n; });
console.log("parsed: ", parsed); //parsed:  [ '1', '2', '3' ]
function mapFnInt(arr, func) {
    return arr.map(func); // arr.map(item => item )
}
var mp = mapFn(["1", "2", "3"], function (n) { return parseInt(n); });
console.log("mp:", mp); //mp: [ 1, 2, 3 ]
//-----------------------------------------------------------------------------------------------------
// ... => yerde qalan arreydi !
function multipli(n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    return m.map(function (x) { return n * x; });
}
// 'a' gets value [10, 20, 30, 40]
var mk = multipli(10, 1, 2, 3, 4);
console.log("mk: ", mk); //[10, 20, 30, 40]
//-----------------------------------------------------------------------------------------------------
console.log("**************************|Destructuring assignment|********************************");
function sm(_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    return a + b + c;
}
var cem = sm({ a: 10, b: 3, c: 9 });
console.log("cem is  ", cem);
/* Objectin top açıklaması, Destructuring sonra gelir=>{ a, b, c }: { a: number; b: number; c: number }
 çünki { a: number; b: number; c: number } => Bele Yazlim Objesi Yoxdur Ay Qaqa interface yazmirsanee
 Object Destructuring di => {a}:{a: string} Unutma !!!
 /*/
function sum1(_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    console.log(a + b + c);
}
function sm1(_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    console.log(a + b + c);
}
//----------------------------------------------------------------------------------------------------------------
console.log("*********************************|readonly|************************************");
function visitForBirthday(home) {
    console.log("Happy birthday " + home.resident.name + "!");
    home.resident.age++;
}
function evict(home) {
    //home.resident.name = "center park" => ede bilerem
    return home;
}
;
var ev = { resident: { name: "Kristal", age: 10 } };
console.log("evcit ad: ", evict(ev));
var writablePerson = {
    name: "Person McPersonface",
    age: 42
};
// works
var readonlyPerson = writablePerson;
console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // prints '43'
// readonly deyisen yarananda qiymetini almalidi !!! classlarda constructordada vere bilersen
//---------------------------------------------------------------------------------------------------------
