'use strict';
angular.module("angularApp", [])
  .config(['$httpProvider', function($httpProvider) {

    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.common['Content-Type'] = "application/json";

  }]).controller('rootController', ['$scope', '$http', function($scope, $http) {

    $scope.getStuff = function() {
      $http.get('https://public-crest.eveonline.com/tournaments/').then(
        function(response) {
          $scope.myVal = response.data.items[0].href.name;
        }, function(error) {
          console.log("There was an error.");
        }
      );
    };

    $scope.getFromServer = function() {
      $http.get('http://localhost:8080').then(function(response) {
        $scope.myVal = response.data;
      }, function(error) {
        console.log("ERROR!");
      });
    };

  }]);
