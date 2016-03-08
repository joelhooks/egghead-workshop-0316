angular.module('exampleApp', [])
  .controller('ExampleCtrl', function () {
    var example = this;

    example.onSubmit = function(message) {
      example.displayMessage = message;
      example.message = '';
    }
  })
  .controller('HiddenCtrl', function() {
    console.log('HELLOOOOOOOO!!!!1!!');
  })
  .controller('HiddenCtrl2', function() {
    console.log('GOODBYE!!!!1!');
  })
;
