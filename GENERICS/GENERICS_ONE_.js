var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var data = [1, "a", 3];
var dataMixStrNum = [1, "a", 3];
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
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("TypeScripti");
    }, 3000);
});
promise.then(function (data) { return console.log(data.split('')); }); //['T', 'y', 'p', 'e', 'S', 'c', 'r', 'i', 'p', 't', 'i']
// Ex Promise<number> resolve("number tipde datalar ötirəcək thene") then(num:number => execute code );
var promiseNumber = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(10.978);
    }, 3000);
});
promiseNumber.then(function (data) { return console.log(data.toFixed()); }); //11
/*****************************| CREAT GENERICS FUNCTION |***************************************/
console.log("*****************************| CREAT GENERICS FUNCTION  |**********************************");
function merge(objA, objB) {
    return __assign(__assign({}, objA), objB); // Object.assign(objA, objB);
}
//user_One
var user_One = merge({ name: "Elmar", age: 26 }, { hoppies: ["sport"] });
console.log("user_One Name is : " + user_One.name + " , age is : " + user_One.age + ", hoppies is : " + user_One.hoppies + " ");
// user_Two 
var user_Two = merge({ name: "Eldar", age: 25 }, { hoppies: ["sport"] });
console.log("user_Two Name is : " + user_Two.name + " , age is : " + user_Two.age + ", hoppies is : " + user_Two.hoppies + " ");
//user_Tree
var user_Tree = merge({ name: "Rafik", age: 25 }, { info: 'I am a Enjineer' });
console.log("user_Tree Name is : " + user_Tree.name + " , age is : " + user_Tree.age + ", information is : " + user_Tree.info + " ");
//EXAMPLE TWO 
function strNumGeneric(id, name) {
    return { id: id, name: name };
}
var X = strNumGeneric(6, "MAX");
console.log("X is ", X);
//WORKING WITH CONSTRAINT- məhdudlaşdırmaq < T extends Object, U extends Object > Textends number ve sair
function mergeProble(objA, objB) {
    return __assign(__assign({}, objA), objB); // Object.assign(objA, objB);
}
var problem = mergeProble({ name: "Elmar" }, 30);
console.log("problem_One is ", problem); // { name: "Elmar" }
// Elbetde cavab yanlisdi {name: "Elmar"} 30 bes hara getdi eger yazlisda sehf varsa code terefde consolda problem
// niede yoxdur Bu problemleri aradan qaldirmaq ichin extends anahtar kelmesini kulanacayiq
function mergeProbleConstraintSolution(objA, objB) {
    return __assign(__assign({}, objA), objB); // Object.assign(objA, objB);
}
/*/
    let problem_Solution = mergeProbleConstraintSolution( { name: "Elmar" }, 30 )
    Argument of type 'number' is not assignable to parameter of type 'object'.
/*/
// (T & U ) | ( T | U) => Tipletde iki cür mentiqi ifadə var and - & ve , or - | yaxud
var problem_Solution = mergeProbleConstraintSolution({ name: "Elmar" }, { age: 26 });
console.log("problem_One is ", problem_Solution);
function count_And_Describe(element) {
    /*/ Array<string | T>  eyni yazilisdi (string | T)[] ve ya [T , string] /*/
    var text = " Text yoxdur !!! ";
    if (element.length > 1) {
        text = "textin lengthsi is " + element.length;
    }
    return [element, text];
}
console.log("count_And_Describe atring data ile ", count_And_Describe("Bes Demisdin Vermiyeciyem ne oldu ???"));
console.log("count_And_Describe Arrey data ile ", count_And_Describe(["Bes Demisdin Vermiyeciyem", "ne oldu ???"]));
/*************************************| T extends object, U extends keyof T    |***************************************/
function extract_AND_Convert(obj, key) {
    return obj[key];
}
console.log(extract_AND_Convert({ name: "Elmar" }, "name"));
//<T extends object, U extends keyof T>(obj: T,key: U):T[U] => U, T nin keyidi T ye tip olaraq uyqun gelen objectin keyidi
// T extends {name: string} yeni T genislenib ve onun name adli keyi var ve bu key name di name de string tipdi
//U da T nin keyinin Tipidi yeni stringdi
console.log("==============|extract_AND_Convert1|==================");
function extract_AND_Convert1(obj, key) {
    var x = " ";
    for (var key_1 in obj) {
        x += obj[key_1] + " ";
    }
    return x;
}
console.log(extract_AND_Convert1({ name: "Elmar", sname: "Amanov", age: 25 }, ["name", "sname", "age"]));
console.log("******************************* Promislerde 2 sanie gozleme var ***************************************");
/*/
    eger constrain çoxlu propertisi olan object alirsa o zaman biz hemin objectin türini T ilə məhdudlaşdırırıq
    <T extends object> BU ŞƏKİLDƏ DEYİLDƏ
    BU ŞƏKİLDƏ - <T extends {name: string,sname: string,age: number}>
    DAHA SONRA BİZƏ U-NIN T-NİN KEYİNİN TİPİNDƏ OLMASİNİ DİNAMİKLƏŞDİRMƏLİYİK BUNUN ÜÇÜNDƏ

    U İSƏ BU ŞƏKİLDƏ OLUR -                     < U extends Array<keyof T> >
    yada ki                                     < U extends any[keyof T] >

    <T extends {name: string,sname: string,age: number}, U extends Array<keyof T>>
    DATANİ FUNUKSİAYA GÖNDƏRƏNDƏ İSƏ FN( {name: "Elmar",sname:"Amanov",age: 25},["name","sname","age"] )
/*/
/*******************************************|GENERICS CLASS|**************************************************/
console.log("|*************************************|GENERICS CLASS 1|***************************************|");
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItem = function () {
        return __spreadArray([], this.data, true);
    };
    return DataStorage;
}());
var data_storage = new DataStorage();
data_storage.addItem("Elmar");
data_storage.addItem("Eldar");
data_storage.addItem(10);
data_storage.addItem(["i am iam dinceleyshin", "dinceleyshin", "dinceleyshin"]);
data_storage.addItem({ name: "Elmar", sname: "Amanov", age: 25 });
console.log("in the storage of data is ", data_storage.getItem());
data_storage.removeItem("Elmar");
data_storage.removeItem(10);
console.log("in the storage of data is ", data_storage.getItem());
console.log("|*************************************|GENERICS CLASS 2|***************************************|");
var text_storage = new DataStorage();
text_storage.addItem("i am from Azerbaijan");
text_storage.addItem("i am Front End Developer");
console.log("before in the text storage of data is ", text_storage.getItem());
text_storage.removeItem("i am Front End Developer");
console.log("after in the text storage of data is ", text_storage.getItem());
/*******************************|PARTIAL TYPE => OLADA OLMAYADA BILER|****************************/
console.log("/***************************|PARTIAL TYPE => OLADA OLMAYADA BILER|***************************/");
function creatCourseGoal(title, description, date) {
    var courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.date = date;
    return courseGoal; //{title , description, date}
}
/*******************************|UTILTY TYPE READONLY|****************************/
console.log("/***************************|UTILTY TYPE READONLY|***************************/");
/*/
    UTILTY TYPE Readonly DATA OLDUQU KIMI QALIR NESE ELAVE ETMEK VE YA SILMEK DATANIN DEYERINI DEYISMEK OLMUR !!!

    type Readonly<T> = { readonly [P in keyof T]: T[P];
/*/
var studentNames = ["Elmar", "Eldar", "Resad"];
//BU ZAMAN MEN studentNames ARREYINE YENI DEYER ELAVE EDE VE YA SILE BILMIREM
// literal  - kelmesi kelmesine, aynisi, herfi => yeni name = name - herfi uyqunluq
// specify  - dəqiqləşdirmək, yəqinləşdirmək, belirtmek
//known  - bilinen, taninan ,melum,belli
console.log("*************************************|TYPE GENERICS|***************************************");
var gdt = "Elmar";
/*/
    type OrNull<Type> = Type | null;
    
    type OneOrMany<Type> = Type | Type[];
    
    type OneOrManyOrNull1<Type> = OrNull<OneOrMany<Type>>;
            
    type OneOrManyOrNull2<Type> = OneOrMany<Type> | null
    
    type OneOrManyOrNullStrings1 = OneOrManyOrNull1<string>;
                
    type OneOrManyOrNullStrings2 = OneOrMany<string> | null
/*/
// Array<Type>olan Type[] eyni olduqu kimi ReadonlyArray<Type> ile readonly Type[] eynidi
var x = [];
var y = [];
x = y;
//y = x; => error - The type 'readonly string[]' is 'readonly' and cannot be assigned to the mutable type 'string[]'.
console.log("*************************************|GENERICS FUNCTION|***************************************");
function identityGFn(arg) { return arg; }
var myIdentityGFn = identityGFn;
//MÜXTƏLİF ADDA NÖVİ YAZMAQDA OLAR 
var myIdentityGFn1 = function (arg) { return arg; };
var myIdentityGFn2 = identityGFn;
// OBJECTİN DESTRUCTİNG 
var myIdentityGFn3 = identityGFn;
// İNTERFACE ŞƏKLİNDƏ YAZAQ İNDİ 
function identityGIFn(arg) { return arg; }
var myIdentityFn4 = identityGIFn;
function identityIFn(arg) { return arg; }
var myIdentityIfn = identityIFn;
console.log("*************************************|GENERICS CLASS|***************************************");
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
myGenericNumber.multy = function (x, y) { return x * y; };
function loggingIdentity(arg) {
    console.log("arg length is ", arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
loggingIdentity({ length: 10, value: 3, x: 9 });
