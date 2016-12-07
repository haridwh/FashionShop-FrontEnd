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
    Service.addToCart = addToCart;
    Service.getCart = getCart;

    return Service;

    function getTransaksi(id) {
      $http.get($rootScope.baseUrl+'/transaksi/'+id)
        .success(function (response) {
          if (response.code=="SUCCESS_GET") {
            callback(response.content);
          }else{
            callback(false);
          }
        })
    }

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

    function getCart(id, callback){
      $http.get($rootScope.baseUrl+'/api/transaksi/detail/'+id)
        .success(function (response) {
          console.log(response.content.detail_transaksi);
          if (response.code == "SUCCESS_GET") {
            callback(response.content);
          }else{
            callback(false);
          }
        })
    }

    function changeStatus(id, callback){
      $http.put($rootScope.baseUrl+'/api/transaksi/arrived/'+id)
        .success(function (response) {
          if (response.code == "SUCCESS_UPDATE") {
            callback(response.message);
          }else{
            callback(false);
          }
        });
    }

    function addToCart(idPem, jml, idProduk, callback) {
      $http.post($rootScope.baseUrl+'/api/masukKeranjang', {id_pembeli:idPem, jml:jml, id_produk:idProduk})
        .success(function (response) {
          if (response.code == "SUCCESS_POST") {
            callback(response.message);
          }else{
            callback(false);
          }
        })
    }
  }

})();
