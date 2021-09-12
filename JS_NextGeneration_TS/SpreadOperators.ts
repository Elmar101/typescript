let array = ["Elmar","Eldar","Resad"];

let arr = array;
 
console.log("arr = array = ",arr);//["Elmar","Eldar","Resad"];

let arrayPush = array.push(...array)
//array.push() => orjinal arrayin lensini guncelleyir data orjinal arraye push olur
console.log(" array push arrayin lensini saxlayir : ",arrayPush);//6
console.log(array);//[ 'Elmar', 'Eldar', 'Resad', 'Elmar', 'Eldar', 'Resad' ]

interface IPerson {
    name: string;
    sname: string;
    age?: number;
}
let person:IPerson = {
    name: 'Elmar',
    sname: 'Amanov',
    age: 26
}

let personA = person;

console.log("spread objectlerde personA = " ,personA);//{ name: 'Elmar', sname: 'Amanov', age: 26 }

let personB = { ...person }
console.log("spread objectlerde personB = " ,personB);//{ name: 'Elmar', sname: 'Amanov', age: 26 }

//let person = personA ve bu zaman biz person objectin referansini {} kopyaladiq
console.log(" person == personA ",person == personA);//true => biz objectin kopyaladiq

/*/
    let personB = { ...person } => bu zaman yeni object yaratmish oluruq sadece icherisine
    person objesindeki datani aliriq - bu iki evin icherisindeki esyalarin eyni olmasi ama qapi 
    acharinin ferqli olmasi kimidi usdeki ise sen evin tam ozunu alirsan 
 /*/
console.log(" person == personB ",person == personB);//false => biz yeni object yaraddiq {...personA}
console.log(" personA == personB ",personA == personB);//false => ferqli objelerdi die 

/*/
   Object.assign(target,sourche) buda yeni object yaradir => Object.assign({},person);
   let personC = Object.assign({},person);
   console.log("Object.assign({},otherObject)", personC) 
   console.log("personC == person ", personC == person);//false

   let personD = Object.assign({...person}); => target mecburidi ama sourche yox
/*/