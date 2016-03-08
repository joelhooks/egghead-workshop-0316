angular.module('example', [])
  .controller('ExampleCtrl', function () {
    var example = this;

    example.message = "INITIALIZED IN CTRL " + Math.random();
  })
;
