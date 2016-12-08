(function () {
  'use strict';

  angular.module('fashionshop')
    .controller('basketController',controller);

  function controller($http, transaksiService, $rootScope){
    var vm = this;

    vm.cart = [];
    vm.total = 0;
    getCart();

    function getCart() {
      transaksiService.getCart($rootScope.id, function (cart) {
        console.log(cart);
        if (cart) {
          vm.cart = cart.detail_transaksi;
          vm.total = cart.total;
        }
      })
    }
  }
})();
