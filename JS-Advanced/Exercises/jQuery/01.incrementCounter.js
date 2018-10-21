/// <reference path="../typings/globals/jquery/index.d.ts" />

function increment (selector) {
    $selector = $(selector);

    $selector
        .append($('<textarea>').addClass('counter').attr('disabled', true).val('0'))
        .append($('<button>').addClass('btn').attr('id', 'incrementBtn').text('Increment').on('click', incrementValue))
        .append($('<button>').addClass('btn').attr('id', 'addBtn').text('Add').on('click', addToList))
        .append($('<ul>').addClass('results'));

        function incrementValue() {
            console.log($selector.first())
            $selector.children(0).val(+$('.counter').val() + 1);
        }

        function addToList() {
            $('.results').append($('<li>').text($('.counter').val()))
        }
}