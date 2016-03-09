angular.module('exampleApp.person', [])
  .factory('Person', function () {
    function Person(person) {
      this.name = person.name;
      this.phone = person.phone;
      this.company = person.company;
      this.email = person.email;
      this.save = function () {
        //persist to server
      }
    }

    return Person;
  })
;
