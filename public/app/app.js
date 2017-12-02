'use strict'

 const flowerArray = [];
   (function () {
     'use strict';

      angular.module('flowerApp', []);

   })();
// const app = angular.module('flowerApp', [])

//   .controller('flowerController', function($scope, $http){
    
   
//     $http.get('http://52.51.81.191:85/getFlowers').
//         then(function(response) {
//             $scope.list = response.data;
//             // console.log('scope.list:', $scope.list);
           
//             flowerArray.push($scope.list);
           
//             $scope.flowers = flowerArray;
//               console.log('scope.flowers:', $scope.flowers);             

//         });

// });

//  app.controller('translateController', function($scope, $http){
    
//     const translateArray =[];
    
//     $http.get('http://52.51.81.191:85/getTranslate').
//         then(function(response) {
//             $scope.translate = response.data;
            
//             translateArray.push($scope.translate);
                
//              console.log('translateArray:', translateArray);
    
//               for(let i = 0; i < flowerArray.length; i++) {
//                   console.log(flowerArray[0].data[i]);
//                   for(let j = 0; j < translateArray.length; j++) {
//                     console.log(translateArray[0].data.he[j]);
//                     if (flowerArray[0].data[i] == translateArray[j]) {
//                       // console.log("flowerArray[0].data[i]");
//                      };
//                     };
//                   };


//             });
          
//         });


