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

let data: Array<string | number> = [1, "a", 3];
let dataMixStrNum : (string | number)[] = [1, "a", 3];

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

let promise: Promise<string> = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("TypeScripti")
    },3000)
});

 promise.then( data => console.log( data.split('') ) );//['T', 'y', 'p', 'e', 'S', 'c', 'r', 'i', 'p', 't', 'i']

 
 // Ex Promise<number> resolve("number tipde datalar ötirəcək thene") then(num:number => execute code );

 let promiseNumber: Promise<number> = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(10.978)
    },3000)
});

 promiseNumber.then( data => console.log( data.toFixed() ) );//11



 /*****************************| CREAT GENERICS FUNCTION |***************************************/
 console.log("*****************************| CREAT GENERICS FUNCTION  |**********************************");

 function  merge<T , U>(objA: T, objB: U): T & U {
     return {...objA, ...objB} // Object.assign(objA, objB);
 }
//user_One
 let user_One = merge( {name: "Elmar",age: 26}, {hoppies:["sport"]} );
 console.log(`user_One Name is : ${user_One.name} , age is : ${user_One.age}, hoppies is : ${user_One.hoppies} `);

 // user_Two 
 let user_Two = merge<{name: string, age: number},{hoppies: Array<string | number>}> (
        {name: "Eldar",age: 25} , { hoppies:["sport"] }
    );
console.log(`user_Two Name is : ${user_Two.name} , age is : ${user_Two.age}, hoppies is : ${user_Two.hoppies} `);

//user_Tree
let user_Tree = merge<{name: string, age: number},{info: string}>(
    {name: "Rafik",age: 25}, { info: 'I am a Enjineer'}
);
console.log(`user_Tree Name is : ${user_Tree.name} , age is : ${user_Tree.age}, information is : ${user_Tree.info} `);

//EXAMPLE TWO 
function strNumGeneric<T,U>(id: T, name: U): {id: T, name: U} {
    return {id: id, name: name} 
}
let X = strNumGeneric<number, string>(6,"MAX");
console.log("X is ", X);

//WORKING WITH CONSTRAINT- məhdudlaşdırmaq < T extends Object, U extends Object > Textends number ve sair


function  mergeProble<T , U>(objA: T, objB: U): T & U {
    return {...objA, ...objB} // Object.assign(objA, objB);
}
let problem = mergeProble( { name: "Elmar" }, 30 ) 
    console.log("problem_One is ", problem);// { name: "Elmar" }
// Elbetde cavab yanlisdi {name: "Elmar"} 30 bes hara getdi eger yazlisda sehf varsa code terefde consolda problem
// niede yoxdur Bu problemleri aradan qaldirmaq ichin extends anahtar kelmesini kulanacayiq

function  mergeProbleConstraintSolution<T extends object, U extends object>(objA: T, objB: U): T & U {
    return {...objA, ...objB} // Object.assign(objA, objB);
}
/*/
    let problem_Solution = mergeProbleConstraintSolution( { name: "Elmar" }, 30 ) 
    Argument of type 'number' is not assignable to parameter of type 'object'.
/*/
// (T & U ) | ( T | U) => Tipletde iki cür mentiqi ifadə var and - & ve , or - | yaxud
let problem_Solution = mergeProbleConstraintSolution( { name: "Elmar" }, {age: 26} )
console.log("problem_One is ", problem_Solution);




/*********************************| Arreye Oxsar ve ya stringe oxsar |*************************************** */
interface Lengths{
    length: number;
}
function count_And_Describe<T extends Lengths>(element: T):Array<string |  T>{
    /*/ Array<string | T>  eyni yazilisdi (string | T)[] ve ya [T , string] /*/

    let text = " Text yoxdur !!! " ;
    if(element.length > 1){ text = "textin lengthsi is " + element.length ; }
    return [element , text];
}
console.log("count_And_Describe atring data ile ", count_And_Describe("Bes Demisdin Vermiyeciyem ne oldu ???"));
console.log("count_And_Describe Arrey data ile ", count_And_Describe( ["Bes Demisdin Vermiyeciyem", "ne oldu ???"] ));



/*************************************| T extends object, U extends keyof T    |***************************************/
function extract_AND_Convert<T extends object, U extends keyof T>(obj: T,key: U):T[U] {
    return obj[key]
}
console.log( extract_AND_Convert( {name: "Elmar"},"name" ) );


//<T extends object, U extends keyof T>(obj: T,key: U):T[U] => U, T nin keyidi T ye tip olaraq uyqun gelen objectin keyidi
// T extends {name: string} yeni T genislenib ve onun name adli keyi var ve bu key name di name de string tipdi
//U da T nin keyinin Tipidi yeni stringdi
console.log("==============|extract_AND_Convert1|==================")
function extract_AND_Convert1<
    T extends {name: string,sname: string,age: number},
    U extends Array<keyof T> //U extends any[keyof T] 
    >(
        obj: T,
        key: U
    ){
        let x=" ";
        for(let key in obj){  x += obj[key] + " "; }
        return x
}
console.log( extract_AND_Convert1( {name: "Elmar",sname:"Amanov",age: 25},["name","sname","age"] ) );
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
console.log("|*************************************|GENERICS CLASS 1|***************************************|")
class DataStorage<T extends number | string | boolean | [] | object>{
    data: T[] = [];
    
    addItem(item: T): void {  
        this.data.push(item);
     }

    removeItem(item: T): void { 
        this.data.splice(this.data.indexOf(item), 1) 
    }

    getItem():T[] { 
        return [...this.data] 
    }
}

let data_storage = new DataStorage();
data_storage.addItem("Elmar");  data_storage.addItem("Eldar"); data_storage.addItem(10);
data_storage.addItem(["i am iam dinceleyshin","dinceleyshin","dinceleyshin"])
data_storage.addItem({name:"Elmar",sname:"Amanov",age: 25});
 
console.log("in the storage of data is ",data_storage.getItem());

data_storage.removeItem("Elmar");
data_storage.removeItem(10)

console.log("in the storage of data is ",data_storage.getItem() );




console.log("|*************************************|GENERICS CLASS 2|***************************************|")


let text_storage = new DataStorage<string>();
text_storage.addItem("i am from Azerbaijan");  
text_storage.addItem("i am Front End Developer");
 
console.log("before in the text storage of data is ",text_storage.getItem());

text_storage.removeItem("i am Front End Developer")

console.log("after in the text storage of data is ",text_storage.getItem() );


/*******************************|PARTIAL TYPE => OLADA OLMAYADA BILER|****************************/
console.log("/***************************|PARTIAL TYPE => OLADA OLMAYADA BILER|***************************/")

/*/
    type Partial<T> = { [P in keyof T]?: T[P] | undefined; } => INTERFACEDEKI KEYLERI OPTION EDIR

    Partial<ICourseGoal> ASAQIDAKI KIMI EDIR -> " interface ICourseGoal "       ARXA PENCEREDE

    interface ICourseGoal {                                         interface ICourseGoal {
        title:string;                                                   title?:string;
        description:string;       Partial<ICourseGoal>  =>              description?:string;
        date: Date;                                                     date?: Date; 
    }                                                                }
                               
/*/
interface ICourseGoal {
    title:string;
    description:string;
    date: Date;
}

function creatCourseGoal(title:string, description:string, date:Date): ICourseGoal {
    let courseGoal: Partial<ICourseGoal> = {}
        courseGoal.title = title;
        courseGoal.description = description;
        courseGoal.date = date;
    return  courseGoal as ICourseGoal //{title , description, date}
}









/*******************************|UTILTY TYPE READONLY|****************************/
console.log("/***************************|UTILTY TYPE READONLY|***************************/")
/*/
    UTILTY TYPE Readonly DATA OLDUQU KIMI QALIR NESE ELAVE ETMEK VE YA SILMEK DATANIN DEYERINI DEYISMEK OLMUR !!!

    type Readonly<T> = { readonly [P in keyof T]: T[P];
/*/

let studentNames: Readonly<string[]> = ["Elmar","Eldar","Resad"];
//BU ZAMAN MEN studentNames ARREYINE YENI DEYER ELAVE EDE VE YA SILE BILMIREM

// literal  - kelmesi kelmesine, aynisi, herfi => yeni name = name - herfi uyqunluq
// specify  - dəqiqləşdirmək, yəqinləşdirmək, belirtmek
//known  - bilinen, taninan ,melum,belli

console.log("*************************************|TYPE GENERICS|***************************************");

type genericsDataType<T> = T ;
let gdt: genericsDataType<string> = "Elmar";
/*/
    type OrNull<Type> = Type | null;
    
    type OneOrMany<Type> = Type | Type[];
    
    type OneOrManyOrNull1<Type> = OrNull<OneOrMany<Type>>;
            
    type OneOrManyOrNull2<Type> = OneOrMany<Type> | null
    
    type OneOrManyOrNullStrings1 = OneOrManyOrNull1<string>;
                
    type OneOrManyOrNullStrings2 = OneOrMany<string> | null
/*/

// Array<Type>olan Type[] eyni olduqu kimi ReadonlyArray<Type> ile readonly Type[] eynidi

let x: readonly string[] = [];
let y: string[] = [];

x = y;
//y = x; => error - The type 'readonly string[]' is 'readonly' and cannot be assigned to the mutable type 'string[]'.