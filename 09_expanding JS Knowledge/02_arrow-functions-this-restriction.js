// Arrow function doesn't bind this
const pet = {
    name: 'Hal',
    getGreeting: () => {
    // return `Hello ${this.name}!`   // throws error if uncomment
    }
};


console.log(pet.getGreeting());   // so undefined


// To bind use normal function
const animal = {
    name: 'tiger',
    greet() {
        return `Hello ${this.name}!`
    }
}
console.log(animal.greet());


// Arrow functions do not bind arguments either
const add1 = () => {
    return arguments[0] + arguments[1];
}

console.log(add1(10, 20, 30, 40));


// works with normal function
const addition = function() {
    return arguments[0] + arguments[1];
}
console.log(addition(10, 12, 14, 16));