'use strict';

var app = angular.module('anglrApp');

app.directive('headr', function() {

    return {
        restrict: 'C',
        templateUrl: 'views/head.html',
    };

});
