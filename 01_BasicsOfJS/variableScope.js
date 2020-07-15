// Java Script uses lexical scoping, also known as static scoping

let name = 'Fazeel'
let getName = function(){
    console.log(name)
    name = 'Usmani'
    console.log(name)   
}
console.log(name)   
getName()


// Shadowing 
console.log('Shadowing')
let score = 5
let getScore = function(){
    let score = 34
    return `Score : ${score}`
}

let result = getScore()
console.log(result)  // 34
console.log(score)   // 5

// Leaked Globals
console.log('Leaked Globals')
let getScore1 = function() {
    if (1 < 2){
        score = 989
    }
    console.log(score)
}

getScore1()
console.log(score)

console.log('\nNo leaked global --> using let in local scope')
console.log('Leaked Globals')
let getScore2 = function() {
    let runs
    if (1 < 2){
        runs = 50
    }
    console.log(runs)
}

getScore2()
// console.log(runs) // Error because of leaked globals
