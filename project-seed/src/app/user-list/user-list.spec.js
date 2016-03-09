describe('user-list', function() {
  var userList;

  beforeEach(module('ps.user-list'));
  beforeEach(inject(function($controller) {
    userList = $controller('UserListCtrl');
  }));

  it('should create an instance', function() {
    expect(userList).toBeDefined();
  })
});