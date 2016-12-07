(function () {
  'use strict';

  angular.module('fashionshop')
    .controller('updateProductController', controller);

  function controller($http, produkService, $state, $rootScope) {
    var vm = this;

    vm.produk;
    vm.isInserted=true;
    vm.updateProduk = updateProduk;

    getProduk();

    function getProduk() {
      produkService.getProdukByID($rootScope.idProduk, function (produk) {
        if (produk) {
          vm.produk=produk;
          vm.produk.stok=parseInt(vm.produk.stok);
        }
      })
    }

    function updateProduk() {
      produkService.updateProduk(vm.produk.id, vm.produk.nama, vm.produk.deskripsi, vm.produk.kategori, vm.produk.stok, vm.produk.harga, function (result) {
        if (result == 'OK') {
          $state.go('listProduct');
        }else{
          vm.isInserted=false;
        }
      })
    }
  }
})();
