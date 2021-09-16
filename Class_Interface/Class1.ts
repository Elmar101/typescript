/*/
    npm init => bizim üçün package.json filesini yaradir
    npm install --save-dev lite-server => bizim üçün package-lock.json filesini yaradir
    tsc -w
    npm install => bizim üçün node_modules-i endirir
    tsc --init => bizim üçün {...}tsconfig.json filesini yaradir
    sonrada {...}tsconfig.json filesine girib bezi deyisiklikler ede bilersiz biz  "sourceMap": true,  edirik
    "sourceMap": true => bu ise bizim üçün App.js.map filesini yaradir
/*/

class Department {
    _name: string;

    constructor(name: string){
        this._name = name;
    }
}

let accounting = new Department("Accounting"); 
let programming = new Department("Front-End");

console.log("accounting.name -- ",  accounting._name);
console.log("programming.name -- ", programming._name);
/*/
    new - Açar sözi Class dan bir Object yaradir yeni bir misalin yaradir 
    class yaranarken ilk öncə onun constructor metodu call olur ve classa
    gelen parametirleri this Objectinin açarlarinin dəyərləri olaraq verilir 
    yeni property: value
    this ={_name: name}
    bu this de classdan yaranan objecti evez edir  
/*/
/*/
    new ile biz Department Classindan iki eded Object yaratdiq yeni Classin missalini instansini yaratdiq

    class Department {
    _name: string;

    constructor(name: string){
        this._name = name;
    }
    //burada this = {_name: name} ve new ile instance olusdurduqca this hemin Object olur
    //let programming = new Department("Front-End"); this = programming
    //console.log("accounting.name -- ",  accounting._name); this = accounting
}
/*/

/*/ js de classin qarsiliqi

    var Department =  function () {
        function Department(name) {
            this._name = name;
        }
        return Department;
    }();

=> izah ts de Class {} bu bloku yaradir js de bu bloku {}  adsiz funuksia ilə yarada bilərik 
   ts - class Department {p1: string}  <===> js - let Department = function () {}
        Department.constructor(p1){this.p = p1} <===> function Department(p1){this.p = p1}
        class da this new ile yaranan Objectir 
        functionda ise this return  Department-i evez eden bir Objecti
/*/