// var are function scoped 

if (true){
    var name = 'Fazeel'
    let age = 26
}

console.log(name)
console.log(age)  // Throws an error

const setupVariables = () => {
    var fname = 'Usmani'
    let myAge = 23
}
setupVariables()
console.log(name)   // Throws an error
console.log(age)    // Throws an error