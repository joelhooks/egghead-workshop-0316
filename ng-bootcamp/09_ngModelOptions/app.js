angular.module('exampleApp', [])
  .controller('ExampleCtrl', function ($http) {
    var example = this;

    example.sortField = 'name';
    example.filterOptions = {
      debounce: 250
    };

    example.updateSortField = function(sortField) {
      if(sortField === example.sortField) {
        sortField = '-' + sortField;
      }
      example.sortField = sortField;
    };

    $http.get('http://www.json-generator.com/api/json/get/cnORtoBisy')
      .then(function successHandler(result) {
        example.people = result.data;
      });

  })
;
