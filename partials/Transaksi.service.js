(function () {
  'use strict';

  angular.module('fashionshop')
    .factory('transaksiService', service);

  function service($http, $rootScope){
    var Service = {};

    Service.getAllTransaksi = getAllTransaksi;
    Service.getAllVerify = getAllVerify;
    Service.verification = verification;
    Service.getAllDelivery = getAllDelivery;
    Service.changeStatus = changeStatus;

    return Service;

    function getAllTransaksi(id, callback){
      $http.get($rootScope.baseUrl + '/api/transaksi/'+id)
        .success(function(response){
          if (response.code == "SUCCESS_GET") {
            callback(response.content);
          }else {
            callback(false);
          }
        });
    }

    function getAllVerify(callback){
      $http.get($rootScope.baseUrl+'/api/transaksi')
        .success(function (response) {
          if (response.code=="SUCCESS_GET") {
            callback(response.content);
          }else{
            callback(false);
          }
        });
    }

    function verification(id, callback){
      $http.put($rootScope.baseUrl+'/api/transaksi/verified/'+id)
        .success(function (response) {
          if (response.code == "SUCCESS_UPDATE") {
            callback(response.message);
          }else{
            callback(false);
          }
        });
    }

    function getAllDelivery(callback) {
      $http.get($rootScope.baseUrl+'/api/transaksi/delivery')
        .success(function (response) {
          if (response.code == "SUCCESS_GET") {
            callback(response.content);
          }else{
            callback(false);
          }
        });
    }

    function changeStatus(id, callback){
      $http.put($rootScope.baseUrl+'/api/transaksi/arrived/'+id)
        .success(function (response) {
          if (response.code == "SUCCESS_UPDATE") {
            callback(response.message);
          }else{
            callback(false);
          }
        })
    }
  }

})();
