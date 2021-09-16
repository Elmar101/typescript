class Employee {
    //public,private anahtar kelmelerini yazmasaq O zaman Hemin Class deyiseni public sayilir

    public employeesFront: string[] = [];

    private  employeesBack: string[] = [];

    constructor(private id: number, public name: string, private readonly salary: number){};
    /*/
        constructor(private id: number, public name: string,private readonly salary: number;){}; bu yazlim 
                                                                                                asaqidakini evez edir

            private id: number; 
            public name: string;
            private readonly salary: number;

            constructor(id: number, name: string,readonly salary: number){
                this.id = id;
                this.name = name;
                this.salary = salary;

                //readonly Class deyiseni ya o deyisen yarananda deyer atanar yada constructorin daxilinde !!!
            };
    /*/
    description():void{
        console.log(`${this.id} - ${this.name} - ${this.salary}azn`);
    }

    addEmployeeFront(employeeFront: string): void {
        this.employeesFront.push(employeeFront);
    }

    printEmployeeFrontInformations(): void {
        console.log("employeesFront.length = ", this.employeesFront.length);
        console.log("employeesFront = ", this.employeesFront);
    }

    addEmployeeBack(employeeBack: string): void {
        this.employeesBack.push(employeeBack);
    }

    printEmployeeBackInformations(): void {
        console.log("employeesBack.length = ", this.employeesBack.length);
        console.log("employeesBack = ", this.employeesBack);
    }
}

let employee = new Employee(1,"Elcin",2000);
    
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


