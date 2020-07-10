let add = function(x,y,z){
    return x + y + z
}

let result = add(10,20,30)
console.log(result)


console.log('Setting default values for arguments')
let getMarks = function(name = 'Anonymous', marks = 0){
    return `Name : ${name} Marks : ${marks}`
}
let text = getMarks()
console.log(text)
text = getMarks('Somebody', 58)
console.log(text)
