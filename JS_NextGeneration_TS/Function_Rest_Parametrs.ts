

let addFunction:(...args: number[]) => number = (...numbers: number[]) => {
    return numbers.reduce((acc,value,index,array)=>{return  acc + value + array[index] },0)
}

console.log("function rest params ", addFunction(1,2,3));