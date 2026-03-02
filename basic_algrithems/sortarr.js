function sortArray(arr) {

    let length = arr.length

    for (let index = 0; index < length; index++) {
        for (let nestedIndex = 0; nestedIndex < length; nestedIndex++) {
            if(arr[nestedIndex] >  arr[nestedIndex +1]){
                [arr[nestedIndex] ,  arr[nestedIndex +1]] = [arr[nestedIndex +1],  arr[nestedIndex]]
            }
            
        }
    }
    return arr
    
}

console.log(sortArray([3,4,664,8,2,35,8]))