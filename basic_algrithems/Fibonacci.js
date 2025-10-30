const fibonacci = (num)=>{

    //  example 10 
    //  0 1 1 2 3 5 8 13 21 34  
let fibArr = [0,1]
    for ( let i = 2 ; i < num ; i++){
       fibArr[i] = fibArr[i-1] +  fibArr[i-2]
    }
    return fibArr

}

console.log(fibonacci(10))

function fibonacciWithRecursion (num){
if(num <= 1 ) return num
return fibonacciWithRecursion(num - 1) +  fibonacciWithRecursion(num - 2)
}