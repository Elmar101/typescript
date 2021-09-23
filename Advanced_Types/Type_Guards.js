console.log("----------------------Types Guards **** union types || ---------------------------");
function add(a, b, c) {
    if (typeof a === "string" || typeof b === "string" || typeof c === "string") {
        return a + b + c.toString();
    }
    return a + b + c;
}
console.log("-- union types Combine number cem: ", add(1, 2, 3));
console.log("-- union types Combine string : ", add("string - ", 2, 3));
//*****************************************************************************************************/*/
console.log("----------------------Types Guards **** union types || ---------------------------");
var em1 = {
    name: "Elmar",
    privileges: ["FRONT END"],
    employees: ["Ruslan", "Ceyhun"],
    startDate: new Date()
};
var em2 = {
    name: "Elmar",
    employees: ["Ruslan", "Ceyhun"],
    startDate: new Date()
};
//********************************/ FUNUKSIALARDA | ve & typlar hakda  ***************************************
console.log("--------------------FUNUKSIALARDA | ve & typlar hakda  ------------------------------");
function printEmployeeInfo(em) {
    console.log("employee name: ", em.name);
    console.log("employee employees: ", em.employees);
    console.log("employee startDate: ", em.startDate);
    console.log("employee endDate: ", em.endDate);
    console.log("employee privileges: ", em.privileges);
}
printEmployeeInfo(em1);
function printEmployeeInformation(em) {
    console.log("employee name: ", em.name);
    if ("employees" in em) {
        console.log("employee employees: ", em.employees);
    }
    if ("startDate" in em) {
        console.log("employee startDate: ", em.startDate);
    }
    if ("endDate" in em) {
        console.log("employee endDate: ", em.endDate);
    }
    if ("privileges" in em) {
        console.log("employee privileges: ", em.privileges);
    }
}
printEmployeeInformation(em1);
printEmployeeInformation(em2);
printEmployeeInformation({ name: "Eldar", employees: ["Sinan", "Akif"], startDate: new Date(), endDate: new Date().toISOString() });
/**************************************** Class union types and intersection types *****************************************/
console.log("****************************** Class union types and intersection types ***********************************");
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () { console.log("DRIVING ....."); };
    Car.prototype.marka = function (m) { console.log("CARS MARKA : ", m); };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () { console.log("DRIVING TRUCK ........"); };
    Truck.prototype.loadCargo = function (amount) { console.log("Load Cargo Amount = " + amount); };
    return Truck;
}());
var c = new Car();
var t = new Truck();
function vehicle_Fn_OR_TYPE(v) {
    v.drive();
    if ("loadCargo" in v) {
        v.loadCargo(1000);
    }
    if (v instanceof Car) {
        v.marka("BMW");
    }
}
vehicle_Fn_OR_TYPE(c);
vehicle_Fn_OR_TYPE(t);
function vehicle_Fn_AND_TYPE(v) {
    v.drive();
    if (v instanceof Truck) {
        v.loadCargo(500);
    }
    if (v instanceof Car) {
        v.marka("BMW");
    }
}
vehicle_Fn_AND_TYPE(c);
vehicle_Fn_AND_TYPE(t);
/*/
vehicle_Fn_AND_TYPE(c) asahaqidaki errorla qarsilasiriq ve hemen type cast edirik !!!!
-'Car' tipi argüman, 'Vehicle_AND_Type' tipindeki parametreye atanamaz.'LoadCargo' özelliği 'Car' türünde eksik,
  amma 'Truck' tipinde gerekli

  if(v instanceof Truck){ v.loadCargo(500); } bele yoxda=>  v.loadCargo(500);  bele yazilsa ERROR !!!
  *** => v.loadCargo(500) => TypeError: v.loadCargo is not a function
/*/
/*/
                            - Property 'loadCargo' does not exist on type 'Vehicle'.
        v.loadCargo(1000);
                            - Property 'loadCargo' does not exist on type 'Car'
        if("loadCargo" in v){ v.loadCargo(1000); } ==== if(v instanceof Truck){ v.loadCargo(1000); }
 /*/
//****************************************  union types with interfaces ***********************************/*/
console.log("***********************  Discriminated union types with interfaces **************************");
function animalsFn_OR_union_type(animal) {
    //if("flyingSpeed" in animal){ console.log("animal flyingSpeed = " + animal.flyingSpeed);}
    //if("runingSpeed" in animal){ console.log("animal runningSpeed = " + animal.runningSpeed);}
    switch (animal.type) { // hemise case deki ifadeni saxlayir !!!
        case 'birds':
            console.log("animal flyingSpeed = " + animal.flyingSpeed);
            break;
        case 'hours':
            console.log("animal runningSpeed = " + animal.runningSpeed);
            break;
    }
}
var a = {
    type: 'birds',
    flyingSpeed: 120
};
animalsFn_OR_union_type(a);
/*/
    let a: Animals = {
        type: 'birds', => type: 'birds' - olduquna görə "a:Birds" type: 'hours' olsaydi "a:Hours"

        flyingSpeed: 120,
                                     Object literal may only specify known properties,
        runningSpeed: 45 => ERROR =>
                                     and 'runningSpeed' does not exist in type 'Birds'
    }
/*/
