"use strict";
//abstract Classlar = interface + class
//eger bir classi abstract edirsense o classin daxilinde abstract property ve metod yaza bilersen
/*/
    abstract metodlar gövdəsiz olur və abstract classi extends alan yəni miras alan classin daxilində
    abstract metodlar qeyd edilir və bu metodlari miras alan class özinə uyqun yazir və abstract metodun
    parametirləri yazmaq məcburiyətində deyilsən sadecə abstract classin abstract metodunda parametir olaraq
    qeyd edirsənki abstract classi miras alan class bu parametirlərə uyqun nəsə edə bilər
    diqqet et abstract printInformation metoduna
/*/
class Bloc {
    constructor(id, name, data) {
        this.id = id;
        this.name = name;
        this.data = data;
        this.datas = [];
        this._id = id;
        this.datas.push(data);
    }
    addData(data) { this.datas.push(data); }
}
console.log("================================ Abstract Class Dersi start ===============================");
class ItDepartment extends Bloc {
    constructor(id, name, data) {
        super(id, name, data);
    }
    describe(data) {
        this.data = data;
        return this.data;
    }
    ;
    Info() {
        console.log("INFO ITS = / ", this._id, " / ", this.name, " / ", this.data);
    }
    printInformation(id, name) {
        if (id && name) {
            console.log("printInformation = / ", id, " / ", name);
        }
        else
            console.log("don't send id and name to printInformation  = / ", this._id, " / ", this.name);
    }
}
let itsDepartment = new ItDepartment(1, "Information Technology", "ITS RECOMMENDED DATASET SEARCHES");
let data1 = itsDepartment.describe("its data -- 1");
console.log("data1 ", data1);
itsDepartment.Info();
itsDepartment.printInformation(2, "send id and name printInformation its");
itsDepartment.printInformation();
console.log("================================ Abstract Class Dersi End ===============================");
