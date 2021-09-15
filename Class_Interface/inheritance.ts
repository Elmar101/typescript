class Departments {

    public departments: string[] = [];

    constructor(private id: number, public name: string, private readonly salary: number){};
    
    description():void{
        console.log(`${this.id} - ${this.name} - ${this.salary}azn`);
    }

    printEmployeeInformations(): void {
        console.log("Departments.length = ", this.departments.length);
        console.log("Departments = ", this.departments);
    }

}
console.log("-------------------------Department information Start----------------------------------");

let departments = new Departments(1,"Department",2000);

console.log("-------------------------Department information End----------------------------------");
console.log("-------------------------IT Department information Start----------------------------------");

class ITDepartment extends Departments {}

let itDepartments = new ITDepartment(1,"Elcin",2000);

itDepartments.description();

console.log("-------------------------IT Department information End----------------------------------");
console.log("-------------------------Accounting Department information Start----------------------------------");

class AccountingDepartment extends Departments{
    admin: string[];
    constructor(id: number,name: string,admin: string[]){
        super(id,name,2000);//Valideyin classin (extends olan class) conustructoru bizden hemde salarini isdeyir 
        this.admin = admin
    }
}

let accountsDepartments = new AccountingDepartment(2,"Accounting",["Sevinc"]);

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
class FinanceDepartment extends Departments{
    constructor(id: number,private report: string[]){
        super(id,"Finance",2000);
    }

    addReport(text: string): void {
        this.report.push(text);
    }

    printReports():void{
        console.log(this.report);
    }
}

let financeDepartments = new FinanceDepartment(3,[]);

financeDepartments.addReport("Finance new report look at")

financeDepartments.printReports();

financeDepartments.description();

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