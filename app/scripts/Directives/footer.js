'use strict';

var app = angular.module('anglrApp');

app.directive('footr', function() {

    return {
        restrict: 'C',
        templateUrl: 'views/footer.html',
    };

});
