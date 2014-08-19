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
        var removed = false;
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
        $scope.editItem = function(m) {
            if(!removed) {
                $scope.message = m;  
                $scope.newName = m.name;
                $scope.newPrice = m.price;
                $scope.newImg = m.img;
            } else {
                removed = false;
            }
        };
        $scope.removeItem = function(m) {
            $scope.messages.$remove(m);
            removed = true;
        };
    });
