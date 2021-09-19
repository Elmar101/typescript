type TPerson = {
    name: string;                         
    age: number;
    greet(phrase: string): void;
}

let tperson: TPerson = {
    name: "Elmar",
    age: 26,
    greet : (phrase: string) => { console.log( phrase ) }
}

tperson.greet("Hello tperson");

interface IPerson {
    name: string;                         
    age: number;
    greet(phrase: string): void;
}

let iperson: IPerson = {
    name: "Elmar",
    age: 26,
    greet : (phrase: string) => { console.log( phrase ) }
}

iperson.greet("Hello iperson");
//------------------------------------------------------------------------

console.log("----------------------- implements type ------------------")

type TGreeting = {
    name: string;                         
    age: number;
    greet(phrase: string): void;
}

class TClassGreeting implements TGreeting {
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    greet(phrase: string): void {
        throw new Error("Method not implemented.");
    }
}

let tgreet: TClassGreeting = new TClassGreeting("typeImplementation", 30);
console.log("type implements : ",tgreet);//TClassGreeting { name: 'typeImplementation', age: 30 }

console.log("----------------------- implements interface ------------------");

interface IGreeting {
    name: string;                         
    age: number;
    greet(phrase: string): void;
}
class IClassGreeting implements IGreeting {
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    greet(phrase: string): void {
        throw new Error("Method not implemented.");
    }
}

let igreet: IClassGreeting = new IClassGreeting("interfaceImplementation", 30);
console.log("interface implements : ",igreet);//IClassGreeting { name: 'interfaceImplementation', age: 30 }

//class className implements interface1,interface2...interfacen {} 
//--------------------------------------------------------------------------------------
console.log("----------------------- interface readonly deyiseni ------------------");

interface IReadonlyEx {
    readonly name: string;
    readonly age: number;
}

class ClassReadOnlyEx implements IReadonlyEx{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

let readonlyProperty: IReadonlyEx = new ClassReadOnlyEx("Readonly", 12);
console.log("name: ", readonlyProperty.name, " | age: ", readonlyProperty.age);
//readonlyProperty.name = "Eldar" //=> error - Cannot assign to 'name' because it is a read-only property
//costum type ilede yaza bilersen yeni type TReadonly = {readonly name; ve sair .....}

//-----------------   interface extends --------------- 
console.log("-----------------   interface extends -----------------------------");

interface T1 {
    readonly name: string
}

interface T2 extends T1 {
    printPhrease(ph: string): void
}

class ClassTtype implements T2 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    printPhrease(ph: string): void {
        console.log( ph );
        if (!ph) { throw new Error("Method not implemented"); }
    }

}
let TObj = new ClassTtype("interface extends dersi");
TObj.printPhrease("interface extends dersi");

/*/
    class ClassType implements T2 {

        constructor(public name: string) {}

        printName(name: string): void {
            throw new Error("Method not implemented.");
        }

    }

    constructor(public name: string) {} => class className { name: string; constructor(name:string){this.name = name} }
    //Angular da dependensi injection ishlemleri nu qayda iledi 
/*/