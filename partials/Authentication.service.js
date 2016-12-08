(function () {
  'use strict';
  angular.module('fashionshop')
    .factory('authenticationService', service);

  function service($http, $localStorage, $rootScope){
    var Service = {};

    Service.login = login;
    Service.logout = logout;
    Service.register = register;

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

    function register(name, email, uname, upass, type, jenis_kelamin, tgl_lahir, alamat, nomor_tlp, callback){
      $http.post($rootScope.baseUrl+'/api/registrationPembeli', {name:name, email:email, uname:uname, upass:upass, type:type, jenis_kelamin:jenis_kelamin, tgl_lahir:tgl_lahir, alamat:alamat, nomor_tlp:nomor_tlp})
        .success(function (response) {
          if (response.code == 'SUCCESS_POST') {
            callback(true);
          }else{
            callback(false);
          }
        })
    }
  }
})();
