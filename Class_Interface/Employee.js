var Employee = /** @class */ (function () {
    function Employee(id, name) {
        this.id = id;
        this.name = name;
        //public,private anahtar kelmelerini yazmasaq O zaman Hemin Class deyiseni public sayilir
        this.employeesFront = [];
        this.employeesBack = [];
    }
    ;
    /*/
        constructor(private id: number, public name: string){}; bu yazlim asaqidakini evez edir

            private id: number;
            public name: string;

            constructor(id: number, name: string){
                this.id = id;
                this.name = name;
            };
    /*/
    Employee.prototype.description = function () {
        console.log(this.id + " - " + this.name);
    };
    Employee.prototype.addEmployeeFront = function (employeeFront) {
        this.employeesFront.push(employeeFront);
    };
    Employee.prototype.printEmployeeFrontInformations = function () {
        console.log("employeesFront.length = ", this.employeesFront.length);
        console.log("employeesFront = ", this.employeesFront);
    };
    Employee.prototype.addEmployeeBack = function (employeeBack) {
        this.employeesBack.push(employeeBack);
    };
    Employee.prototype.printEmployeeBackInformations = function () {
        console.log("employeesBack.length = ", this.employeesBack.length);
        console.log("employeesBack = ", this.employeesBack);
    };
    return Employee;
}());
var employee = new Employee(1, "Elcin");
employee.addEmployeeFront("Ali");
employee.addEmployeeFront("Ceyhun");
employee.employeesFront[2] = "Elmar";
employee.printEmployeeFrontInformations();
employee.addEmployeeBack("Elxan");
employee.addEmployeeBack("Tural");
//employee.employeesBack[2]="Semed" error 
//Property 'employeesBack' is private and only accessible within class 'Employee'
//yeni - private açar sözinə sahib olan class properitileri yalniz o classın daxilində keçərlidi
/*/
    bunun üçün biz - addEmployeeBack(employeeBackIstring) metodu yaratdiq və bu metodla Employee classindan
    çöldə private  employeesBack: string[] = []; işçilər arreyinə işçilər Əlavə edə bilirik
/*/
employee.printEmployeeBackInformations();
employee.description();
