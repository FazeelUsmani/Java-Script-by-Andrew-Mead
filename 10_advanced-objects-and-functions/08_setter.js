const human = {
    firstName: 'Alexis',
    lastName: 'Turner',
    get name() {
        return `${this.firstName} ${this.lastName}`
    },
    set name(name) {
        const names = name.trim().split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}
human.name = ' Andrew Mead '
console.log(human.firstName) // Prints "Andrew"
console.log(human.lastName) // Prints "Mead"