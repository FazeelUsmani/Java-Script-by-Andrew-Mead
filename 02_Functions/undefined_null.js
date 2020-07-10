// Undefined
// create variable w.out assigning a IDBCursorWithValue, JS will assign it undefined

let name
console.log(name)

// undefined in Functions
let double = function(x){
    if (x == undefined){
        console.log('Please provide X')
    }
    else{
        console.log(x)
    }
}

double()

// NULL is something we typically assign to a value. Used to clear a variable's value

let fname = 'Fazeel'
console.log(fname)
fname = null
if (fname === null){
    console.log('Name is not set!')
}
