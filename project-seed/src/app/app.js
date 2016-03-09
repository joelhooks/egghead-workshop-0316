angular.module('project-seed', [
  'project-seed.common',
  'ngAria',
  'ui.router',
  'templates-app',
  'ps.user-list'
])
  .config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/users');
  })
;