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
var _a, _b;
var input1 = document.getElementById("user-input");
input1.value = " Hello World ! ";
var input2 = document.getElementById("user-input");
input2.value = " Hi World ! ";
var input3 = document.getElementById("user-input");
input3.value = " Hello World ! ";
var input4 = document.getElementById("user-input");
if (input4) {
    input4.value = " Hello World ! ";
}
//****************************************** INDEX PROPERTİES ***************************************/
console.log("************************************** INDEX PROPERTİES **********************************");
var errorBag = {
    email: "elmar.amanov10@gmail.com",
    username: "Elmar"
};
console.log(errorBag.username + " : " + errorBag.email);
//****************************************** FUNCTION OVERLOADING ***************************************/
console.log("************************************** FUNCTION OVERLOADING **********************************");
function addNumStr(n1, n2) {
    if (typeof n1 === 'string' || typeof n2 === 'string') {
        return n1.toString() + n2.toString();
    }
    return n1 + n2;
}
var result1 = addNumStr("max", "alert");
console.log(result1.split(""));
var result2 = addNumStr("max", "alert");
console.log(result2.toString().split(""));
var result3 = addNumStr("max", "alert");
console.log(result3.split(""));
var result4 = addNumStr("max", "alert").toString();
console.log(result4.split(""));
var result5 = addNumStr("max", "alert");
if (typeof result5 === 'string') {
    console.log(result5.split(""));
}
function sumFnc(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
var result6 = sumFnc("max", "alert");
console.log(result6.split(''));
/******************************************** NULLISH OPERATOR ************************************ */
console.log("************************************* NULLISH OPERATOR *******************************");
var user_UNDEFINED_NAME; //let user_UNDEFINED_NAME = undefined
var store_OR_UNDEFINED_NAME = user_UNDEFINED_NAME || " Varsayilan Ad = Elmar";
console.log("store_OR_UNDEFINED_NAME: ", store_OR_UNDEFINED_NAME); //" Varsayilan Ad = Elmar";
var user_NULL_NAME = null;
var store_OR_NULL_NAME = user_NULL_NAME || " Varsayilan Ad = Elmar";
console.log(" store_OR_NULL_NAME: ", store_OR_NULL_NAME); //" Varsayilan Ad = Elmar";
// || -> or ile işləmlərdə yoxdursa varsayilan dəyəri götürürük
// ama burada məntiqsəl səhf var məsələn biz boş string göndərək
var user_BOSH_STRİNG_NAME = "";
var store_OR_BOSH_STRİNG_NAME = user_BOSH_STRİNG_NAME || " Varsayilan Ad = Elmar";
console.log("store_OR_BOSH_STRİNG_NAME: ", store_OR_NULL_NAME); //" Varsayilan Ad = Elmar";
//|| -> OR ishimize yaramadi buna gore nullish "??"" iki sual => sifir ve ya bosh string gelende undefined qebul etmesin 
var user_NULLISH_NAME = '';
var stor_NULLISH_NAME = user_NULLISH_NAME !== null && user_NULLISH_NAME !== void 0 ? user_NULLISH_NAME : " Varsayilan Ad = Elmar";
console.log("stor_NULLISH_NAME: ", stor_NULLISH_NAME); // 
var user_NULLISH_UNDEFINED_NAME;
var stor_NULLISH_UNDEFINED_NAME = user_NULLISH_UNDEFINED_NAME !== null && user_NULLISH_UNDEFINED_NAME !== void 0 ? user_NULLISH_UNDEFINED_NAME : " Varsayilan Ad = Elmar";
console.log("stor_NULLISH_UNDEFINED_NAME: ", stor_NULLISH_UNDEFINED_NAME); //" Varsayilan Ad = Elmar";
var user_NULL_NULLISH_NAME = null;
var store_NULL_NULLISH_NAME = user_NULL_NAME !== null && user_NULL_NAME !== void 0 ? user_NULL_NAME : " Varsayilan Ad = Elmar";
console.log("store_NULL_NULLISH_NAME: ", store_NULL_NULLISH_NAME); //" Varsayilan Ad = Elmar";
// && => and optional 
var user_AND_Job = {
    job: { title: 'Front-End', organization: 'Sinam' }
};
var stor_AND_TITLE_NAME = ((_a = user_AND_Job === null || user_AND_Job === void 0 ? void 0 : user_AND_Job.job) === null || _a === void 0 ? void 0 : _a.title) && ((_b = user_AND_Job === null || user_AND_Job === void 0 ? void 0 : user_AND_Job.job) === null || _b === void 0 ? void 0 : _b.title);
console.log("stor_AND_TITLE_NAME: ", stor_AND_TITLE_NAME); //
