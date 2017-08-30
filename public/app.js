'use strict'

const app = angular.module('flowerApp', [])


  .controller('flowerController', function($scope, $http){
    
    const flowerArray = [];
    
    $http.get('http://52.51.81.191:85/getFlowers').
        then(function(response) {
            $scope.list = response.data;
            // console.log('scope.list:', $scope.list);
           
            flowerArray.push($scope.list);
           
            $scope.flowers = flowerArray;
              // console.log('scope.flowers:', $scope.flowers);
      
        });

});

 app.controller('translateController', function($scope, $http){
    
    $http.get('http://52.51.81.191:85/getTranslate').
        then(function(response) {
            $scope.translate = response.data;
            // console.log($scope.translate);

        });

      function translatePage(){
        var translatedItem = this;

        

    };


});

