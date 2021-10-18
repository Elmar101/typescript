"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
function Logger(construct) {
    console.log("Logger....");
    console.log(construct);
}
let Insanlar = class Insanlar {
    constructor() {
        this.title = 'Insanlar';
        console.log("Insanlar .....");
    }
};
Insanlar = __decorate([
    Logger
], Insanlar);
console.log("***************************|DECORATOR ADSIZ FUNUKSIYA|***************************");
function Anonimis() {
    return function (construct) {
        console.log("Logger....");
        console.log(construct);
    };
}
let InsanlarAnonimis = class InsanlarAnonimis {
    constructor() {
        this.title = 'InsanlarAnonimis';
        console.log("Insanlar Anonimis.....");
    }
};
InsanlarAnonimis = __decorate([
    Anonimis()
], InsanlarAnonimis);
console.log("***************************|DECORATOR ADSIZ FUNUKSIYA PARAMETRLE|***************************");
function DecoratorFnParametr(p) {
    return function (construct) {
        console.log("Logger User: ", p);
        console.log(construct);
    };
}
let DecoratorClass = class DecoratorClass {
    constructor() {
        this.title = 'DecoratorFnParametr';
        console.log("Decorator Funuksia Parametrlerle");
    }
};
DecoratorClass = __decorate([
    DecoratorFnParametr("Elmar")
], DecoratorClass);
console.log("***************************|BIR CLASS IKI DECORATOR|***************************");
function DecoratorFn1(p) {
    return function (Construct) {
        console.log(p);
        console.log(Construct);
    };
}
function DecoratorFn2(p) {
    return function (Construct) {
        console.log(p);
        console.log(Construct);
    };
}
let FORTWOComponent = class FORTWOComponent {
    constructor() {
        this.title = 'Baku';
        console.log("Baku is beautiful");
    }
    get() { }
};
FORTWOComponent = __decorate([
    DecoratorFn1("Decarator one"),
    DecoratorFn2("Decarator two")
], FORTWOComponent);
console.log("***************************|DECORATOR HTML|***************************");
function WithTemplate(template, hookId) {
    return function (Constructor) {
        const element = document.getElementById(hookId);
        const ctr = new Constructor();
        if (hookId) {
            element.innerHTML = template;
            document.querySelector('h2').innerHTML = ctr.title;
        }
        console.log(Constructor);
    };
}
let WithTemplateComponent = class WithTemplateComponent {
    constructor() {
        this.title = 'Salam Dunya';
        console.log("Decorator Funuksia Parametrlerle");
    }
};
WithTemplateComponent = __decorate([
    WithTemplate(`
        <h1> HTML DECORATOR YARATMAQ </h1>
        <h2></h2>
    `, "app")
], WithTemplateComponent);
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
function PropertyOneDecorator(target, propertyName) {
    console.log("------PROPERTY ONE DECORATOR--------");
    console.log("property name is: ", propertyName);
    console.log("targets is :  ", target);
}
function PropertyTwoDecorator(target, propertyName) {
    console.log("------PROPERTY TWO DECORATOR--------");
    console.log("property name is: ", propertyName);
    console.log("targets is :  ", target);
}
function AccessorDecorator(target, propertyName, description) {
    console.log("------ACCESSOR DECORATOR--------");
    console.log("target", target);
    console.log("property name is: ", propertyName);
    console.log("description is: ", description);
}
function MethodDecorator(target, propertyName, description) {
    console.log("------METHOD DECORATOR--------");
    console.log("target", target);
    console.log("property name is: ", propertyName);
    console.log("description is: ", description);
}
function ParametrOneDecorator(target, propertyName, position) {
    console.log("------PARAMETR One DECORATOR--------");
    console.log("target", target);
    console.log("property name is: ", propertyName);
    console.log("position is :", position);
}
function ParametrTwoDecorator(target, propertyName, position) {
    console.log("------PARAMETR Two DECORATOR--------");
    console.log("target", target);
    console.log("property name is: ", propertyName);
    console.log("position is :", position);
}
class Product {
    constructor(t, p) {
        this._price = p;
        this.title = t;
    }
    get price() { return this._price; }
    set price(val) {
        val ? this._price = val : new Error("Girdiyiniz Price Menfidi zehmet olmasa musbet value oturin !!!");
    }
    getPriceWithTax(tax, sum) {
        return this._price * (1 + tax);
    }
}
__decorate([
    PropertyOneDecorator
], Product.prototype, "_price", void 0);
__decorate([
    PropertyTwoDecorator
], Product.prototype, "title", void 0);
__decorate([
    AccessorDecorator
], Product.prototype, "price", null);
__decorate([
    MethodDecorator,
    __param(0, ParametrOneDecorator),
    __param(1, ParametrTwoDecorator)
], Product.prototype, "getPriceWithTax", null);
console.log("******************|DECORATOR HTML DEYİSİKLİKLER YUXARİ => BAX DECORATOR HTML YƏ|******************");
function WithHtmlTemplate(template, hookId) {
    return function (Constructor) {
        console.log(Constructor);
        return class extends Constructor {
            constructor(..._) {
                super();
                const element = document.getElementById(hookId);
                if (hookId) {
                    element.innerHTML = template;
                    document.querySelector('h4').innerHTML = this.title;
                }
            }
        };
    };
}
let WithHtmlTemplateComponent = class WithHtmlTemplateComponent {
    constructor() {
        this.title = 'Decorator';
    }
};
WithHtmlTemplateComponent = __decorate([
    WithHtmlTemplate(`
        <h3> HTML DECORATOR YARATMAQ 2</h3>
        <h4></h4>
    `, "id")
], WithHtmlTemplateComponent);
let withHtmlTemplate = new WithHtmlTemplateComponent();
console.log("******************|BUTON EXAMPLE => Click Me|******************");
function AutoBindDecorator(target, methodName, description) {
    const orjinalMethod = description.value;
    const adjDescriptions = {
        configurable: true,
        enumerable: true,
        get() { return orjinalMethod.bind(this); }
    };
    return adjDescriptions;
}
class Printer {
    constructor() {
        this.message = "Print messages";
    }
    showMessageWithBind() {
        console.log("message is " + this.message);
    }
    showMessageWithDecoratorAutoBind() {
        console.log("message is " + this.message);
    }
}
__decorate([
    AutoBindDecorator
], Printer.prototype, "showMessageWithDecoratorAutoBind", null);
let printer = new Printer();
const printButton1 = document.querySelector("button");
printButton1.addEventListener("click", printer.showMessageWithBind.bind(printer));
const printButton2 = document.querySelector("#button");
printButton2.addEventListener("click", printer.showMessageWithDecoratorAutoBind);
function onClickMethod() { return printer.showMessageWithBind(); }
const registeredValidators = {};
function Required(target, propertyName) {
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propertyName]: ['reguired'] });
}
function PositiveNumber(target, propertyName) {
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propertyName]: ['positive'] });
}
function validate(obj) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (let propertyName in objValidatorConfig) {
        for (let key of objValidatorConfig[propertyName]) {
            switch (key) {
                case "reguired":
                    isValid = isValid && !!obj[key];
                    break;
                case "positive":
                    isValid = isValid && obj[key] > 0;
                    break;
            }
        }
    }
    return true;
}
class Course {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector("form");
courseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleEl = document.querySelector("#title");
    const priceEl = document.querySelector("#price");
    const title = titleEl.value;
    const price = +priceEl.value;
    const createCourse = new Course(title, price);
    if (!validate(createCourse)) {
        alert("invalit input,plz try again ");
    }
    console.log("createCourse: ", createCourse);
});
