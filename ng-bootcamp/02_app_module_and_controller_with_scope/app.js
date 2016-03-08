angular.module('example', [])
  .controller('ExampleCtrl', function ($scope) {
    $scope.message = "INITIALIZED IN CTRL " + Math.random();
    console.log($scope)
  })
;
