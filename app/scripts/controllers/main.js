'use strict';

/**
 * @ngdoc function
 * @name awsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the awsApp
 */
angular.module('awsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
