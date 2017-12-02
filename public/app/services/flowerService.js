   (function () {
     'use strict';

      angular.module('flowerApp')
      .service('flowerService', flowerService);

     flowerService.$inject = ['$http'];
     function flowerService($http){

       const service = this;

       service.getFlowers = function() {
          const response = $http({
            method: "GET",
            url: ("http://52.51.81.191:85/getFlowers")
          });

          return response;
       };

   }

   })();