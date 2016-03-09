describe('user-list', function() {
  var userList,
    userService;

  beforeEach(module('ps.user-list'));
  beforeEach(inject(function($controller) {
    userService = {
      getUsersWasCalled: false,
      getUsers: function () {
        this.getUsersWasCalled = true;
        return { then: function (callback) {
          callback([]);
        } }
      }
    };
    userList = $controller('UserListCtrl', {
      userService: userService
    });
  }));

  it('should create an instance', function() {
    expect(userList).toBeDefined();
  });

  it("should call getUsers on the userService", function () {
    expect(userService.getUsersWasCalled).toBe(true);
  });

  it("should set users with getUsers result", function () {
    expect(userList.users).toBeDefined();
  });
});