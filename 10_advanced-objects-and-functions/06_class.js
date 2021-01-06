class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`
        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })
        return bio
    }
}
const person2 = new Person('Clancey', 'Turner', 51, ['bathing', 'gardening'])
console.log(person2.getBio())


class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes);
        this.grade = grade;
    }
    updateGrade(change) {
        this.grade += change;
    }
    getBio() {
        const status = this.grade >= 70 ? 'pass' : 'fail';
        return `${this.firstName} is ${status} the class.`
    }
}

const x = new Student('Fazeel', 'Usmani', 24, 87, ['traveling', 'exploring']);
console.log(x);
console.log(x.getBio());