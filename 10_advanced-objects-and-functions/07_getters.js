const human = {
    firstName: 'Alexis',
    lastName: 'Turner',
    get name() {
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(human.name) // Prints "Alexis Turner"
