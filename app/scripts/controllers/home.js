'use strict';

/**
 * @ngdoc function
 * @name anglrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the anglrApp
 */
angular.module('anglrApp')
  .controller('HomeCtrl', function ($scope,$state) {
   $scope.fnStateChange = function(){
   	$state.go('login');
   };
  });
