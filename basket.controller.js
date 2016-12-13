(function () {
  'use strict';

  angular.module('fashionshop')
    .controller('basketController',controller);

  function controller($http, transaksiService, $rootScope){
    var vm = this;

    vm.cart = [];
    vm.total = 0;
    getCart();
    vm.deleteDetailTransaksi = deleteDetailTransaksi;

    function getCart() {
      transaksiService.getCart($rootScope.id, function (cart) {
        if (cart) {
          vm.cart = cart.detail_transaksi;
          vm.total = cart.total;
        }
      });
    }

    function deleteDetailTransaksi(cart) {
      transaksiService.deleteDetailTransaksi(cart.id, function (response) {
        if (response == 'OK') {
          vm.total -= cart.jml * cart.produk.harga;
          vm.cart.splice(vm.cart.indexOf(cart),1);
        }
      })
    }
  }
})();
