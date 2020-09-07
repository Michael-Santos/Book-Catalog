(function() {
    'use strict';
    angular.module('bookshelfApp.routes', [
        'ngRoute'
    ])
    .config(config)

    console.log('sakldjlaskjda 123 ')

    function config ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'components/books/books.html',
                controller: 'BooksController',
                controllerAs: 'vm'
            })
            .otherwise( {
                redirectTo: '/'
            });
    }
})();