 app.controller('translateController', function($scope, $http){
    
    $http.get('http://52.51.81.191:85/getTranslate').
        then(function(response) {
            $scope.translate = response.data;
            console.log($scope.translate);

        });

});

