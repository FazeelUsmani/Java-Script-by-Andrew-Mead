let f2h = function(fahrenheit){
    const celsius = (fahrenheit - 32) * (5 / 9)
    return celsius
}

let t70 = f2h(70)
console.log(t70)
t70 = Math.floor(t70)
console.log(t70)
let t32 = f2h(32)
console.log(t32)