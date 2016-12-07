(function () {
  'use strict';

  angular.module('fashionshop')
    .controller('basketController',controller);

  function controller($http, transaksiService, $rootScope){
    var vm = this;

    vm.cart = [];
    getCart();

    function getCart() {
      transaksiService.getCart($rootScope.id, function (cart) {
        if (cart) {
          vm.cart = cart;
        }
      })
    }
  }
})();
