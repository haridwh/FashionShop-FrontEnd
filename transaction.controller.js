(function () {
  'use strict';

  angular.module('fashionshop')
    .controller('transactionController', controller);

  function controller($http, $rootScope, transaksiService){
    var vm = this;

    vm.transaksi = [];

    getAllTransaksi();

    function getAllTransaksi(){
      transaksiService.getAllTransaksi($rootScope.id, function (transaksi) {
        if (transaksi) {
          vm.transaksi = transaksi;
        }
      })
    }
  }
})();
