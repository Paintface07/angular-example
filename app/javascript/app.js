'use strict';
angular.module("angularApp", [])
  .controller('rootController', ['$scope', '$http', function($scope, $http) {

    $scope.getStuff = function() {
      $http.get('https://public-crest.eveonline.com/tournaments/')
    };
    
  }]);
