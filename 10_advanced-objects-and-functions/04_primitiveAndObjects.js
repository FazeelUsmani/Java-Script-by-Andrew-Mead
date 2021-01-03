// myObject --> Object.prototype --> null
const myObject = {}
console.log(myObject.hasOwnProperty('doesNotExist')) // Will print false

const myObject1 = new Object({})
console.log(myObject1.hasOwnProperty('doesNotExist')) // Will print false

