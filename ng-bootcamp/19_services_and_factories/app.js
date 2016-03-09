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

  .controller('ExampleCtrl', function (peopleService) {
    var example = this;

    peopleService.getPeople().then(function(people) {
      console.log(people);
      example.people = people;
    })
  })

  .service('peopleService', function($http, BASE_API_URL, Person) {
    var peopleService = this;

    peopleService.getPeople = function() {
      return $http.get(BASE_API_URL + 'cnORtoBisy')
        .then(function successHandler(result) {
          // do any amount work
          return result.data.map(function(person) {
            return new Person(person);
          });
        });
    }
  })

  .factory('Person', function() {
    function Person(person) {
      this.name = person.name;
      this.phone = person.phone;
      this.company = person.company;
      this.email = person.email;
      this.save = function() {
        //persist to server
      }
    }

    return Person;
  })
;
