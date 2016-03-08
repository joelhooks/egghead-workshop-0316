angular.module('exampleApp', [])
  .controller('ExampleCtrl', function ($http) {
    var example = this;

    $http.get('http://www.json-generator.com/api/json/get/cnORtoBisy')
      .then(function successHandler(result) {
        example.people = result.data;
      });

  })
;
