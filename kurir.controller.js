(function () {
  'use strict';

  angular.module('fashionshop')
    .controller('kurirController',controller);

  function controller($http, transaksiService) {
    var vm = this;

    vm.transaksi = [];
    vm.changeStatus = changeStatus;
    getAllDelivery();

    function getAllDelivery() {
      transaksiService.getAllDelivery(function (allDelivery) {
        if (allDelivery) {
          vm.transaksi = allDelivery;
        }
      });
    }

    function changeStatus(transaksi) {
      transaksiService.changeStatus(transaksi.id, function (response) {
        vm.transaksi.splice(vm.transaksi.indexOf(transaksi),1);
      })
    }
  }
})();
