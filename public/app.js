'use strict'

angular.module('flowerApp', [])
 .controller('flowerController', function($scope, $http){
    
    $http.get('http://52.51.81.191:85/getFlowers').
        then(function(response) {
            $scope.list = response.data;
            console.log($scope.data);
           
        });
});
