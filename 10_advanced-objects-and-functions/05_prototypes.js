
// Prototype chain for various JS values:-

// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

const product = 'Computer';
console.log(product.toLowerCase());

const product1 = new String('Computer');
console.log(product1.toLowerCase());