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
    startDate: new Date(),
    fd: "fff"
};
function printEmployeeInformation(em) {
    if ("name" in em) {
        console.log("employee name: ", em.name);
    }
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
/*/
    if("propertyName" in objectName){}  => çünki funksianin parametri unknion tipde olanda birinci hansi objectin
    propertisi yazilirsa object o tipde olur aqaeli
    type unionEmployeType = TA | TB ;   function(e:unionEmployeType){if('objectPropertyName' in Onject ) { excute code ....} }
    -> in ilə objectin daxilindeki propertini yoxlamaq olar if şərtində və ya for ilə objecti gəzə bilerik
/*/
