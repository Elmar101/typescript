class Department {
    _name: string;

    constructor(name: string){
        this._name = name;
    }
}
/*/
    new - Açar sözi Class dan bir Object yaradir yeni bir misalin yaradir 
    class yaranarken ilk öncə onun constructor metodu call olur ve classa
    gelen valueleri this Objectinin açarlarinin dəyərləri olaraq verilir 
    yeni property: value
    this ={_name: name}
    bu this de classdan yaranan objecti evez edir  
/*/
let accounting = new Department("Accounting"); 
let programming = new Department("Front-End");

console.log("accounting.name -- ",  accounting._name);
console.log("programming.name -- ", programming._name);
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