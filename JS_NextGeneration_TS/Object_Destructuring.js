var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Person = { firstName: 'John', lastName: "Conik", age: 30 };
var firstName = Person.firstName, age = Person.age;
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
var Employer = { ad: 'Rock', soyad: 'Conikov', yas: 30 };
var employerName = Employer.ad, yas = Employer.yas; //js terefde ise => var userName = Employer.ad 
console.log(employerName, yas);
var Employers = ["Elmar", "Eldar", "Resad", "Ruslan"];
var a = Employers[0], b = Employers[1], resParamArray = Employers.slice(2);
// js de => var a = Employers[0], b = Employers[1], resParamArray = Employers.slice(2); 
console.log.apply(console, __spreadArray([a, b], resParamArray, false));
var Animal = { animalName: 'Dog', animalType: 'Haji', animalAge: 4, animalInfo: 'i am dog !!!' };
var animalName = Animal.animalName, animalType = Animal.animalType;
console.log(animalName, animalType);
