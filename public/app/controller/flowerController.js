 (function () {
     'use strict';

      angular.module('flowerApp')
      .controller('flowerController', flowerController);;



    flowerController.$inject = ['flowerService', 'languageService','$scope'];
    function flowerController(flowerService, languageService, $scope){
      
      const vm = this;
      vm.flowerList = [];
      
      console.log('vm.flowerList', vm.flowerList);
     

       flowerService.getFlowers()
         .then(function (response){
           const info = response.data;
            vm.flowerList.push(info.data);
   
          });//end of getFlowers call

   
           vm.getTranslation = function() {
            vm.translateList = [];
              console.log('translateList', vm.translateList);

             languageService.getLanguage()
              .then(function (answer){
               vm.translateList.push(answer.data);

               angular.forEach(vm.flowerList, function(value, key){
                  angular.forEach(vm.translateList[0].data.he, function(value2, key2){
                         if(value === value2){
                             console.log('they are the same'); 
                          }
                          else{
                              vm.flowerList.push(value2);                              
                              console.log('Difference is at', key2);
                              console.log('vm.flowerList:', vm.flowerList);
                          }

                    })//end of first forEach   

                  })//end of second forEach    
                       
              });//end of languageService call
                     
            }//end of getTranslation click

     
       }//end of floweController


   })();//end of IFEE  
