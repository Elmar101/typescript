class User {
    _name: string;
    _sname: string;
    constructor(name: string,sname: string) {
        this._name = name;
        this._sname = sname;
    }

    fullName:()=> void = ()=> console.log('istifadecinin tam adi ',this._name + ' ' + this._sname);
    tamAd:()=> string = ()=> { return this._name + ' ' + this._sname }
}

let userA = new User("Elmar","Amanov"); 
userA.fullName();
console.log("userA consolda fullName metodunu call etmek - ", userA.fullName()); //undefined
console.log("userA consolda tamAd metodunu call etmek - ", userA.tamAd()); //Elmar Amanov
console.log( "userA", userA)
/*/ 
    userA User { fullName: [Function (anonymous)],tamAd: [Function (anonymous)], _name: 'Elmar',_sname: 'Amanov'}
    console.log( userA.fullName()) => buradan aydin gormek olurki fullName geriye nese return etmir ay qaqa !!!
    ama console.log( userA.tamAd()) => bu ise "Elmar Amanov" stringini return edir

    fullName metodu void metoddu buda yalniz Classin daxilinde Nese property qiymeti deyismeye yarayir
    this anahtar kelmesi globalda window da name ve sname deyisenlerini axtarir ele deyisen olmaddiqi ichin undefined 
    tamAd metodu ise geriye deyer qaytarir yeni nese deyer qiymet saxlayir 
/*/
class Program {
    name: string;
   
    constructor(n: string) {
        this.name = n;
       
    }

    progName(this: Program){console.log('Programin adi - ',this.name)}
    
}

let program = new Program("typescript");
program.progName();

//console.log("prog Adi -- ", program.progName({name:"js",progName: program.progName} ) )

let programCopy = {name: "javascript" , progName: program.progName}
    programCopy.progName();
/*/
    programCopy = {programName: program.progName} bele yazdiqda errorla qarşılaşırıq
    niyə bəs ? 
            - çünki program Objesinin progName bir argument alir "this" argumentini hansiki Program tipindedi 
              bizde programCopy nin progName-ni program objesinin progName ni deyer olaraq veririk 
              bu zaman programCopy Objesininde name properitisi olmasi mecburiyetindedi chunki 
              program.progName(this:Program) bu tipde metoddu  this de burda programCopy ni evez edir
              this = programCopy = {name: "nese...", progName(this: Program){console.log("......"),this.name}}

/*/
 

