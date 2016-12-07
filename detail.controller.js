(function () {
  'use strict';

  angular.module('fashionshop')
    .controller('detailController', controller);

    function controller($http, $rootScope,produkService,transaksiService, $state){
      var vm = this;

      vm.produk;
      vm.jml = "";
      vm.addToCart = addToCart;

      getDetailProduk();

      function getDetailProduk(){
        produkService.getProdukByID($rootScope.idProduk ,function (produk) {
          if (produk) {
            vm.produk=produk;
          }
        });
      }

      function addToCart() {
        transaksiService.addToCart($rootScope.id, vm.jml, vm.produk.id, function (response) {
          if (response == 'OK') {
            $state.go('basket');
          }
        } )
      }
    }
})();
