// Find two numbers whose sum equals target. 

/*
🔹 Preconditions
Array must be sorted (ascending order).
If not sorted → either:
Sort it first O(n log n) 

🚀 Key Logic

Initialize two pointers:
left = 0
right = arr.length - 1
Loop while left < right
Calculate sum = arr[left] + arr[right]

Compare:
If sum === target → return result
If sum < target → move left++
If sum > target → move right--
If loop ends → No pair found

*/

function twoSumSorted(arr, target) {
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        const sum = arr[left] + arr[right]
        if (sum === target) {
            return [arr[left], arr[right]]
        } else if( sum < target){
            left++
        } else {
            right--
        }
    }
    return null
}

console.log(twoSumSorted([1,2,3,4,5,6,7], 9))