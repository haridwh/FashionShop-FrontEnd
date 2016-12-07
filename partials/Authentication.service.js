(function () {
  'use strict';
  angular.module('fashionshop')
    .factory('authenticationService', service);

  function service($http, $localStorage, $rootScope){
    var Service = {};

    Service.login = login;
    Service.logout = logout;

    return Service;

    function login(username, password, callback){
      $http.post($rootScope.baseUrl + '/api/getToken', {uname: username, password: password})
        .success(function (response) {
          if (response.code == "SUCCESS_POST") {
            callback(response.content);
          }else {
            callback(false);
          }
        })
    };

    function logout() {
      delete $localStorage.currentUser;
      $http.defaults.headers.common.Authorization = '';
			$rootScope.isLogin = false;
    }
  }
})();
