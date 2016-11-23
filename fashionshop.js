(function () {
  'use strict';

  angular.module('fashionshop',['ui.router', 'ngMessages', 'ngStorage', 'ngRoute'])
    .config(config)
    .run(run);

  function config($stateProvider){

    $stateProvider
      .state('home', {
        url:'/',
				templateUrl:'home.html',
        controller:'homeController',
        controllerAs:'vm'
      })
      .state('login', {
        url:'/login',
        templateUrl:'login.html',
        controller:'loginController',
        controllerAs:'vm',
        data:{
          state:'login'
        }
      })
      .state('registrasi',{
        url:'/registrasi',
        templateurl:'register.html',
        controller:'registerController',
        controllerAs:'vm',
        data:{
          state:'register'
        }
      });
  };

  function run($rootScope, $http, $location, $localStorage, authenticationService, $state) {

  }
})();
