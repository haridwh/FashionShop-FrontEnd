(function () {
  'use strict';

  angular.module('fashionshop')
    .factory('produkService', service);

  function service($http, $rootScope){
    var Service = {};

    Service.getAllProduk = getAllProduk;
    Service.getProdukByID = getProdukByID;
    Service.addProduk = addProduk;
    Service.deleteProduk = deleteProduk;
    Service.updateProduk = updateProduk;

    return Service;

    function getAllProduk(callback){
      $http.get($rootScope.baseUrl + '/api/produk')
				.success(function(response) {
					if (response.code == "SUCCESS_GET") {
						callback(response.content);
					}else{
						callback(false);
					}
				});
    }

    function getProdukByID(id, callback){
      $http.get($rootScope.baseUrl + '/api/produk/'+id)
        .success(function (response) {
          if (response.code == "SUCCESS_GET") {
            callback(response.content);
          }else{
            callback(false);
          }
        });
    }

    function addProduk(nama, deskripsi, kategori, stok, harga, callback) {
      $http.post($rootScope.baseUrl + '/api/produk', {nama:nama, deskripsi:deskripsi, kategori:kategori, stok:stok, harga:harga})
        .success(function (response) {
          if (response.code=="SUCCESS_POST") {
            callback(response.message);
          }else {
            callback(false);
          }
        });
    }

    function updateProduk(id, nama, deskripsi, kategori, stok, harga, callback) {
      $http.put($rootScope.baseUrl+'/api/produk/updateProduk/'+id, {nama:nama, deskripsi:deskripsi, kategori:kategori, stok:stok, harga:harga})
        .success(function (response) {
          if (response.code=="SUCCESS_POST") {
            callback(response.message);
          }else{
            callback(false);
          }
        });
    }

    function deleteProduk(id, callback) {
      $http.delete($rootScope.baseUrl+"/api/produk/"+id)
        .success(function (response) {
          callback(response.message);
        });
    }
  }

})();
