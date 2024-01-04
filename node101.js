
let books = [];

function addBook(id, title, price, quantity, author) {
    const newBook = {
        id: id,
        title: title,
        price: price,
        quantity: quantity,
        author: author
    };

    books.push(newBook);
    return books;
}

function findBook(searchTag) {
    for(book in books){
        if((book.id == searchTag)||(book.title == searchTag)||(book.author == searchTag)){
           return books.indexOf(book);
        }else{
            return -1;
        }
    }

}

function sellBook(searchTag, quantity, money) {
    if(findBook(searchTag) >= 0){
        if(books[findBook(searchTag)].quantity <= quantity){
            if(books[findBook(searchTag)].price *  books[findBook(searchTag)].quantity > money){
                console.log("not enough money");
            }else{
                console.log("sold");
                books[findBook(searchTag)].quantity =   books[findBook(searchTag)].quantity  - quantity;
            }
            
        }else{
            console.log("not enough books");
        }
    }

}

addBook(0, "Fire", 19, 20, "Maher");
sellBook(0, 4, 1000);