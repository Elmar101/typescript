/*/
    singltation Pattern - (tek kalp) ---> private constructor(){} 
    tek misalini instansini yaratmaq yeni bütün bu Classlardan yaranan objectlərin bir datasi olacaq
    ve ya eyni zamanda, bir sınıfa dayalı birden çok object oluşturamayacağınızdan emin olmak istersiniz
    let obj1 = new ObjClass();// return [{name: 'A', value:'aA'}, {name: 'B', value:'bB'}, {name: 'C',value:'cC'}]
    let obj2 = new ObjClass();// return [{name: 'A', value:'aA'}, {name: 'B', value:'bB'}, {name: 'C',value:'cC'}]

/*/

/*/ 
    Asaqidaki misalda 
    this - ItDepartmentAdmin Classindan yaranan Objecti evez edir
    if(ItDepartmentAdmin.itsAdminInstance){  return this.itsAdminInstance; } evelce if ile kontrol edirik 
    if(ItDepartmentAdmin.itsAdminInstance) eger itsAdminInstance data varsa 
    bu zaman this = {itsAdminInstance: itsAdminInstance} buradanda new ItDepartmentAdmin() bunan yaranan bütün 
    objectlerde this - e beraber olacaq (biz obj.property sekilinde this-e properti elave etmisik)
    ama ItDepartmentAdmin.itsAdminInstance bunda value (data) yoxdursa undefined dir if undefine de falsedir 
    bu zaman  this.itsAdminInstance = new ItDepartmentAdmin(1,"Elmar","elmar12345"); bele data kechirik 
    yeni this = { itsAdminInstance: new ItDepartmentAdmin(1,"Elmar","elmar12345") }
    ve ya return new ItDepartmentAdmin(1,"Elmar","elmar12345") belede yaza bilerdik
    sonrada Object yaradarken Classin Adi ile metodunu Chaqiririq day new deye bilmirik çünki constructor privatedi

    let obj = new ItDepartmentAdmin(1,"Elmar","elmar12345") =>ERROR !!!! constructor privatedi 
/*/

class ItDepartmentAdmin {
    private static ItDepartment_AdminObjecti: ItDepartmentAdmin;
    private static Admins: Array<{id: number, name: string,password: string}> = [];

    private constructor( public admin: {id: number, name: string, password: string} , private informations: string){
        ItDepartmentAdmin.Admins.push(admin);
        this.informations = informations;
    }
    static get_ItDepartment_AdminObjecti(): ItDepartmentAdmin {
        if(!ItDepartmentAdmin.ItDepartment_AdminObjecti){ 
            this.ItDepartment_AdminObjecti = new ItDepartmentAdmin( { id:1,name:"Elmar", password: "elmar12345" },"hi admin" );   
        } return this.ItDepartment_AdminObjecti;
    }

    public get get_Info():string { return this.informations; }
    public get getITAdmins(){ return ItDepartmentAdmin.Admins }
      
}  

let its: ItDepartmentAdmin = ItDepartmentAdmin.get_ItDepartment_AdminObjecti();
its.getITAdmins.map( item => console.log(item) );
console.log( its.get_Info )
// x = new ItDepartmentAdmin(1,"Elmar","elmar12345") ede bilmirem constructor privatedi

