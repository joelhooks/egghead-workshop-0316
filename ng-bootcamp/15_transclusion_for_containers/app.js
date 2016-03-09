angular.module('exampleApp', [])
  .controller('ExampleCtrl', function () {
    var example = this;
    example.message = "This is a message."
  })
  .directive('headline', function() {
    return {
      restrict: 'E',
      transclude: true,
      template: '<h1>This is the headline!</h1> <div ng-transclude></div>'
    }; // Directive Definition Object DDO
  })
  .directive('headlineExternal', function() {
    return {
      restrict: 'E',
      templateUrl: 'headline.html'
    }; // Directive Definition Object DDO
  })
;
