let grade = function(marks){
    if (marks >= 75){
        return 'A'
    }
    else if (marks >= 60){
        return 'B'
    }
    else if (marks >= 35){
        return 'C'
    }
    else{
        return 'Fail'
    }
}

let marks = grade(56)
console.log(`You got ${marks} grade`)