(function () {
  'use strict';

  angular.module('fashionshop')
    .controller('kurirController',controller);

  function controller($http, transaksiService) {
    var vm = this;

    vm.transaksi = [];
    getAllDelivery();

    function getAllDelivery() {
      transaksiService.getAllDelivery(function (allDelivery) {
        if (allDelivery) {
          vm.transaksi = allDelivery;
        }
      })
    }
  }
})();
