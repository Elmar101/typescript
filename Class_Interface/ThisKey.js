"use strict";
var User = /** @class */ (function () {
    function User(name, sname) {
        var _this = this;
        this.fullName = function () { return console.log('istifadecinin tam adi ', _this._name + ' ' + _this._sname); };
        this.tamAd = function () { return _this._name + ' ' + _this._sname; };
        this._name = name;
        this._sname = sname;
    }
    return User;
}());
var userA = new User("Elmar", "Amanov");
userA.fullName();
console.log("userA consolda fullName metodunu call etmek - ", userA.fullName()); //undefined
console.log("userA consolda tamAd metodunu call etmek - ", userA.tamAd()); //undefined
console.log("userA", userA);
/*/
    userA User { fullName: [Function (anonymous)],tamAd: [Function (anonymous)], _name: 'Elmar',_sname: 'Amanov'}
    console.log( userA.fullName()) => buradan aydin gormek olurki fullName geriye nese return etmir ay qaqa !!!
    ama console.log( userA.tamAd()) => bu ise "Elmar Amanov" stringini return edir

    fullName metodu void metoddu buda yalniz Classin daxilinde Nese property qiymeti deyismeye yarayir
    tamAd metodu ise geriye deyer qaytarir yeni nese deyer qiymet saxlayir
/*/
var Program = /** @class */ (function () {
    function Program(n) {
        this.name = n;
    }
    Program.prototype.progName = function () { console.log('Programin adi - ', this.name); };
    return Program;
}());
var program = new Program("typescript");
program.progName();
//console.log("prog Adi -- ", program.progName({name:"js",progName: program.progName} ) )
var programCopy = { name: "javascript", progName: program.progName };
programCopy.progName();
/*/
    programCopy = {programName: program.progName} bele yazdiqda errorla qarşılaşırıq
    niyə bəs ?
            - çünki program Objesinin progName bir argument alir "this" argumentini hansiki Program tipindedi
              bizde programCopy nin progName-ni program objesinin progName ni deyer olaraq veririk
              bu zaman programCopy Objesininde name properitisi olmasi mecburiyetindedi chunki
              program.progName(this:Program) bu tipde metoddu

/*/
//# sourceMappingURL=ThisKey.js.map