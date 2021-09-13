const Person = {firstName: 'John',lastName:"Conik", age:30}

let {firstName, age} = Person;
/*/
    Object Destructuring 
                                    var name = Person.firstName; 
    const {firstName, age} = Person; =>
                                    var age = Person.age; 
/*/
console.log(firstName, age);

/*/
   Çalışız adı eyni saxlayiz - const {firstName,lastName, age} = Person;
/*/

const Employer = {ad: 'Rock', soyad: 'Conikov',yas:30}
const {ad:employerName, yas} = Employer; //js terefde ise => var userName = Employer.ad 
console.log(employerName, yas)

let Employers: string[] = ["Elmar","Eldar","Resad","Ruslan"];

let [a,b,...resParamArray] = Employers;

// js de => var a = Employers[0], b = Employers[1], resParamArray = Employers.slice(2); 

console.log(a,b,...resParamArray)

let Animal = {animalName: 'Dog', animalType: 'Haji', animalAge: 4, animalInfo: 'i am dog !!!'}

let { animalName,animalType } = Animal

console.log(animalName,animalType);