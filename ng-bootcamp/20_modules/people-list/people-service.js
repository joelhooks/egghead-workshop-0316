angular.module('exampleApp.people-service', [
    'exampleApp.person'
])
  .service('peopleService', function ($http, BASE_API_URL, Person) {
    var peopleService = this;

    peopleService.getPeople = function () {
      return $http.get(BASE_API_URL + 'cnORtoBisy')
        .then(function successHandler(result) {
          // do any amount work
          return result.data.map(function (person) {
            return new Person(person);
          });
        });
    }
  })
;
