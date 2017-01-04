'use strict';

(function() {

  class DashboardController {
    constructor() {
      // Use the User $resource to fetch all users
      // this.users = User.query();
    }

    delete(user) {
      user.$remove();
      this.users.splice(this.users.indexOf(user), 1);
    }
  }

  angular.module('tTimeApp')
    .controller('DashboardController', DashboardController);
})();
