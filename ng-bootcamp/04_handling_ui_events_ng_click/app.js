angular.module('exampleApp', [])
  .controller('ExampleCtrl', function () {
    var example = this;

    example.onSubmit = function(message) {
      example.displayMessage = message;
      example.message = '';
    }
  })
;
