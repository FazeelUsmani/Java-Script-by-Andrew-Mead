const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}
Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}.`
    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
    })
    return bio
}

Person.prototype.getAge = function () {
    let x = this.age;
    return 'age is ' + x;
}

const me = new Person('Fazeel', 'Usmani', 24, ['Biking', 'Table Tennis']);
console.log(me.getBio());
console.log(me.getAge());