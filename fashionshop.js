(function () {
  'use strict';

  angular.module('fashionshop',['ui.router', 'ngMessages', 'ngStorage', 'ngRoute', 'ngFileUpload'])
    .config(config)
    .run(run);

  function config($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('home', {//v
        url:'/',
				templateUrl:'home.html',
        controller: 'homeController',
        controllerAs: 'vm',
        data:{
          state:'home'
        }
      })
      .state('detail',{//v
        url: '/produk',
        templateUrl: 'detail.html',
        controller: 'detailController',
        controllerAs: 'vm',
        data: {
          state:'detail'
        }
      })
      .state('login', {//v
        url:'/login',
        templateUrl:'login.html',
        controller:'loginController',
        controllerAs:'vm',
        data:{
          state:'login'
        }
      })
      .state('registrasi',{//v
        url:'/registrasi',
        templateUrl:'register.html',
        controller:'registerController',
        controllerAs:'vm',
        data:{
            state:'register'
        }
      })
      .state('category',{
        url:'/produk/kategori',
        templateUrl:'categorycategory.html',
        templateUrl:'categorycategory.html',
        templateUrl:'categorycategory.html',
        controller:'categoryController',
        controllerAs:'vm',
        data:{
          state:'category'
        }
      })
      .state('basket',{
        url:'/cart',
        templateUrl:'basket.html',
        controller:'basketController',
        controllerAs:'vm',
        data:{
          state:'basket'
        }
      })
      .state('checkout1',{
        url:'/checkout1',
        templateUrl:'checkout1.html',
        controller:'checkout1Controller',
        controllerAs:'vm',
        data:{
          state:'checkout1'
        }
      })
      .state('checkout3',{//v
        url:'/checkout2',
        templateUrl:'checkout3.html',
        controller:'checkout3Controller',
        controllerAs:'vm',
        data:{        templateUrl:'categorycategory.html',
        templateUrl:'categorycategory.html',
        templateUrl:'categorycategory.html',
        templateUrl:'categorycategory.html',

          state:'checkout3'
        }
      })
      .state('checkout4',{//v
        url:'/checkout3',
        templateUrl:'checkout4.html',
        controller:'checkout4Controller',
        controllerAs:'vm',
        data:{
          state:'checkout4'
        }
      })
      .state('transaction',{//v
        url:'/transaction',
        templateUrl:'transaction.html',
        controller:'transactionController',
        controllerAs:'vm',
        data:{
          state:'transaction'
        }
      })
      .state('listProduct',{//v
        url:'/listProduct',
        templateUrl:'listProduct.html',
        controller:'listProductController',
        controllerAs:'vm',
        data:{
          state:'listProduct'
        }
      })
      .state('addProduct',{//v
        url:'/addProduct',
        templateUrl:'addProduct.html',
        controller:'addProductController',
        controllerAs:'vm',
        data:{
          state:'addProduct'
        }
      })
      .state('updateProduk',{
        url:'/produk/updateProduk',
        templateUrl:'updateProduct.html',
        controller:'updateProductController',
        controllerAs:'vm',
        data:{
          state:'updateProduk'
        }
      })
      .state('verification',{
        url:'/verification',
        templateUrl:'verification.html',
        controller:'verificationController',
        controllerAs:'vm',
        data:{
          state:'verification'
        }
      })
      .state('kurir',{
        url:'/delivery',
        templateUrl:'kurir.html',
        controller:'kurirController',
        controllerAs:'vm',
        data:{
          state:'kurir'
        }
      });
      $urlRouterProvider.otherwise("/");
  };

  function run($rootScope, $http, $location, $localStorage, authenticationService, $state) {

    $rootScope.logout = function () {
      authenticationService.logout();
      $state.go('home');
    }
    $rootScope.isLogin = false;


    $rootScope.baseUrl = 'http://10.30.32.137:8000';

    if ($localStorage.currentUser) {
      $http.defaults.headers.common.Authorization =  $localStorage.currentUser.token;
			$rootScope.isLogin = true;
			$rootScope.name = $localStorage.currentUser.name;
			$rootScope.type = $localStorage.currentUser.type;
			$rootScope.id = $localStorage.currentUser.id;
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
      var publicPages = ['/','/login', '/registrasi', '/produk', '/produk/kategori'];
      var restrictedPage = publicPages.indexOf($location.path()) === -1;

      if (restrictedPage && !$localStorage.currentUser) {
        $state.go('home');
      }

      if ($localStorage.currentUser && ($location.path() == '/'
        || $location.path() == '/login' || $location.path() == '/registrasi'
        || $location.path() == '/produk' || $location.path() == '/produk/kategori')) {
          if ($rootScope.type == 1) {
              $state.go('listProduct');
          }else if ($rootScope.type == 2) {
              $state.go('home');
          }else{
              $state.go('kurir');
          }
      }

    });

    $rootScope.$on('$stateChangeStart', function (event, toState) {
       $rootScope.state = toState.data.state;
    });
  }
})();
