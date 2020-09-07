(function() {
    'use strict';

    angular
        .module('bookshelfApp')
        .controller('BooksController', BooksController)

    function BooksController(NgTableParams ) {
        var vm = this;

        vm.books = [
            {
                title: 'O Auto da compadecida',
                author: 'autor',
                generos: [
                    'comedia',
                    'satira',
                    'auto'    
                ]
            }, 
            {
                title: 'O Auto da compadecida',
                author: 'autor',
                generos: [
                    'comedia',
                    'satira',
                    'auto'    
                ]
            }, 
            {
                title: 'O Auto da compadecida',
                author: 'autor',
                generos: [
                    'comedia',
                    'satira',
                    'auto'    
                ]
            },
        ]

        vm.booksTable = new NgTableParams( 
            {},
            { dataset: vm.books }
        )
    }
}());