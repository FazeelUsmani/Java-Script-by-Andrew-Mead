let myAccount = {
    name: 'Fazeel Usmani',
    expenses: 0,
    income: 0
}

let addExpense = function(account, amount){
    account.expenses += amount
    console.log(account)
}

console.log(myAccount)
addExpense(myAccount, 2000)
console.log(myAccount)
