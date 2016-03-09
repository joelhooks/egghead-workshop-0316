angular.module('ps.user-list', [])
  .config(function($stateProvider) {
    $stateProvider
      .state('userList', {
        url: '/users',
        templateUrl: 'user-list/user-list.tpl.html',
        controller: 'UserListCtrl as userList'
      })
  })
  .controller('UserListCtrl', function UserListCtrl($http, baseApiUrl) {
    var userList = this;
    $http.get(baseApiUrl + '/users').then(function (results) {
      userList.users = results.data;
    })
  })
;