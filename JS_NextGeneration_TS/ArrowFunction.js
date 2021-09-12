var arrowFn = function (n1, n2) { return console.log(n1 + n2); };
var arrFn = function (output) { return console.log(output); };
//let arrFn = output:string => console.log(output); - bele yaza bilmirik Cannot find name 'output'. sehfi olur
var arFn = function (output) { return console.log(output); };
//arrFnunction:(n1: string, n2: string) => void arrowFunction Type
var arrFnunction = function (n1, n2) { return console.log(n1 + n2); };
//Default (varsayilan eger deyer gelmezse) Function Parametr
function DefaultParameter(n1, n2) {
    if (n2 === void 0) { n2 = 0; }
    return n1 + n2;
}
console.log(DefaultParameter(5)); //5 + 0 = 5
/*/ burada funuksianin n2 parametrine biz funuksiani call ederken deyer öturməmişik buna görədə n2 = 0/*/
console.log(DefaultParameter(5, 4)); //5 + 4 = 9
/*/ Qeyd funuksianin birinci parametrine default deyer ataya bilmezsiz
    function DefaultParameter(n1: number  = 0, n2: number): number {
        return n1 + n2;
    } Error funuksianin birinci parametri default deyer veremezsiniz !!!
/*/ 
