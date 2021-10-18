/*/
    Decoratorler class, method, property ve parametrelere eklenebilen özel bir declaration türüdür
    Decoratorler “@expression(…)” formatında kullanılmaktadır. 
    Aslında bu decoratorler örneklerde de göreceğimiz üzere typescript fonksiyonlarıdır.
    Decoratorleri kullanabilmemiz için typescriptin experimentalDecorators özelliğini kullanarak 
    kodu derlememiz veya tsconfig dosyasından aktif hale getirmemiz gerekmektedir.
    Derleme: => tsc --target ES5 --experimentalDecorators <- bu sekildedi

    bax ->  tsconfig.json dosyasina 
     { 
        "compilerOptions": { 
            ...., 
            "experimentalDecorators": true,
        } 
    }

    DECORATOR => DECORATOR OLACAQ CLASS @DECORATOR TANIMINDAN ALTDA OLACAQ VE DECORATOR ADINA UYQUN FUNUKSIA YAZILACAQ !
    DECORATORLAR => VOIDDILER EGER BIZ DECORATORLARI CALL ETSEK MESELEN @DECORATORNAME() => BU ZAMAN DECORATOR 
    FUNUKSIA RETURN ANONIMIS FUNUKSIANI VERMELIDI EX-2 PARAMETRLE EX-3 BAX 
/*/
function Logger(construct: any){
    console.log("Logger....")
    console.log(construct)
}

@Logger

class Insanlar {
    title = 'Insanlar';
    constructor(){
        console.log("Insanlar .....")
    }
}

console.log("***************************|DECORATOR ADSIZ FUNUKSIYA|***************************");

function Anonimis(){
    return function(construct: any){
        console.log("Logger....")
        console.log(construct)
    }
}

@Anonimis()

class InsanlarAnonimis {
    title = 'InsanlarAnonimis';
    constructor(){
        console.log("Insanlar Anonimis.....")
    }
}


console.log("***************************|DECORATOR ADSIZ FUNUKSIYA PARAMETRLE|***************************");

function DecoratorFnParametr(p: string){
    return function(construct: Function){
        console.log("Logger User: ", p)
        console.log(construct)
    }
}

@DecoratorFnParametr("Elmar")

class DecoratorClass {
    title = 'DecoratorFnParametr';
    constructor(){
        console.log("Decorator Funuksia Parametrlerle")
    }
}


console.log("***************************|BIR CLASS IKI DECORATOR|***************************");

function DecoratorFn1(p: string){
    return function(Construct: any){
        console.log(p)
        console.log(Construct)
    }
}

function DecoratorFn2(p: string){
    return function(Construct: any){
        console.log( p )
        console.log(Construct)
    }
}

@DecoratorFn1("Decarator one")
@DecoratorFn2("Decarator two")
class FORTWOComponent {
    title = 'Baku';
    constructor(){
        console.log("Baku is beautiful")
    }
    get(){}
}



console.log("***************************|DECORATOR HTML|***************************");

function WithTemplate(template: string, hookId: string){
    return function(Constructor: any){
        const element = document.getElementById(hookId)!;
        const ctr = new Constructor();
        if(hookId){
            element.innerHTML = template;
            document.querySelector('h2')!.innerHTML = ctr.title;
        }
        console.log(Constructor)
    }
}

@WithTemplate(
    `
        <h1> HTML DECORATOR YARATMAQ </h1>
        <h2></h2>
    `
    ,"app")

class WithTemplateComponent {
    title = 'Salam Dunya';
    constructor(){
        console.log("Decorator Funuksia Parametrlerle")
    }
   
}


console.log("**************************|PROPERTY ACCESSOR PARAMETR DECORATORS|*****************************");
//public private protected - AÇAR SÖZLƏRİ HƏR ZAMAN BİRİNCİ GƏLİR  
//GET RETURN OLDUQUNA GÖRƏ BİZ NƏ TİPDƏ RETURN OLACAQ QEYD EDE BİLİRİK SET-DƏ İSƏ YOX !!! 
//SET SADƏCƏ CLASSDAKİ PRİVATE VƏ YA PROTECTED DƏYİŞƏNİNƏ DƏYƏR ATAMAQ GET İSƏ ATANAN O DƏYƏRİ ƏLDƏ ETMƏK ÜÇİNDİ

/*/
    BİRDƏ AŞAĞIDA YAZILAN TİPDƏ DECORATOR VAR -  CLASSİN İÇİNDƏ TƏYİNİ BU ZAMAN 

    PROPERTY PRODUCT CLASS
    property name is:  _price
    targets is :{constructor: ƒ, getPriceWithTax: ƒ}
                constructor: class Product
                getPriceWithTax: ƒ getPriceWithTax(tax)
                price: (...)
                get price: ƒ price()
                set price: ƒ price(val)
                [[Prototype]]: Object 
/*/
/* interface PropertyDescriptor {
    configurable?: boolean;
    enumerable?: boolean;
    value?: any;
    writable?: boolean;
    get?(): any;
    set?(v: any): void;
} 
=> BU INTERFACE TS-DƏ VAR MƏN BUNU COPY EDIB BURDADA YAZIB NELERISE ELAVE EDƏ BILƏRƏM VƏ YA EXTENDS DƏN İSTİFADƏ EDƏRƏM

 interface PropertyDescriptor {
    configurable?: boolean;
    enumerable?: boolean;
    value?: any;
    writable?: boolean;
    get?(): any;
    set?(v: any): void;
    hideShadow?: boolean; //ÖZİM ƏLAVƏ ETDİM
} 
function ProductDecoratorAccessor(description: PropertyDescriptor){}
VƏ YA EXTENDS

 interface Props extends PropertyDescriptor {
    hideShadow?: boolean; 
} 
function ProductDecoratorAccessor(description: Props){}
*/

//propertyName - properti ad və ya decorator keçilən metodun adi
// position - parametrin funuksianin neçənci arqumenti olduqunun index-ni verir
//target - target ise bütün methodlari bizə verir 

function PropertyOneDecorator(target: any, propertyName: string | Symbol){
    console.log("------PROPERTY ONE DECORATOR--------")
    console.log("property name is: ", propertyName)
    console.log("targets is :  " ,target)
}

function PropertyTwoDecorator(target: any, propertyName: string | Symbol){
    console.log("------PROPERTY TWO DECORATOR--------")
    console.log("property name is: ", propertyName)
    console.log("targets is :  " ,target)
}

function AccessorDecorator(target: any, propertyName: string, description: PropertyDescriptor){
    console.log("------ACCESSOR DECORATOR--------")
    console.log("target", target)
    console.log("property name is: ", propertyName)
    console.log("description is: ", description)
}

function MethodDecorator(target: any, propertyName: string, description: PropertyDescriptor){
    console.log("------METHOD DECORATOR--------")
    console.log("target", target)
    console.log("property name is: ", propertyName)
    console.log("description is: ", description)
}

function ParametrOneDecorator(target: any, propertyName: string, position: number){
    console.log("------PARAMETR One DECORATOR--------")
    console.log("target", target)
    console.log("property name is: ", propertyName)
    console.log("position is :", position)
}

function ParametrTwoDecorator(target: any, propertyName: string, position: number){
    console.log("------PARAMETR Two DECORATOR--------")
    console.log("target", target)
    console.log("property name is: ", propertyName)
    console.log("position is :", position)   
}
class Product {
    @PropertyOneDecorator
    private _price: number;

    @PropertyTwoDecorator
    public title: string;

    constructor(t: string ,p: number){
        this._price = p;
        this.title = t;
    } 
    
    @AccessorDecorator
    public get price():number{ return this._price; }
    public set price(val:number){ 
        val ? this._price = val : new Error("Girdiyiniz Price Menfidi zehmet olmasa musbet value oturin !!!") 
    }

    @MethodDecorator
    public getPriceWithTax(@ParametrOneDecorator tax: number , @ParametrTwoDecorator sum: number):number{
        return this._price*(1+tax);
    }
}

console.log("******************|DECORATOR HTML DEYİSİKLİKLER YUXARİ => BAX DECORATOR HTML YƏ|******************");

function WithHtmlTemplate(template: string, hookId: string){
    return function<T extends {new(...args: any[]): {title: string;}}>(Constructor: T){
        console.log(Constructor)

        return class extends Constructor {
            constructor(..._: any[]){
                super();
                const element = document.getElementById(hookId)!;
                if(hookId){
                    element.innerHTML = template;
                    document.querySelector('h4')!.innerHTML = this.title;
                }
            }
        }
    }
}

@WithHtmlTemplate(
    `
        <h3> HTML DECORATOR YARATMAQ 2</h3>
        <h4></h4>
    `
    ,"id")

class WithHtmlTemplateComponent {
    title = 'Decorator';
    constructor(){
    }
   
}

let withHtmlTemplate = new WithHtmlTemplateComponent();




console.log("******************|BUTON EXAMPLE => Click Me|******************");

function AutoBindDecorator(target: any , methodName: string , description: PropertyDescriptor){

    const orjinalMethod = description.value

    const adjDescriptions: PropertyDescriptor = {
        configurable: true,
        enumerable: true,
        get(){ return orjinalMethod.bind(this); }
    }

    return adjDescriptions;
}
class Printer {
    message: string = "Print messages";

    showMessageWithBind(){
        console.log("message is " + this.message);
    }
    @AutoBindDecorator
    showMessageWithDecoratorAutoBind(){
        console.log("message is " + this.message);
    }
}

let printer = new Printer();

const printButton1 = document.querySelector("button")!;
      printButton1.addEventListener("click", printer.showMessageWithBind.bind(printer));

const printButton2 = document.querySelector("#button")!;
      printButton2.addEventListener("click", printer.showMessageWithDecoratorAutoBind);

function onClickMethod(){ return printer.showMessageWithBind(); }
// EX-2
interface IValidatorConfig {
    [property: string]:{
        [validatableProps: string]: string[];
    }
}

const registeredValidators: IValidatorConfig = {}

function Required(target: any, propertyName: string){
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propertyName]: ['reguired']
    } 
}

function PositiveNumber(target: any, propertyName: string){
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propertyName]: ['positive']
    }  
}

function validate(obj: any){
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if(!objValidatorConfig){return true;} 
    let isValid: boolean = true;
    for(let propertyName in objValidatorConfig){
        for(let key of objValidatorConfig[propertyName]){
            switch(key){
                case "reguired" :  isValid = isValid && !!obj[key] ; break;
                case "positive" :  isValid = isValid && obj[key] > 0 ; break;
            }
        }
    }
    return true;
}

class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;
    constructor(title: string, price: number){
        this.title = title;
        this.price = price;
    }
}

const courseForm = document.querySelector("form")!;

      courseForm.addEventListener("submit",(event) => {
        event.preventDefault();
        const titleEl = document.querySelector("#title") as HTMLInputElement;
        const priceEl = document.querySelector("#price") as HTMLInputElement;

        const title = titleEl.value;
        const price = +priceEl.value;

        const createCourse = new Course(title, price);
        if(!validate(createCourse)){
            alert("invalit input,plz try again ")
        }
        console.log("createCourse: ", createCourse);
      })




















