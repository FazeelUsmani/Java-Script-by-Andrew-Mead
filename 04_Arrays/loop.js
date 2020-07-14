nums = [1,2,3,4]

// callback function - passing a function into a function

const todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work',
'Exercise']

todos.forEach(function(todo, index) {
    const num = index + 1
    console.log(`${num}. ${todo}`)
})

// Normal for loop
for (let cnt = 0; cnt < nums.length; ++cnt)
    console.log(cnt+1)

