let arrowFn = (n1: string, n2: string) => console.log(n1+n2);

let arrFn:(n1:string) => void = output => console.log(output);
//let arrFn = output:string => console.log(output); - bele yaza bilmirik Cannot find name 'output'. sehfi olur
let arFn = (output:string) => console.log(output);


//arrFnunction:(n1: string, n2: string) => void arrowFunction Type

let arrFnunction:(n1: string, n2: string) => void = (n1: string, n2: string) => console.log(n1+n2);

//Default (varsayilan eger deyer gelmezse) Function Parametr

function DefaultParameter(n1: number , n2: number = 0): number {
    return n1 + n2;
}

console.log(DefaultParameter(5))       //5 + 0 = 5
/*/ burada funuksianin n2 parametrine biz funuksiani call ederken deyer öturməmişik buna görədə n2 = 0/*/
console.log(DefaultParameter(5,4))    //5 + 4 = 9

/*/ Qeyd funuksianin birinci parametrine default deyer ataya bilmezsiz 
    function DefaultParameter(n1: number  = 0, n2: number): number {
        return n1 + n2;
    } Error funuksianin birinci parametri default deyer veremezsiniz !!!
/*/