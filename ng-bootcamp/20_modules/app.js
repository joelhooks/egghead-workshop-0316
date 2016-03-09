angular.module('exampleApp', [
    'exampleApp.people-list'
])
  .constant('BASE_API_URL', 'http://www.json-generator.com/api/json/get/')

  .controller('ExampleCtrl', function (peopleService) {
    var example = this;

    peopleService.getPeople().then(function(people) {
      console.log(people);
      example.people = people;
    })
  })



;
