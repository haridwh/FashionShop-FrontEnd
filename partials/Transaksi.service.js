(function () {
  'use strict';

  angular.module('fashionshop')
    .factory('transaksiService', service);

  function service($http, $rootScope){
    var Service = {};

    Service.getAllTransaksi = getAllTransaksi;
    Service.getAllVerify = getAllVerify;

    return Service;

    function getAllTransaksi(id, callback){
      $http.get($rootScope.baseUrl + '/api/transaksi/'+id)
        .success(function(response){
          if (response.code == "SUCCESS_GET") {
            callback(response.content);
          }else {
            callback(false);
          }
        })
    }

    function getAllVerify(callback){
      $http.get($rootScope.baseUrl+'/api/transaksi')
        .success(function (response) {
          console.log(response);
          if (response.code=="SUCCESS_GET") {
            callback(response.content);
          }else{
            callback(false);
          }
        })
    }
  }

})();
