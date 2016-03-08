angular.module('exampleApp', [])
  .controller('ExampleCtrl', function () {
    var example = this;

    example.people = ['Andrea', 'Maria', 'Mike', 'Jennifer'];
    example.addPerson = function(newPerson) {
      example.people.push(newPerson)
    }
  })
;
