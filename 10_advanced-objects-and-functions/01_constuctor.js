const Person = function (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

const me = new Person('Fazeel', 'Usmani', 24);
const you = new Person('N', 'T', 23);

console.log(me);
console.log(you);