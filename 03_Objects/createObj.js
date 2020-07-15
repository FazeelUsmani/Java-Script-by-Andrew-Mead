let myBook = {
    title: 'Crushing It!',
    author: 'Gary Vaynerchuk',
    rate: 240
}

console.log(myBook)
console.log(`${myBook.title} by ${myBook.author} having a price ${myBook.rate}`)

myBook.title = '0 2 1'
console.log(`${myBook.title} by ${myBook.author} having a price ${myBook.rate}`)
console.log(myBook)