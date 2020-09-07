(function() {
    'use strict';

    angular
        .module('bookshelfApp', [ 'ngRoute' ])
        .config(config);
    
    function config ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'components/books/book.html',
                controller: 'BookController as book'
            })
            .otherwise( {
                redirectTo: '/'
            });
    }   
})();