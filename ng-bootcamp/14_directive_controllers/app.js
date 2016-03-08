angular.module('exampleApp', [])
  .directive('peopleList', function() {
    return {
      restrict: 'E',
      scope: {
        people: '='
      },
      templateUrl: 'people-list.html',
      controller: 'PeopleListCtrl as peopleList'
    }; // Directive Definition Object DDO
  })

  .controller('PeopleListCtrl', function PeopleListCtrl() {
    var peopleList = this;

    peopleList.sortField = 'name';
    peopleList.filterOptions = {
      debounce: 250
    };

    peopleList.updateSortField = function (sortField) {
      if (sortField === peopleList.sortField) {
        sortField = '-' + sortField;
      }
      peopleList.sortField = sortField;
    };
  })

  .controller('ExampleCtrl', function ($http) {
    var example = this;

    $http.get('http://www.json-generator.com/api/json/get/cnORtoBisy')
      .then(function successHandler(result) {
        example.people = result.data;
      });
  })
;
