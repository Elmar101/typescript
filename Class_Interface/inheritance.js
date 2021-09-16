"use strict";
class Departments {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.departments = [];
        this.employeers = [];
    }
    ;
    description() {
        console.log(`${this.id} - ${this.name} - ${this.salary}azn`);
    }
    printEmployeeInformations() {
        console.log("Departments.length = ", this.departments.length);
        console.log("Departments = ", this.departments);
    }
    addDepartment(department) {
        this.departments.push(department);
    }
    addEmployeer(name) {
        this.employeers.push(name);
    }
    printEmployeer() {
        console.log("employeer = ", this.employeers);
    }
}
console.log("-------------------------Department information Start----------------------------------");
let departments = new Departments(1, "Department", 2000);
console.log("-------------------------Department information End----------------------------------");
console.log("-------------------------IT Department information Start----------------------------------");
class ITDepartment extends Departments {
}
let itDepartments = new ITDepartment(1, "Elcin", 2000);
itDepartments.description();
console.log("-------------------------IT Department information End----------------------------------");
console.log("-------------------------Accounting Department information Start----------------------------------");
class AccountingDepartment extends Departments {
    constructor(id, name, admin) {
        super(id, name, 2000); //Valideyin classin (extends olan class) conustructoru bizden hemde salarini isdeyir 
        this.admin = admin;
    }
}
let accountsDepartments = new AccountingDepartment(2, "Accounting", ["Sevinc"]);
accountsDepartments.addEmployeer("Ayten");
accountsDepartments.description();
console.log(accountsDepartments.name, " ve admin : ", accountsDepartments.admin);
/*/
    constructor(id: number,name: string,admin: string[]){
        super(id,name,2000);
        this.admin = admin
    }
    1 - ci super() mirass(extends) alinan classin constructor-unu evez edir
    2 - ci this- ise hemin classdan yaranan objecti eveze eder

            => constructor(id: number,name: string){
                    super(id,name,2000);
                    //constructor(id: number,name: string) salary qeyd edilmediyi ichin default oturulmelidi
                    // constructor(id: number){super(id,"Default Ad",3000)} id new ile yarananda oturulecek
               }
    3 - ci
/*/
console.log("-------------------------AccountingDepartment information End----------------------------------");
console.log("-------------------------Finance Department information Start----------------------------------");
class FinanceDepartment extends Departments {
    constructor(id, report) {
        super(id, "Finance", 2000);
        this.report = report;
    }
    addReport(text) {
        this.report.push(text);
    }
    printReports() {
        console.log(this.report);
    }
    addEmployeer(name) {
        name !== "Ayten" && this.employeers.push(name);
        /* /  if ile yazlimi => if(name === "Ayten" ){ return; } this.employeers.push(name); / */
    }
}
let financeDepartments = new FinanceDepartment(3, []);
financeDepartments.addReport("Finance new report look at");
financeDepartments.printReports();
financeDepartments.description();
financeDepartments.addEmployeer("Ayten");
financeDepartments.addEmployeer("Rena");
financeDepartments.printEmployeer();
console.log("-------------------------Finance Department information End----------------------------------");
/*/
    eger constructor da deyisen -public private protected anahtar kelmeleri ile yazilibsa bu zaman
    CLASS -in daxilinde global deyisen kimi yaranir

    ex =>
        class EXclass{
            name: string;
            constructor(id: number,name: string){
                this.name = name;
            }
        }

        //this.id = id; yaza bilmezsen çünki id global olaraq yaradilib
/*/
/*/
    constructor(private id: number) => class ParentClass{ private id: number; constructor(_id:number){this.id = _id} }
    
    Biz eger ParentClassi miras aliriqsa extends edirikse
    (extends genişləndirmek Bir classi götirib ona yeni xüsusiyətlər əlavə etmək)
    bu zaman o classin public ve protected deyisenlerine ulaşa bilirik private yox
    Ama constructor(private id: number) daki bu private id - extends olan classda superden dəyər ötrilir superdə
    ParentClassin Constructorunu evez edir
/*/ 
