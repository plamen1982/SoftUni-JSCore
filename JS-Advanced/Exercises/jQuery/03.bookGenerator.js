// <reference path="globals/jquery/index.d.ts" />

// <div id="wrapper">
//     <div id="book1" style="border: 2px solid blue;">
//         <p class="title">Alice in Wonderland</p>
//         <p class="author">Lewis Carroll</p>
//         <p class="isbn">1111</p>
//         <button>Select</button>
//         <button>Deselect</button>
//     </div>
// </div>

let bookGenerator = (function bookGenerator() {
    let id = 1;
     return function createBook(selector, title, author, isbn) {
        $(selector).append(
                $('<div>').attr('id', `book${id}`)
                .append($('<p>').addClass('title').text(title))
                .append($('<p>').addClass('author').text(author))
                .append($('<p>').addClass('isbn').text(isbn))
                .append($('<button>').text('Select').on('click', select))
                .append($('<button>').text('Deselect').on('click', deselect)));

            function select(e) {
                $(e.target).parent().css('border', '2px solid blue');
            }
        
            function deselect(e) {
                $(e.target).parent().css('border', '');
            }
            
            id += 1;
    }

})();