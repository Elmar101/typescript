console.log("****************************|Function Type Expressions|*********************************");
 

function greeter( fn: (a: string) => void ) {
  fn("Hello, World");
}
 
function printToConsole(s: string) {
  console.log(s);
}
 
greeter(printToConsole);//Hello, World
// Type ile fn parametresinin tipini yazmaq

type GreetFunction = (a: string) => void;

function greeterT(fn: GreetFunction) {
  fn("Hi, World");
}
greeterT(printToConsole);

// ex 2
type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
};

function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
}

/* let objDescription: DescribableFunction = {
    description: "I am callBack",
     (7)=> true
}  */
//doSomething();

//--------------------------------------------------------------------------------------------------------------------
console.log("Constructor oluşdurmaq !!! new anahtar keslmesinden istifade etmeliyem");

class Greet {
    constructor(a:number, b: boolean){} 
}

let grt = new Greet(7, true); //Greet Classinin Constructorunu Tetikleyir 

type SomeConstructor = {
    new (s: string): {}
}

function fnObj(ctor: SomeConstructor){
    return new ctor("Hello, world!");
}

//-----------------------------------------------------------------------------------------------------

console.log("*******************************|Generic Functions|**********************************");

function firstElement<Type>(arr: Type[]): Type[] | undefined {
    return arr;
}

console.log("number of firstElement value is: ",firstElement<number>([1, 2, 3, 4, 5]))

//-----------------------------------------------------------------------------------------------------
function mapFn<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
    return arr.map(func);// arr.map(item => item )
  }
   
  const parsed = mapFn(["1", "2", "3"], (n) => n );
  console.log("parsed: ",parsed);//parsed:  [ '1', '2', '3' ]

  function mapFnInt<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
    return arr.map(func);// arr.map(item => item )
  }
   
 let mp = mapFn(["1", "2", "3"], (n) =>  parseInt(n) );
 console.log("mp:", mp); //mp: [ 1, 2, 3 ]

 //-----------------------------------------------------------------------------------------------------
 // ... => yerde qalan arreydi !
 function multipli(n: number, ...m: number[]) {
    return m.map((x) => n * x);
  }
  // 'a' gets value [10, 20, 30, 40]
  const mk = multipli(10, 1, 2, 3, 4);
  console.log("mk: ", mk); //[10, 20, 30, 40]

  //-----------------------------------------------------------------------------------------------------
  console.log("**************************|Destructuring assignment|********************************");
  function sm({ a, b, c }) {
    return a + b + c;
  }
  let cem = sm({ a: 10, b: 3, c: 9 });
  console.log("cem is  ", cem);
  
 /* Objectin top açıklaması, Destructuring sonra gelir=>{ a, b, c }: { a: number; b: number; c: number }
  çünki { a: number; b: number; c: number } => Bele Yazlim Objesi Yoxdur Ay Qaqa interface yazmirsanee
  Object Destructuring di => {a}:{a: string} Unutma !!!
  /*/

  function sum1(  { a, b, c }: { a: number; b: number;c: number }  ) {
    console.log(a + b + c);
  }

  //=> Asaqidaki kimide yazmaq olar 

  type ABD = { a: number; b: number; c: number };
  function sm1({ a, b, c }: ABD) { console.log(a + b + c) }

//----------------------------------------------------------------------------------------------------------------
console.log("*********************************|readonly|************************************");
interface Home {
    readonly resident: { 
        name: string; age: number 
    };
}
   
  function visitForBirthday(home: Home) {
    console.log(`Happy birthday ${home.resident.name}!`);
    home.resident.age++;
  }
   
function evict(home: Home) {
    //home.resident.name = "center park" => ede bilerem
    return home
};
let ev: Home = {resident: {name: "Kristal", age: 10} };
console.log("evcit ad: ", evict(ev) );
/*/
function evict(home: Home) {
  // But we can't write to the 'resident' property itself on a 'Home'.
  home.resident = {
     Cannot assign to 'resident' because it is a read-only property.
    name: "Victor the Evictor",
    age: 42,
  };=> bele yaza bilmezsen !!
}
/*/

interface Person {
  name: string;
  age: number;
}
 
interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}
 
let writablePerson: Person = {
  name: "Person McPersonface",
  age: 42,
};
 
// works
let readonlyPerson: ReadonlyPerson = writablePerson;
 
console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // prints '43'
// readonly deyisen yarananda qiymetini almalidi !!! classlarda constructordada vere bilersen

//---------------------------------------------------------------------------------------------------------
console.log("****************************************|Tuple Types|****************************************");
  //Tuple Types - Bu tip Arreyin indexlerinin Hansi Tipde olduqunu Teyin Etmekden ötridi - [number,string,boolean];
  type StringNumberPairA = [string, number];
  function doSomethingPairA(pair: [string, number]):[string, number] {
    return pair
  }
   
  let prA = doSomethingPairA(["hello", 42]);
  console.log("pair: " , pr);

  function doSomethingPairB(pair: [string, number]){
    const [a,b] = pair;
    return a + b
  }
   
  let prB = doSomethingPairA(["hello", 42]);
  console.log("pair: " , pr1);

  
  interface IStringNumberPair {
    length: 2;
    0: string;
    1: number;
    slice(start?: number, end?: number): Array<string | number>;
  }

  type Either12dOr3d = [number, number, number?];

  function setCoordinateA(coord: Either12dOr3d) {
    const [x, y, l] = coord;
   
    return console.log(`array ${coord.length} lenght`);
                                                    
  }

  setCoordinateA([1,2]);

  type StringNumberBooleansA = [string, number, ...boolean[]];
  type StringBooleansNumberB = [string, ...boolean[], number];
  type BooleansStringNumberC = [...boolean[], string, number];

  /*/
    StringNumberBooleansilk iki elemanı sırasıyla stringve numberolan, ancak booleanaşağıdaki 
    herhangi bir sayıda s olabilen bir demeti tanımlar .

    StringBooleansNumberilk öğesi stringve ardından herhangi bir sayıda booleans olan 
    ve a ile biten bir demeti tanımlar number.
    
    BooleansStringNumberbaşlangıç ​​öğeleri herhangi bir sayıda booleans olan ve 
    stringardından a ile biten bir demeti tanımlar number.
  /*/

  const snb1a: StringNumberBooleans = ["hello", 1];
  const snb2a: StringNumberBooleans = ["beautiful", 2, true];
  const snb3a: StringNumberBooleans = ["world", 3, true, false, true, false, true];

  const sbn1b: StringBooleansNumber = ["hello", 1];
  const sbn2b: StringBooleansNumber = ["beautiful", true, 2];
  const sbn3b: StringBooleansNumber = ["world", true, false, true, false, true, 3];

  const bsn1c: BooleansStringNumber = ["hello", 1];
  const bsn2c: BooleansStringNumber = [true, "beautiful", 2];
  const bsn3c: BooleansStringNumber = [true, false, true, false, true, "world",  3];

  function readButtonInputP(...args: [string, number, ...boolean[]]) {
    const [name, version, ...input] = args;
    return console.log("name + version + input = ",name +","+ version +","+ input);
  }

  //readonly tuple tip     pair: readonly[number, string]

  function doSomethingReadOnlyP(pair: readonly [string, number]) {
    //pair[0] = "hello!"; error !!!
  }