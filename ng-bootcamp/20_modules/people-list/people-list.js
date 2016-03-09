angular.module('exampleApp.people-list', [
    'exampleApp.people-service'

])
  .directive('peopleList', function () {
    return {
      restrict: 'E',
      scope: {
        people: '='
      },
      templateUrl: 'people-list/people-list.html',
      controller: 'PeopleListCtrl as peopleList'
    }; // Directive Definition Object DDO
  })

  .controller('PeopleListCtrl', function PeopleListCtrl() {
    var peopleList = this;

    peopleList.sortField = 'name';
    peopleList.filterOptions = {
      debounce: 250
    };

    peopleList.updateSortField = function (sortField) {
      if (sortField === peopleList.sortField) {
        sortField = '-' + sortField;
      }
      peopleList.sortField = sortField;
    };
  })

;