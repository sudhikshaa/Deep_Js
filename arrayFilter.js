//Eg01
let arr1=[10,20,30,40,50]

console.log(arr1.filter((element,index)=> {
    return element > 30
}))

//Eg02
let arr2 = [10,100,20,200,30,300,40,400,50,500]

console.log(arr2.filter((element,index)=>{
    return element >= 100
}))

//Eg03
let arr3 = [10,20,30,40,50]

console.log(arr3.filter((element,index)=>{
    return element > 20
}).map((element,index)=>{
    return element * 10
}))

//Eg04
let arr4 = [1,2,3,4,5]

console.log(arr4.reduce((fv,mv)=>{
    return fv+mv
}))

console.log(arr4.reduceRight((fv,mv)=>{
    return fv+mv
}))

let arr5 = [1,2,3,4,'5']
console.log(arr5.reduce((fv,mv)=>{
    return fv+mv
}))

console.log(arr5.reduceRight((fv,mv)=>{
    return fv+mv
}))
