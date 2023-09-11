//map
//Eg01

let arr1 = [10,20,30,40,50]

console.log(arr1)

console.log(arr1.map((element,index) => {
    return element*2
}))

//Eg02
let arr2 = [1,2,3,4,5]
console.log(arr2.map((element,index)=>{
    return '$' + element
}))

//Eg03
let arr31 = [1,2,3]
let arr32 = ['one','two','three']

console.log(arr31.map((element,index)=> {
    return [element,arr32[index]]
}))


