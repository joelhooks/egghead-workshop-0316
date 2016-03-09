angular.module('ps.user-detail', [])
  .config(function($stateProvider) {
    $stateProvider
      .state('userDetail', {
        url: '/users/:username',
        templateUrl: 'user-detail/user-detail.tpl.html',
        controller: 'UserDetailCtrl as userDetail'
      })
  })
  .controller('UserDetailCtrl', function UserDetailCtrl(userService, $stateParams, $state) {
    var userDetail = this;

    userService.getUser($stateParams.username).then(function(user) {
      userDetail.user = user;
    });

    userDetail.navigateToList = function() {
      $state.go('userList')
    }
  })
;