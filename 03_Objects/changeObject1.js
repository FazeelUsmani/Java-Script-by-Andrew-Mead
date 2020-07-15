console.log('To print different things')
let myAccount1 = {
    name: 'Andrew',
    expense: 0,
    income: 500
}

let addExpense = function(account, amount){
    console.log(account)
    account = {}
    account.age = 324
    console.log(account)
}

addExpense(myAccount1, 5000)
console.log(myAccount1)