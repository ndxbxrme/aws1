'use strict';

/**
 * @ngdoc function
 * @name awsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the awsApp
 */
angular.module('awsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
