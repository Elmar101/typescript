/*/
    const input = document.getElementById("user-input")!;
    input.value = " Hello World ! ";
    => ERROR - Property 'value' does not exist on type 'HTMLElement'.

    bu erroru  type casting ile aradan qaldiraq
----------------------------------------------------------------------------------------------------------------------

    1 ci yol => const input = document.getElementById("user-input")! as HTMLInputElement;
                      input.value = " Hello World ! ";

-----------------------------------------------------------------------------------------------------------------------
    2 ci yol => const input = <HTMLInputElement>document.getElementById("user-input")!;
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

/* const input1 = document.getElementById("user-input") ! as HTMLInputElement;
      input1.value = " Hello World ! ";

const input2 = <HTMLInputElement>document.getElementById("user-input")!;
      input2.value = " Hi World ! ";

const input3 = document.getElementById("user-input")!;
      (input3 as HTMLInputElement).value = " Hello World ! ";

const input4 = document.getElementById("user-input");
      if(input4){
           (input4 as HTMLInputElement).value = " Hello World ! ";
      } */


//****************************************** INDEX PROPERT??ES ***************************************/
console.log("************************************** INDEX PROPERT??ES **********************************");

interface IErrorContainer {
    //{ email:"Not a valid email" , username: "Must start with a character" }
    [prop: string]: string;
}

const errorBag: IErrorContainer = {
    email: "elmar.amanov10@gmail.com",
    username: "Elmar",
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
console.log("************************************* or ||  *******************************");

let user_UNDEFINED_NAME; //let user_UNDEFINED_NAME = undefined
let store_OR_UNDEFINED_NAME = user_UNDEFINED_NAME || " Varsayilan Ad = Elmar";
console.log("store_OR_UNDEFINED_NAME: ", store_OR_UNDEFINED_NAME); //" Varsayilan Ad = Elmar";

let user_NULL_NAME = null;
let store_OR_NULL_NAME = user_NULL_NAME || " Varsayilan Ad = Elmar";
console.log(" store_OR_NULL_NAME: ", store_OR_NULL_NAME); //" Varsayilan Ad = Elmar";

// || -> or ile i??l??ml??rd?? yoxdursa varsayilan d??y??ri g??t??r??r??k yeni 0 || 1 => 1 (null ve undefined sifr demekdir)
// ama burada m??ntiqs??l s??hf var m??s??l??n biz bo?? string g??nd??r??k

let user_BOSH_STR??NG_NAME = "";
let store_OR_BOSH_STR??NG_NAME = user_BOSH_STR??NG_NAME || " Varsayilan Ad = Elmar";
console.log("store_OR_BOSH_STR??NG_NAME: ", store_OR_NULL_NAME); //" Varsayilan Ad = Elmar";

//|| -> OR ishimize yaramadi buna gore nullish "??"" iki sual => sifir ve ya bosh string gelende undefined qebul etmesin 
/*/
    ?? => '' ve ya 0 da undefined qebul etmes bo?? stringi ve ya sifri bize qaytarsin 
/*/
console.log("************************************* NULLISH OPERATOR *******************************");

let user_NULLISH_NAME = '';
let stor_NULLISH_NAME= user_NULLISH_NAME ?? " Varsayilan Ad = Elmar";
console.log("stor_NULLISH_NAME: ", stor_NULLISH_NAME);// 

let user_NULLISH_UNDEFINED_NAME ;
let stor_NULLISH_UNDEFINED_NAME= user_NULLISH_UNDEFINED_NAME ?? " Varsayilan Ad = Elmar";
console.log("stor_NULLISH_UNDEFINED_NAME: ", stor_NULLISH_UNDEFINED_NAME);//" Varsayilan Ad = Elmar";

let user_NULL_NULLISH_NAME = null;
let store_NULL_NULLISH_NAME = user_NULL_NAME ?? " Varsayilan Ad = Elmar";
console.log("store_NULL_NULLISH_NAME: ",store_NULL_NULLISH_NAME); //" Varsayilan Ad = Elmar";

let eded = 0;
let storer_OR_EDED = eded || 1;
console.log("storer_OR_EDED : ",storer_OR_EDED);// 1

let storer_NULLISH_EDED = eded ?? 1;
console.log("storer_NULLISH_EDED : ",storer_NULLISH_EDED);// 0
// && => and optional 

let user_AND_Job = {
    job: {title: 'Front-End', organization: 'Sinam'}
}

let stor_AND_TITLE_NAME= user_AND_Job?.job?.title && user_AND_Job?.job?.title ;
console.log("stor_AND_TITLE_NAME: ", stor_AND_TITLE_NAME);// Front-End















/*/
Ge??ti??imiz g??nlerde JavaScript???in yeni operat??rlerinden ???Nullish coalescing operator??? ile ilgili bir 
blog yaz??s?? yazm????t??m. Bu defa da kullan??m alan?? a????s??ndan ???Nullish coalescing??? ile ilintili bir ba??ka 
operat??r olan ???Optional chaining??? operat??r??nden bahsedece??im.
Nas??l kullan??ld??????na bakmadan evvel yine ilk olarak ihtiyac?? tan??mlayal??m. Diyelim ki bir servise 
yapt??????m??z istek sonras??nda a??a????daki gibi, programlama dilleri hakk??nda bilgiler veren bir JSON elde ediyoruz.
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
Uygulama i??erisindeki kullan??m senaryosuna g??re de JavaScript dilinin tasar??mc?? bilgisine eri??mek istiyoruz diyelim.
languages.javaScript.designedBy; // Brendan Eich
Normal ??artlar alt??nda, yani sonu?? i??erisinde bir ???javaScript??? objesi oldu??undan ve bu objenin de ???designedBy??? 
isminde bir ??zelli??e sahip oldu??undan emin oldu??umuz durumlarda ??stteki gibi bir kullan??mla eri??im sa??layabiliyoruz.
Diyelim ki sonu?? i??erisinde JavaScript diline dair bir kay??t olup olmayaca????n?? hatta bir kay??t olsa dahi i??erisinde
 tasar??mc?? bilgisinin olup olmayaca????n?? bilmiyoruz. Bu defa da a??a????daki gibi bir kondisyonla bu alanlar??n varl??????n??
  kontrol edip hata (TypeError) almayaca????m??zdan emin olduktan sonra ilgili veriye eri??iyoruz.
if(languages.javaScript && languages.javaScript.designedBy)
  languages.javaScript.designedBy; // Brendan Eich
??rnekte i?? i??e yaln??zca bir obje olmas??na ra??men tek bir ??zelli??in varl??????ndan emin olmak i??in epey uzun bir

kondisyon yazd??k. ??al????t??????m??z projeler i??erisinde y??netmek zorunda kald??????m??z veri yap??lar?? bu kadar basit
olmuyor maalesef. Karma????k ??zellik isimlerinin ve i?? i??e daha fazla katmanl?? verilerin yer ald?????? bir ger??ek
 hayat senaryosuna ??stteki gibi bir kondisyon uygulanmaya ??al??????ld??????nda kodun okunamaz ve kolayca hataya te??ne
  h??le gelmesi an meselesi oluyor.
???Optional chaining??? (opsiyonel, iste??e ba??l?? zincirleme) operat??r?? burada imdad??m??za yeti??iyor. Varl??????ndan 
emin olmak istedi??imiz objenin sonuna ekleyece??imiz ????.??? operat??r??yle ??stteki kondisyonu sa??lam???? oluyoruz.
 Bu kullan??m sonucunda istedi??imiz ??zelli??e eri??ebiliyorsak ilgili de??eri, eri??emiyorsak undefined de??erini 
 elde etmi?? oluyoruz.
languages.javaScript?.designedBy; // Brendan Eich
languages.php?.designedBy; // undefined
languages.ruby.designedBy; // TypeError
languages.ruby?.designedBy; // undefined
Bu sayede elimizdeki veri ne kadar karma????k olursa olsun languages.javaScript?.designedBy?.infos?.name gibi 
bir kullan??m ile temiz ve okunakl?? bir kod yazm???? oluyoruz.
Unutmadan, ???Optional chaining??? de ???Nullish coalescing??? gibi olduk??a yeni bir operat??r oldu??undan g??ncel
olmayan taray??c??larda ??al????mayabilir. O y??zden bu operat??rleri kulland??????m??z durumlarda yine kendimizi  
Babel?????n g??venli kollar??na atmak en do??rusu.

/*/