(function () {
  'use strict';

  angular.module('fashionshop')
    .controller('detailController', controller);

    function controller($http, $rootScope,produkService){
      var vm = this;

      vm.produk;

      getDetailProduk();

      function getDetailProduk(){
        produkService.getProdukByID($rootScope.idProduk ,function (produk) {
          if (produk) {
            vm.produk=produk;
          }
        })
      }
    }
})();
