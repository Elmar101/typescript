

let add:(...args: number[]) => number = (...numbers: number[]) => {
    return numbers.reduce((acc,value,index,array)=>{return  acc + value + array[index] },0)
}

console.log("function rest params ", add(1,2,3));