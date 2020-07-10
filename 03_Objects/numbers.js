let num = 265.65419

console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

console.log('Generating a random number ')
let min = 1
let max = 100
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

console.log('Random number is ' + randomNum)