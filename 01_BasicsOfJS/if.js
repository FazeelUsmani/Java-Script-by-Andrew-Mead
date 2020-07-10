let x = 34
if (x % 2 == 0){
    console.log('This is a even number')
}

let age = 26
let isChild = age <= 8
let isAdult = age >= 18

if (isChild){
    console.log('Woohoo! You\'re a child. You get discount')
}
else if (isAdult){
    console.log('Sorry! pal no discount for you')
}
else{
    console.log('Welcome!')
}