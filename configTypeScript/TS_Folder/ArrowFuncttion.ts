let arrowFn = (n1: string, n2: string) => console.log(n1+n2);

let arrFn:(n1:string) => void = output => console.log(output);
//let arrFn = output:string => console.log(output); - bele yaza bilmirik Cannot find name 'output'. sehfi olur
let arFn = (output:string) => console.log(output);


//arrFnunction:(n1: string, n2: string) => void arrowFunction Type

let arrFnunction:(n1: string, n2: string) => void = (n1: string, n2: string) => console.log(n1+n2);