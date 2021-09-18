//abstract Classlar = interface + class
//eger bir classi abstract edirsense o classin daxilinde abstract property ve metod yaza bilersen
/*/
    abstract metodlar gövdəsiz olur və abstract classi extends alan yəni miras alan classin daxilində
    abstract metodlar qeyd edilir və bu metodlari miras alan class özinə uyqun yazir və abstract metodun 
    parametirləri yazmaq məcburiyətində deyilsən sadecə abstract classin abstract metodunda parametir olaraq
    qeyd edirsənki abstract classi miras alan class bu parametirlərə uyqun nəsə edə bilər
    diqqet et abstract printInformation metoduna
/*/  

abstract class Bloc{
    private datas: string[] = [];

    protected readonly _id: number;
    
    protected constructor(private id: number, public name: string, protected data: string){
        this._id = id;
        this.datas.push(data)
    }

    abstract describe(data: string): string;

    abstract Info(this: Bloc ): void;

    abstract printInformation(id: number,name: string): void;

    addData(data: string): void { this.datas.push(data) }

}
console.log("================================ Abstract Class Dersi start ===============================");
class ItDepartment extends Bloc{

    constructor(id: number, name: string, data: string){
        super(id, name, data);
    }

    describe(data: string): string {
        this.data = data;
        return this.data;
    };

    Info(): void {
        console.log("INFO ITS = / ", this._id , " / ", this.name, " / ",this.data);
    }

    printInformation(id?: number,name?: string): void {
        if(id && name){ console.log("printInformation = / ",id , " / " ,name)}
        else console.log("don't send id and name to printInformation  = / ",this._id , " / " ,this.name)
    }
}

let itsDepartment = new ItDepartment(1,"Information Technology","ITS RECOMMENDED DATASET SEARCHES");
let data1 = itsDepartment.describe("its data -- 1");
console.log( "data1 " ,data1 );
itsDepartment.Info();
itsDepartment.printInformation(2,"send id and name printInformation its");
itsDepartment.printInformation();

console.log("================================ Abstract Class Dersi End ===============================");