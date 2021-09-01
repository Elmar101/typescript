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
    console.log("a is ", b);
}
display(34);
display(34, 21);
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
    //sayHi:function(): string { return " hello "} ,
    //sayHi:( (): string => { return " hi "} )
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
var arrNumberIndex = ["Bob", "Fred"];
console.log("myArray: " + arrNumberIndex);
console.log("myArray[0]: " + arrNumberIndex[0]);
console.log("myArray[1]: " + arrNumberIndex[1]);
var myIndexArr = arrNumberIndex[0];
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
