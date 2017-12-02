 (function () {
     'use strict';

      angular.module('flowerApp')
      .service('languageService', languageService);

     languageService.$inject = ['$http'];
     function languageService($http){

       const service = this;

       service.getLanguage = function() {
          const answer = $http({
            method: "GET",
            url: ("http://52.51.81.191:85/getTranslate")
          });

          return answer;
       };

   }

   })();