class Departments {

    public departments: string[] = [];

    protected employeers: string[] = [];

    constructor(private id: number, public name: string, private readonly salary: number,public info?: string[]){};
    
    description():void{
        console.log(`${this.id} - ${this.name} - ${this.salary}azn`);
    }

    printEmployeeInformations(): void {
        console.log("Departments.length = ", this.departments.length);
        console.log("Departments = ", this.departments);
    }

    addDepartment(department: string){
        this.departments.push(department);
    }

    addEmployeer(name: string){
        this.employeers.push(name);
    }

    printEmployeer(): void {
        console.log("employeer = ", this.employeers)
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
        super(id,name,2000); //Valideyin classin (extends olan class) conustructoru bizden 
        this.admin = admin; //hemde salarini isdeyir=> info? olada biler olmuyada biler optionaldi
    }
}

let accountsDepartments = new AccountingDepartment(2,"Accounting",["Sevinc"]);

    accountsDepartments.addEmployeer("Ayten");

    accountsDepartments.description();

console.log(accountsDepartments.name, " ve admin : ", accountsDepartments.admin);


/*/ 
    constructor(id: number,name: string,admin: string[]){
        super(id,name,2000);// super(id,name,2000,["info olada biler olmuyada biler qaqa"]);
        this.admin = admin
    }
    1 - ci super() mirass(extends) alinan classin constructor-unu evez edir
    2 - ci this- ise hemin classdan yaranan objecti eveze eder

            => constructor(id: number,name: string){
                    super(id,name,2000);
                    //constructor(id: number,name: string) => salary qeyd edilmediyi ichin default oturulmelidi
                    //constructor(id: number){super(id,"Default Ad",3000)} id new ile yarananda oturulecek
               }
    3 - ci  
/*/
// this classdan yaranan objecti evez edir superdeki ve ya 
//constructordaki parametirleri icindeki propertilere value olaraq alir

console.log("-------------------------AccountingDepartment information End----------------------------------");
console.log("-------------------------Finance Department information Start----------------------------------");
class FinanceDepartment extends Departments{
    constructor(id: number,private report: string[]){
        super(id,"Finance",2000,["info mecburi deyil"]);
    }

    addReport(text: string): void {
        this.report.push(text);
    }

    printReports():void{
        console.log(this.report);
    }

    addEmployeer(name: string){
        name !== "Ayten" && this.employeers.push(name);

       /* /  if ile yazlimi => if(name === "Ayten" ){ return; } this.employeers.push(name); / */
    }
}

let financeDepartments = new FinanceDepartment(3,[]);

    financeDepartments.addReport("Finance new report look at")

    financeDepartments.printReports();

    financeDepartments.description();

    financeDepartments.addEmployeer("Ayten");

    financeDepartments.addEmployeer("Rena");

    financeDepartments.printEmployeer();

console.log("-------------------------Finance Department information End----------------------------------");


/*/ 
    eger constructor da parametrler -public private protected anahtar kelmeleri ile yazilibsa bu zaman
    CLASS -in daxilinde global deyisen kimi yaranir 

    ex => 
        class EXclass{
            name: string;
            constructor(id: number,name: string){
                this.name = name;
            }
        }

        //this.id = id; yaza bilmezsen ????nki id global olaraq yaradilib 
/*/

/*/
    constructor(private id: number) => class ParentClass{ private id: number; constructor(_id:number){this.id = _id} }
    
    Biz eger ParentClassi miras aliriqsa extends edirikse 
    (extends geni??l??ndirmek Bir classi g??tirib ona yeni x??susiy??tl??r ??lav?? etm??k)
    bu zaman o classin public ve protected deyisenlerine ula??a bilirik private yox
    Ama constructor(private id: number) daki bu private id - extends olan classda superden d??y??r ??trilir superd?? 
    ParentClassin Constructorunu evez edir 
/*/