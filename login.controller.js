(function () {
  'use strict';

  angular.module('fashionshop')
    .controller('loginController', controller);

  function controller(authenticationService, $localStorage, $rootScope, $state, $http){
    var vm = this;

    vm.login = login;
    vm.uname = '';
    vm.password = '';
    vm.failLogin = false;

    function login(){
      authenticationService.login(vm.uname, vm.password, function (result) {
        if (result) {
          $localStorage.currentUser = {};
					$localStorage.currentUser.type = result.type;
					$localStorage.currentUser.token = 'bearer ' + result.token;
					$localStorage.currentUser.id = result.id;
					$localStorage.currentUser.name = result.name;
					$http.defaults.headers.common.Authorization =  'bearer ' + result.token;
					$rootScope.isLogin = true;
					$rootScope.type = result.type;
					$rootScope.name = result.name;
					$rootScope.id = result.id;

          if (result.type == '1') {
            $state.go('listProduct');
          }else{
            $state.go('home');
          }
        }else{
          vm.failLogin = true;
        }
      })
    }


  }
})();
