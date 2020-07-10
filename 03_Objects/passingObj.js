let myBook = {
    title: 'Crushing It!',
    author: 'Gary Vaynerchuk',
    price: 240
}

let otherBook = {
    title: 'Relentless',
    author: 'Tom S. Grover',
    price: 360
}

let getSummary = function(book){
    console.log(`${book.title} by ${book.author} having price ${book.price}`)
}
getSummary(myBook)
getSummary(otherBook)