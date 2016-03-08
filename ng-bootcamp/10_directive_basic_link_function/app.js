angular.module('exampleApp', [])
  .controller('ExampleCtrl', function () {
    var example = this;
    example.message = "This is a message."
  })

  .directive('logger' , function() {
    return function link(scope, element, attrs) {
      console.log(scope.example.message);
      console.log(scope);
      console.log(element);

      element.on('mouseover', function() {
        console.log('MOUSE OVER!!!');
        scope.example.message = 'This is a new message';
        scope.$apply(); //we need to do this because it is outside of the digest cycle
        element.toggleClass('text-danger');
      });

      console.log(attrs);
    }
  })
;
