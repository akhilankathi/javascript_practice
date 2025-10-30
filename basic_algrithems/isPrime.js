//  check for the given number is prime or not 

//  it should be divisbale by itself and 1 only

//  we can check with suareroot also 


const isPrimeFunc = (num)=>{

    if(num < 2)  return false 
    for ( let i = 2 ; i <= Math.sqrt(num) ; i++){
        if ( num % i === 0){
            return false 
        }
    }

    //    if(num < 2)  return false 
    // if(num == 2 || num == 3)  return true

    //   for ( let i = 3 ; i < num ; i++){
    //     if ( num % i === 0){
    //         return false 
    //     }
    // }
    return true

}

// console.log(isPrimeFunc(10))
// console.log(isPrimeFunc(7))
// console.log(isPrimeFunc(19))
// console.log(isPrimeFunc(13))

const filterPrimeNumbers = (arr)=>{
let filteredArr =[]
    for ( let i = 0 ; i < arr.length - 1 ; i++){
        if(isPrimeFunc(arr[i])){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr
}

console.log(filterPrimeNumbers([13,34,5,6,9,12]))