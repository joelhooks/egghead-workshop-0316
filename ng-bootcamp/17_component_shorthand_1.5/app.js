angular.module('exampleApp', [])
  .controller('ExampleCtrl', function () {
    var example = this;
    example.message = "This is a message."
  })

  .component('counter', {
    bindings: {
      count: '='
    },
    controller: function() {
      this.increment = function() {
        this.count++;
      };

      this.decrement = function() {
        this.count--;
      };
    },
    templateUrl: 'counter.html'
  })
;
