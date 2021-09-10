
function callbackHandler1(n1: number, n2: number, cb: (param:number) => void ){
    let result: number = n1 + n2;
    cb(result);
}
let returnVoid = ( p: number) => console.log( p );
callbackHandler1(2,5,returnVoid )
callbackHandler1(4,5,( p: number) => console.log( p ));

//=>  ex 2 ------------------------------------------------------

let data: number ;

function callbackHandler2(n1: number, n2: number, cb: (param:number) => number ){
    let result: number = n1 + n2;
    data = cb(result);
}

let returnNum = ( p: number) => { return p } ;

callbackHandler2(5,7, returnNum);

console.log("data is " , data);

//-------------------- Function Type ------------------
//type CustomTypes = number | string;

function callbackHandler3(n1:number,  n2: number,cb: Function){
    let result = n1 + n2;
   return cb(result);
} 

let d = callbackHandler3(10,9, returnNum);
console.log( "d", d)
