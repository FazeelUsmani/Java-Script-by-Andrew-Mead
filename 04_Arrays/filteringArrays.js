// const todos = [{
//     text: 'Order cat food',
//     completed: false
//     }, {
//     text: 'Clean kitchen',
//     completed: true
//     }, {
//     text: 'Do work',
//     completed: false
//}]

// const getThingsToDo = function (todos) {
//     return todos.filter(function (todo) {
//     return !todo.completed;
//     })
// }

// console.log(getThingsToDo(todos))

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 3);

console.log(result);


const todos = [{
    text: 'Order cat food',
    completed: false
    }, {
    text: 'Clean kitchen',
    completed: true
    }, {
    text: 'Do work',
    completed: false
}]
    
const ans = todos.filter (todos => todos.completed === false);
