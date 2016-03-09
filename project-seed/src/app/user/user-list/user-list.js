angular.module('ps.user-list', ['ps.services.user-service'])
  .config(function($stateProvider) {
    $stateProvider
      .state('userList', {
        url: '/users',
        templateUrl: 'user/user-list/user-list.tpl.html',
        controller: 'UserListCtrl as userList'
      })
  })
  .controller('UserListCtrl', function UserListCtrl(userService) {
    var userList = this;

    userService.getUsers().then(function (users) {
      userList.users = users;
    })
  })
;