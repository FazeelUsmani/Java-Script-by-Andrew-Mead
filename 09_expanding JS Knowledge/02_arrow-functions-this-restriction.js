// Arrow function doesn't bind this
const pet = {
    name: 'Hal',
    getGreeting: () => {
    return `Hello ${this.name}!`
    }
}
console.log(pet.getGreeting())   // so undefined

const animal = {
    name = 'tiger',
    greet: () {
        return 'Hello ${this.name}!';
    }
}
console.log(animal.greet());

