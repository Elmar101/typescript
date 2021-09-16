class Organization {
    public Organization: string[] = [];
    protected employeer: string[] = [];

    constructor(private id: number, public name: string, private readonly salary: number){};
    
    description(){ console.log(`${this.id} - ${this.name} - ${this.salary}azn`) }

    printOrganizationInformations(): void {
        console.log("Organization.length = ", this.Organization.length);
        console.log("Organization = ", this.Organization);
    }

    addOrganization(department: string){ this.Organization.push(department); }

    addEmployeer(name: string){ this.employeer.push(name) }

    printEmployeer(){ console.log("employeer = ", this.employeer) }

}
console.log("-------------------------Department information Start----------------------------------");

let organization = new Organization(1,"Department",2000);

console.log("-------------------------Accounting Department information Start----------------------------------");

class AccountingDepartments extends Organization{
    admin: string[];
    report: string[];
    private newReport: string[];
    
    get recentlyReport():string {
       if(this.newReport){ return this.newReport.toString(); }
       throw new Error("no report foundid");  
    }

    set recentlyReport(value:string){
        if(!value){throw new Error("Please add new Reports")}
        this.addReport(value);
    }
    constructor(id: number,name: string,admin: string[],report: string[]){
        super(id,name,2000);
        this.admin = admin
        this.report = report
        this.newReport = [];
    }

    addReport(text: string) { 
        this.report.push(text); 
        this.newReport.push(text);
    }

    printReports(){ console.log(this.report) }

    addEmployeer(name: string){ name !== "Ayten" && this.employeer.push(name) }
}

let accountOrganization = new AccountingDepartments(2,"Accounting",["Sevinc"],[]);

    //console.log("AccountOrganization RecentlyReport",accountOrganization.recentlyReport);// no report foundid 
    //accountOrganization.recentlyReport = ""
    //accountOrganization.recentlyReport = " ' GET RECENTLY REPORT WITH SET ' "
    accountOrganization.addEmployeer("Ayten");

    accountOrganization.description();

    accountOrganization.addReport('"GET RECENTLY REPORT WITHOUT SET"');
    console.log("AccountOrganization RecentlyReport",accountOrganization.recentlyReport);

console.log(accountOrganization.name, " ve admin : ", accountOrganization.admin);


console.log("-------------------------AccountingDepartment information End----------------------------------");

