var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Departments = /** @class */ (function () {
    function Departments(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.departments = [];
        this.employeers = [];
    }
    ;
    Departments.prototype.description = function () {
        console.log(this.id + " - " + this.name + " - " + this.salary + "azn");
    };
    Departments.prototype.printEmployeeInformations = function () {
        console.log("Departments.length = ", this.departments.length);
        console.log("Departments = ", this.departments);
    };
    Departments.prototype.addDepartment = function (department) {
        this.departments.push(department);
    };
    Departments.prototype.addEmployeer = function (name) {
        this.employeers.push(name);
    };
    Departments.prototype.printEmployeer = function () {
        console.log("employeer = ", this.employeers);
    };
    return Departments;
}());
console.log("-------------------------Department information Start----------------------------------");
var departments = new Departments(1, "Department", 2000);
console.log("-------------------------Department information End----------------------------------");
console.log("-------------------------IT Department information Start----------------------------------");
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ITDepartment;
}(Departments));
var itDepartments = new ITDepartment(1, "Elcin", 2000);
itDepartments.description();
console.log("-------------------------IT Department information End----------------------------------");
console.log("-------------------------Accounting Department information Start----------------------------------");
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, name, admin) {
        var _this = _super.call(this, id, name, 2000) || this;
        _this.admin = admin;
        return _this;
    }
    return AccountingDepartment;
}(Departments));
var accountsDepartments = new AccountingDepartment(2, "Accounting", ["Sevinc"]);
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
var FinanceDepartment = /** @class */ (function (_super) {
    __extends(FinanceDepartment, _super);
    function FinanceDepartment(id, report) {
        var _this = _super.call(this, id, "Finance", 2000) || this;
        _this.report = report;
        return _this;
    }
    FinanceDepartment.prototype.addReport = function (text) {
        this.report.push(text);
    };
    FinanceDepartment.prototype.printReports = function () {
        console.log(this.report);
    };
    FinanceDepartment.prototype.addEmployeer = function (name) {
        name !== "Ayten" && this.employeers.push(name);
        /* /  if ile yazlimi => if(name === "Ayten" ){ return; } this.employeers.push(name); / */
    };
    return FinanceDepartment;
}(Departments));
var financeDepartments = new FinanceDepartment(3, []);
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
