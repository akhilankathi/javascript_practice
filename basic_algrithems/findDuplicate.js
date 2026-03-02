function findDuplicates(array) {
    let _arr = []
    let isDuplicate = true;
    for (let index = 0; index < array.length; index++) {
        for (let nestedIndex = 0; nestedIndex < array.length; nestedIndex++) {
            if (array[index] != array[nestedIndex]) {
                isDuplicate = false
            } else {
                isDuplicate = true
            }
        }
        if (!isDuplicate) _arr.push(array[index])

    }
    return _arr
}

console.log(findDuplicates([3, 4, 5, 6, 73, 4]))