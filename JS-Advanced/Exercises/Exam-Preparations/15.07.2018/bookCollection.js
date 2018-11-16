class BookCollection {
    constructor(shelfGenre, room, shelfCapacity) {
        this.shelfGenre = shelfGenre;
        this.room = room;
        this.shelfCapacity = shelfCapacity;
        this.shelf = [];
    }

    get room () {
       return this._room;
    }

    set room(currentRoom) {
        if(currentRoom === 'livingRoom' || currentRoom === 'bedRoom' || currentRoom === 'closet') {
            this._room = currentRoom;
        } 
        else {
            throw `Cannot have book shelf in ${currentRoom}`;
        }
    }

    get shelfCondition() {
        return Math.max(0, this.shelfCapacity - this.shelf.length);
    }

    addBook(bookName, bookAuthor, genre) {
        let book = {
            bookName,
            bookAuthor,
            genre
        }

        if(this.shelfCapacity > this.shelf.length) {
            this.shelf.push(book);
        } else {
            this.shelf.shift();
            this.shelf.push(book);
        }
        this.shelf.sort((book1, book2) => book1.bookAuthor > book2.bookAuthor);
        return this;
    }

    throwAwayBook(bookName) {
        this.shelf.forEach((book, index) => {
           if(book.bookName === bookName) {
               this.shelf.splice(index, 1);
           } 
        });
    }

    showBooks(genre) {
        let result = '';
        let sortedBooks = this.shelf.filter((book) => {
            return book.genre === genre;
        });
        result += `Results for search "${genre}":\n`

        sortedBooks.forEach((book, index, array) => {
            if(index === array.length - 1) {
                result += `\uD83D\uDCD6 ${book.bookAuthor} - "${book.bookName}"`
            } else {
                result += `\uD83D\uDCD6 ${book.bookAuthor} - "${book.bookName}"\n`
            }
        })
        return result;
    }

    toString() {
        let result = ''
        if(this.shelf.length === 0) {
            return 'It\'s an empty shelf';
        } else {

            result += `"${this.shelfGenre}" shelf in ${this.room} contains:\n`;

            this.shelf.forEach((book) => {
                result += `\uD83D\uDCD6 "${book.bookName}" - ${book.bookAuthor}\n`
            });
        }
        return result;
    }
}

let livingRoom = new BookCollection("Programming", "livingRoom", 5)
    .addBook("Introduction to Programming with C#", "Svetlin Nakov")
    .addBook("Introduction to Programming with Java", "Svetlin Nakov")
    .addBook("Programming for .NET Framework", "Svetlin Nakov");
console.log(livingRoom.toString());



