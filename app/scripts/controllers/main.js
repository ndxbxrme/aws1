'use strict';

/**
 * @ngdoc function
 * @name awsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the awsApp
 */
angular.module('awsApp')
    .controller('MainCtrl', function ($scope, messageList) {
        $scope.message = null;
        $scope.messages = messageList;
        $scope.addMessage = function(newName,newPrice,newImg) {
            if(newName&&newPrice&&newImg) {
                if($scope.message) {
                    angular.extend($scope.message, {name: newName, price: newPrice, img: newImg});
                    $scope.messages.$save($scope.message);
                }
                else {
                    $scope.messages.$add({name: newName, price: newPrice, img: newImg});   
                }
            }
        };
        $scope.removeItem = function(m) {
            $scope.message = m;  
            $scope.newName = m.name;
            $scope.newPrice = m.price;
            $scope.newImg = m.img;
        };
    });
