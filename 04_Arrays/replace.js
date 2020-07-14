const nums =  [1,2,3,4,5,6]


console.log(nums)
nums.splice(4, 0, 200)    // Insertion (index, insert, value)  0 - insert, 1 - replace
console.log(nums)

nums.splice(3,1,300)  // Replace  (index, replace, value)
console.log(nums)