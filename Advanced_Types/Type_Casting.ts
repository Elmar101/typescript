/*/
    const input = document.getElementById("user-input")!;
    input.value = " Hello World ! ";
    => ERROR - Property 'value' does not exist on type 'HTMLElement'.

    bu erroru  type casting ile aradan qaldiraq
----------------------------------------------------------------------------------------------------------------------

    1 ci yol => const input = document.getElementById("user-input")! as HTMLInputElement;
                      input.value = " Hello World ! ";

-----------------------------------------------------------------------------------------------------------------------
    2 ci yol => const input = <HTMLInputElement>document.getElementById("user-input");
                      input.value = " Hello World ! ";
                      
-----------------------------------------------------------------------------------------------------------------------

    3 ci yol => const input = document.getElementById("user-input")!;
                     (input as HTMLInputElement).value = " Hello World ! ";

                                        
-----------------------------------------------------------------------------------------------------------------------
    4 ci yol => const input = document.getElementById("user-input");
                if(input){
                     (input as HTMLInputElement).value = " Hello World ! ";
                }
                                        
-----------------------------------------------------------------------------------------------------------------------
    
/*/

const input1 = document.getElementById("user-input") ! as HTMLInputElement;
      input1.value = " Hello World ! ";

const input2 = <HTMLInputElement>document.getElementById("user-input")!;
      input2.value = " Hi World ! ";

const input3 = document.getElementById("user-input")!;
      (input3 as HTMLInputElement).value = " Hello World ! ";

const input4 = document.getElementById("user-input");
      if(input4){
           (input4 as HTMLInputElement).value = " Hello World ! ";
      }


//****************************************** INDEX PROPERTİES ***************************************/
console.log("************************************** INDEX PROPERTİES **********************************");

interface IErrorContainer {
    //{ email:"Not a valid email" , username: "Must start with a character" }
    [prop: string]: string;
}

const errorBag: IErrorContainer = {
    email: "elmar.amanov10@gmail.com",
    username: "Elmar"
}

console.log(  errorBag.username + " : " + errorBag.email );


//****************************************** FUNCTION OVERLOADING ***************************************/
console.log("************************************** FUNCTION OVERLOADING **********************************");
type CompStrNum = number | string;

function addNumStr(n1: CompStrNum, n2: CompStrNum){
    if(typeof n1 ==='string' || typeof n2 ==='string'){ 
        return n1.toString() +  n2.toString();
    }
    return n1 + n2;
}

let result1 = addNumStr("max", "alert");
console.log( (result1 as string).split("") );

let result2 = addNumStr("max", "alert");
console.log( result2.toString().split("") );

let result3 = addNumStr("max", "alert") as string;
console.log( result3.split("") );

let result4 = addNumStr("max", "alert").toString();
console.log( result4.split("") );

let result5 = addNumStr("max", "alert");
if(typeof result5 === 'string') { console.log( result5.split("") ); }

// bu yollari uzatdiqca uzatmaq olar birde function overload ile meseleni hell ederken

function sumFnc(a: number, b: number): number ;
function sumFnc(a: string, b: string): string ;
function sumFnc(a: string, b: number): string ;
function sumFnc(a: number, b: string): string ;

function sumFnc(a: CompStrNum, b: CompStrNum){
    if(typeof a ==='string' || typeof b ==='string'){ 
        return a.toString() +  b.toString();
    }
    return a + b;
}

let result6 = sumFnc("max","alert");
console.log( result6.split('') );



/******************************************** NULLISH OPERATOR ************************************ */
console.log("************************************* NULLISH OPERATOR *******************************");

let user_UNDEFINED_NAME; //let user_UNDEFINED_NAME = undefined
let store_OR_UNDEFINED_NAME = user_UNDEFINED_NAME || " Varsayilan Ad = Elmar";
console.log("store_OR_UNDEFINED_NAME: ", store_OR_UNDEFINED_NAME); //" Varsayilan Ad = Elmar";

let user_NULL_NAME = null;
let store_OR_NULL_NAME = user_NULL_NAME || " Varsayilan Ad = Elmar";
console.log(" store_OR_NULL_NAME: ", store_OR_NULL_NAME); //" Varsayilan Ad = Elmar";

// || -> or ile işləmlərdə yoxdursa varsayilan dəyəri götürürük
// ama burada məntiqsəl səhf var məsələn biz boş string göndərək

let user_BOSH_STRİNG_NAME = "";
let store_OR_BOSH_STRİNG_NAME = user_BOSH_STRİNG_NAME || " Varsayilan Ad = Elmar";
console.log("store_OR_BOSH_STRİNG_NAME: ", store_OR_NULL_NAME); //" Varsayilan Ad = Elmar";

//|| -> OR ishimize yaramadi buna gore nullish "??"" iki sual => sifir ve ya bosh string gelende undefined qebul etmesin 

let user_NULLISH_NAME = '';
let stor_NULLISH_NAME= user_NULLISH_NAME ?? " Varsayilan Ad = Elmar";
console.log("stor_NULLISH_NAME: ", stor_NULLISH_NAME);// 

let user_NULLISH_UNDEFINED_NAME ;
let stor_NULLISH_UNDEFINED_NAME= user_NULLISH_UNDEFINED_NAME ?? " Varsayilan Ad = Elmar";
console.log("stor_NULLISH_UNDEFINED_NAME: ", stor_NULLISH_UNDEFINED_NAME);//" Varsayilan Ad = Elmar";

let user_NULL_NULLISH_NAME = null;
let store_NULL_NULLISH_NAME = user_NULL_NAME ?? " Varsayilan Ad = Elmar";
console.log("store_NULL_NULLISH_NAME: ",store_NULL_NULLISH_NAME); //" Varsayilan Ad = Elmar";

// && => and optional 

let user_AND_Job = {
    job: {title: 'Front-End', organization: 'Sinam'}
}

let stor_AND_TITLE_NAME= user_AND_Job?.job?.title && user_AND_Job?.job?.title ;
console.log("stor_AND_TITLE_NAME: ", stor_AND_TITLE_NAME);//\















/*/
Geçtiğimiz günlerde JavaScript’in yeni operatörlerinden “Nullish coalescing operator” ile ilgili bir 
blog yazısı yazmıştım. Bu defa da kullanım alanı açısından “Nullish coalescing” ile ilintili bir başka 
operatör olan “Optional chaining” operatöründen bahsedeceğim.
Nasıl kullanıldığına bakmadan evvel yine ilk olarak ihtiyacı tanımlayalım. Diyelim ki bir servise 
yaptığımız istek sonrasında aşağıdaki gibi, programlama dilleri hakkında bilgiler veren bir JSON elde ediyoruz.
let languages = {
    "javaScript": {
      "designedBy": "Brendan Eich",
      "firstRelease": "May 1995",
      "stableRelease": "June 2019"
    },
    "python": {
      "designedBy": "Guido van Rossum",
      "firstRelease": "January 1990",
      "stableRelease": "May 2020"
    }
}
Uygulama içerisindeki kullanım senaryosuna göre de JavaScript dilinin tasarımcı bilgisine erişmek istiyoruz diyelim.
languages.javaScript.designedBy; // Brendan Eich
Normal şartlar altında, yani sonuç içerisinde bir “javaScript” objesi olduğundan ve bu objenin de “designedBy” 
isminde bir özelliğe sahip olduğundan emin olduğumuz durumlarda üstteki gibi bir kullanımla erişim sağlayabiliyoruz.
Diyelim ki sonuç içerisinde JavaScript diline dair bir kayıt olup olmayacağını hatta bir kayıt olsa dahi içerisinde
 tasarımcı bilgisinin olup olmayacağını bilmiyoruz. Bu defa da aşağıdaki gibi bir kondisyonla bu alanların varlığını
  kontrol edip hata (TypeError) almayacağımızdan emin olduktan sonra ilgili veriye erişiyoruz.
if(languages.javaScript && languages.javaScript.designedBy)
  languages.javaScript.designedBy; // Brendan Eich
Örnekte iç içe yalnızca bir obje olmasına rağmen tek bir özelliğin varlığından emin olmak için epey uzun bir

kondisyon yazdık. Çalıştığımız projeler içerisinde yönetmek zorunda kaldığımız veri yapıları bu kadar basit
olmuyor maalesef. Karmaşık özellik isimlerinin ve iç içe daha fazla katmanlı verilerin yer aldığı bir gerçek
 hayat senaryosuna üstteki gibi bir kondisyon uygulanmaya çalışıldığında kodun okunamaz ve kolayca hataya teşne
  hâle gelmesi an meselesi oluyor.
“Optional chaining” (opsiyonel, isteğe bağlı zincirleme) operatörü burada imdadımıza yetişiyor. Varlığından 
emin olmak istediğimiz objenin sonuna ekleyeceğimiz “?.” operatörüyle üstteki kondisyonu sağlamış oluyoruz.
 Bu kullanım sonucunda istediğimiz özelliğe erişebiliyorsak ilgili değeri, erişemiyorsak undefined değerini 
 elde etmiş oluyoruz.
languages.javaScript?.designedBy; // Brendan Eich
languages.php?.designedBy; // undefined
languages.ruby.designedBy; // TypeError
languages.ruby?.designedBy; // undefined
Bu sayede elimizdeki veri ne kadar karmaşık olursa olsun languages.javaScript?.designedBy?.infos?.name gibi 
bir kullanım ile temiz ve okunaklı bir kod yazmış oluyoruz.
Unutmadan, “Optional chaining” de “Nullish coalescing” gibi oldukça yeni bir operatör olduğundan güncel
olmayan tarayıcılarda çalışmayabilir. O yüzden bu operatörleri kullandığımız durumlarda yine kendimizi  
Babel’ın güvenli kollarına atmak en doğrusu.

/*/