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
var _a, _b;
//| let fn = function(): number | ve ya let fn = () => number ikiside geriye reqem donderecek fn funuksiasi
//| let strFn = function(): string
//| let strFn = () => string
//| let numFn = function(): number 
//| let numFn = () => number
function paramsNumberArray() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    console.log.apply(console, nums);
}
paramsNumberArray(1, 2, 3, 4, 5);
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
function sumParamsArray() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < params.length; i++) {
        sum = sum + params[i];
    }
    console.log("sum is : ", sum);
}
sumParamsArray(1, 2, 3, 4, 5);
// function default deyeri ts => b: number = 1 js de ise if (b === void 0) { b = 1; } bu sertle saqlanir
function defaultValue(a, b) {
    if (b === void 0) { b = 1; }
    console.log("default : ", a * b);
}
defaultValue(2);
defaultValue(2, 4);
function display(a, b) {
    console.log("a is ", a);
    if (b != undefined) {
        console.log("a is ", b);
    }
}
display(34);
display(34, 21);
display("34");
//array distructuring tuple
var arr = [35, 21];
var x = arr[0], y = arr[1];
console.log("x is ", x + " , y is ", y);
// array travelsal
var dataArr = [0, 1, 2, 3];
var j;
for (j in dataArr) {
    console.log(j + "- ci: " + dataArr[j]);
}
//unions type
var unionData;
unionData = 78;
console.log("unionData number is ", unionData);
unionData = [1, 2, 3, 4, 5];
console.log("unionData number array is ", unionData);
var Person = {
    name: "elmar",
    lName: "amanov",
    sayHello: function () { return "hello"; },
    sayHi: function () { return " hi "; },
    /*/Objectlerde yalniz
        ---------------------------------------------
        sayHi:function(): string { return " hello "} ,
        sayHi:( (): string => { return " hi "} )
        sayHi:(): string => { return " hi "}
        sayHi (): string  { return " hi "}
    /*/
    changeName: function () { Person.name = "eldar"; }
};
console.log("person info : ", Person.name, Person.lName, Person.sayHi(), Person.changeName());
var UnionData = {
    progName: "typeScript",
    commentLine: function () { return "ts is good"; }
};
var fn = UnionData.commentLine;
//UnionData.commentLine() ishlemez commentLine error union olduqu ucun
//cunki commentLine string | string[] | ( ()=> string )
//commentLine union datadi 
//union olmasaydi UnionData.commentLine() yazmaq olardi 
console.log(fn());
//error Operator '+' cannot be applied to types 'string | number' and 'string | number'
function combine(n1, n2) {
    var result;
    if (n1 === "number" && n2 === "number") {
        result = n1 + n2;
    }
    else {
        result = n1 + n2;
    }
    // else { result = <string>n1 + <string>n2  }
    //else { result = n1.toString() + n2.toString() }
    return result;
}
console.log("combine result is : ", combine(1, 2));
console.log("combine result is : ", combine("Elmar ", "Amanov"));
//------------------------------Literal Type  --------------------//
function literalRes(n1, n2, literalTypeData) {
    var result;
    if (typeof n1 === "number" && typeof n2 === "number"
        || literalTypeData === "num") {
        result = +n1 + +n2;
    }
    else {
        result = n1 + n2;
    }
    // else { result = <string>n1 + <string>n2  }
    //else { result = n1.toString() + n2.toString() }
    return result;
}
console.log("literalRes result is : ", literalRes(1, 2, 'num'));
console.log("literalRes result is : ", literalRes("1", "2", 'num'));
console.log("literalRes result is : ", literalRes("Elmar ", "Amanov", "str"));
function typeResalt(n1, n2, literalTypeData) {
    var result;
    if (typeof n1 === "number" && typeof n2 === "number"
        || literalTypeData === "num") {
        result = +n1 + +n2;
    }
    else {
        result = n1 + n2;
    }
    // else { result = <string>n1 + <string>n2  }
    //else { result = n1.toString() + n2.toString() }
    return result;
}
console.log("typeResalt result is : ", typeResalt(1, 2, 'num'));
console.log("typeResalt result is : ", typeResalt("1", "2", 'num'));
console.log("typeResalt result is : ", typeResalt("Elmar ", "Amanov", "str"));
var arrNumberIndex = ["Bob", "Fred"];
var obj = {
    1: "elmar",
    2: " amanov"
};
console.log("myArray: " + arrNumberIndex);
console.log("myArray[0]: " + arrNumberIndex[0]);
console.log("myArray[1]: " + arrNumberIndex[1]);
var myIndexArr = arrNumberIndex[0];
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
var StringIndexObj = (_a = {
        name: "elmar"
    },
    _a["sname"] = "Amanov",
    _a);
console.log("StringIndexObj: " + StringIndexObj);
console.log("StringIndexObj.name: " + StringIndexObj.name);
console.log("StringIndexObj.sname: " + StringIndexObj.sname);
var arrList = (_b = {},
    _b["name"] = "Elmar",
    _b["sname"] = "Amanov",
    _b.info = " Baku is nice city",
    _b);
console.log("arrList", arrList);
console.log("arrList['name']: ", arrList['name']);
console.log("arrList['name']: ", arrList.name);
var drummer = {
    age: 25,
    name: "Elmar"
};
var naq = {
    age: 25,
    name: "Elmar"
};
var gitar = {};
gitar.age = 25;
gitar.name = " Eldar";
;
var nm = { v1: 1, v2: 2 };
console.log("v1: " + nm.v1 + " v2: " + nm.v2);
// typecasting numberDataName: number = <number><any>stringDataName;
var str = '12';
var num = str;
var b = 2 >= num ? "2 -i 12 den boyukdur" : "12 - i 2 den boyukdur";
console.log("typeof num is ", typeof num);
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
var a = 55;
var classData = /** @class */ (function () {
    function classData() {
        var _this = this;
        this.x = 12;
        this.storeData = function () { return this.x; };
        this.diffrence = function () { return _this.x - classData.s; };
    }
    classData.prototype.sumnumber = function () { return this.x + classData.s; };
    classData.s = 123;
    return classData;
}());
var class1 = new classData();
console.log("static s: " + classData.s);
// --------------------example prototype ---------------------------//
function Employee(id, name) {
    this.id = id;
    this.name = name;
}
Employee.prototype.sname = "Amanov";
var employee1 = new Employee(1, "Elmar");
console.log("info of employee1 => ", employee1.id + " : ", employee1.name, employee1.sname);
//-------------------- enum custom type ----------------------------//
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 100] = "ADMIN";
    Role[Role["READ_ONLY"] = 300] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Admin",
    password: "password",
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log("i am a admin");
}
// ---------------------type Function  ------------------------//
function combineFn(n1, n2) { return n1 + n2; }
var combineData;
combineData = combineFn;
console.log("combineData is ", combineData(5, 5));
// -------------------- arrow function type --------------------//
var combineValue;
combineValue = combineFn;
console.log("combineValue is ", combineValue(5, 5));
function pad(s, n, direction) { return s + n + direction; }
pad("hi", 10, "left");
var s1 = "right"; //s1: string s2 de çözimi etmişik əzizim qaqaşlar
/*/
    s1 = "right"; bele yazlimda ts deyere baxib deyişənə tip verir !!!
    deyer "ne olursa olsun stringdi çünki dirnaq içindədi"
    pad("hi", 10, s1); => // error: 'string' is not assignable to '"left" | "right"' => s1: string
/*/
//BUNU HELL ETMEKDEN OTRI 
var s2 = "right";
pad("hi", 10, s2);
function map(f, ts) {
    return [];
}
var sns = map(function (n) { return n.toString(); }, [1, 2, 3]);
console.log("sns-", sns);
var z = [1, 2, 3];
//z.push(102); // error
//z[0] = 101; // error
var k = [1, 2, 3];
var p = [1, 2, 3];
//k.push(102); // error
//p[0] = 101; // error
function greet(person, date) {
    console.log("Hello " + person + ", today is " + date.toDateString() + "!");
}
greet("Maddison", new Date()); //Hello Maddison, today is Thu Oct 07 2021!
//tsc --target es2015 hello.ts eger hello.ts faylin es2015 she gore derelemesini isdeyirsizse
function printName(obj) {
    //console.log(obj.last.toUpperCase()); => error
    var _a;
    if (obj.last !== undefined) {
        console.log(obj.last.toUpperCase());
    }
    // A safe alternative using modern JavaScript syntax:
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase()); //undefined
}
printName({ first: "elmar" });
var bears = { name: "IBear", honey: true };
console.log("bears: " + JSON.stringify(bears));
var bear = { name: " TBear", honey: true };
console.log("bear: " + JSON.stringify(bear));
//Type Assertions - Tür İddiaları => typecasting
/* const myCanvas1 = document.getElementById("main_canvas")! as HTMLCanvasElement;
const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas")!; */
//deyismez Tür h = "ziya" => error Type '"hell"' is not assignable to type '"hello"'
var h = "hello";
h = "hello";
var req1 = { url: "https://example.com", method: "GET" }; //method is string type 
handleRequest(req1.url, req1.method);
var req2 = { url: "https://example.com", method: "GET" }; // method is "GET" type
handleRequest(req2.url, req2.method);
var req3 = { url: "https://example.com", method: "GET" }; // method is "GET" type
handleRequest(req2.url, req2.method);
// Bu zaman url: "https://example.com" bu tip  method: "GET" da bu tipdedi 
function handleRequest(url, method) {
    console.log(method, " - ", url);
}
// as const => deyiseni valuesi tipde edir 
//null undefined     undefined   null
function doSomething(x) {
    if (x === null) {
        // do nothing
    }
    else {
        console.log("Hello, " + x.toUpperCase());
    }
}
/*/
    Null Olmayan Onaylama Operatörü (Sonek!) - Non-null Assertion Operator (Postfix!)
    ! Herhangi bir ifadeden sonra yazmak ,
     etkin bir şekilde değerin null bor undefined: olmadığına dair bir tür iddiasıdır :
/*/
function liveDangerously(x) {
    // No error
    console.log(x.toFixed());
}
console.log("*****************************|if -in False qaytardiqi datalar|************************");
// if -in False qaytardiqi datalar
console.log("BOŞ STRİNG - ", Boolean("")); // false
console.log("SİFR STRİNG - ", Boolean(0)); // false
console.log("NaN - ", Boolean(NaN)); // false
console.log("Null - ", Boolean(null)); // false
console.log("UNDEFİNED - ", Boolean(undefined)); // false
console.log("ARRAY - ", Boolean([].length)); // false   //ARRAYIN YOXLANMASI
var objCheck = {};
console.log("OBJECT - ", Boolean(Object.entries(objCheck).length));
function keysOf(obj) {
    return Array.from(Object.keys(obj));
}
var objCheck1 = { a: 1, b: 2 };
keysOf(objCheck1).forEach(function (key) { return console.log(key, "-", objCheck1[key]); }); // type of key is "a" | "b"
console.log("*****************************|in operatöru ile Objecti yoxlamaq|************************");
function move(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}
var baliq = { swim: function () { console.log('i am baliq'); } }; // Bele yazlişdan daha çox istifadə edilir !!!
move(baliq);
var qush = { fly: function () { console.log('i am qush'); } };
move(qush);
console.log("**************************|instanceof ile yoxlamaq|*************************************");
//instanceof ile yoxlamaq 
function logValue(x) {
    if (x instanceof Date)
        console.log("x Date tipindedi ", x.toUTCString()); // (parameter) x: Date 
    else
        console.log("x string tipindedi ", x.toUpperCase()); //(parameter) x: string 
}
logValue("Hello str");
logValue(new Date());
console.log("**********************************|Assignments - Atamalar|**************************************");
//Assignments - Atamalar => TypeScript, atamanın sağ tarafına bakar ve sol tarafı uygun şekilde bize qaytarar
//random olaraq  Math.random() qiymet alir ve hemin qiymete gore  r in tipi melum olur r ya 10 yada hello world olur ,
var r = Math.random() < 0.5 ? 10 : "hello world!";
console.log("r = ", r, " r in tipi ", typeof r);
//r =  10  r in tipi  number OR r =  hello world!  r in tipi  string
console.log("*************************|Tip predikatlarından istifadə|********************************");
function isFish(pet) {
    return pet.swim !== undefined;
}
var baliqlar = { swim: function () { console.log('i am baliq'); } };
var isfish = isFish(baliqlar);
console.log("baliqdirmi:", isfish); //true
var qushlar = { fly: function () { console.log('i am qush'); } };
isfish = isFish(qushlar);
console.log("baliqdirmi:", isfish); //false
console.log("*********************************|Discriminated unions|************************************");
function getArea1(shape) {
    return Math.PI * Math.pow(shape.radius, 2);
}
function getArea2(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
            break;
        case "square":
            return Math.PI * Math.pow(shape.sideLength, 2);
            break;
    }
}
function getAreaNever(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
            break;
        case "square":
            return Math.PI * Math.pow(shape.sideLength, 2);
            break;
        default:
            var _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
