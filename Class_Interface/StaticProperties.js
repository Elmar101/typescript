"use strict";
//static propertiler Classin Özinə Məxsusdur !
//Classdan yaranan (Classin instansina) Objectlere yox ona gore ClassName.StaticPropert or  ClassName.StaticMetod();
//this.StaticPropert olmaz !!! Error Çünki This Classdan yaranan Objecti Evez Edir !!! 
//constructora static property yazmaq olmaz; ex=>  constructor(static id: number) olmaz
//constructor - Objecte mexsusdur sadece objecten gelen Valueni Classin Static propertisine ataya bilerik !!!
/*/
    class STC {
        static id: number;
        constructor(public id: number){
             STC.id = id
        }
    }
/*/
//static şeylər proyektin her yerinde Classin Öz adi ilə Çaqira bilərsən !!!
class STCProperty {
    constructor(id, name, value) {
        this.name = name;
        this.value = value;
        STCProperty.id = id;
        STCProperty.value = value;
    }
    ObjectReadName() { return this.name; }
    static staticReadName() { return STCProperty.name; }
    static get idNameValue() { return `${this.id} -- ${this.name} -- ${STCProperty.value}`; }
}
STCProperty.staticYear = 2021;
let stc = new STCProperty(1122, "OBJECTIMIZIN ADI stc dir", "Value is Static");
let staticYear = STCProperty.staticYear;
let staticReadName = stc.ObjectReadName();
console.log("Object Name  : ", stc.ObjectReadName());
console.log("staticReadName: ", staticReadName + '--' + " staticYear: " + staticYear);
console.log("idName : ", STCProperty.idNameValue);
console.log("static VALUE  : ", STCProperty.value);
