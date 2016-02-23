'use strict';
angular.module('anglrApp')
    .controller('DashBoardCtrl', function($scope, $state, LoginService) {
        $scope.fnLogout = function() {
            LoginService.fnReset();
            $state.go('home');
        }

    })
