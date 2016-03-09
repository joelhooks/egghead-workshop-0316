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

  .constant('BASE_API_URL', 'http://www.json-generator.com/api/json/get/')
  .constant('APP_CONFIG', {
    apiUrl: '',
    magicNum: 314
  })

  .controller('ExampleCtrl', function ($http, BASE_API_URL, APP_CONFIG) {
    var example = this;

    $http.get(BASE_API_URL + 'cnORtoBisy')
      .then(function successHandler(result) {
        example.people = result.data;
      });
  })
;
