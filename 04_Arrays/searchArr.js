let a = 56
console.log(a)

// Part 1
// indexOf()
const places = ['Hyderabad', 'Delhi', 'Chennai', 'Mumbai', 'Kolkata'];
const index1 = places.indexOf('Chennai');

console.log(index1);

// findIndex()
const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
    }, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
    }, {
    title: 'Office modification',
    body: 'Get a new seat'
    }]
    const index = notes.findIndex(function (note, index) {
    return note.title === 'Habbits to work on'
})
console.log(index) // Will print 1
    

