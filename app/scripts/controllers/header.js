'use strict';

/**
 * @ngdoc function
 * @name anglrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the anglrApp
 */
angular.module('anglrApp')
    .controller('HeadCtrl', function($scope, LoginService) {
        $scope.fnData = function() {
            $scope.username = LoginService.fnGetUserDetails();            
        }

    });
