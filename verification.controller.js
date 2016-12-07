(function () {
  'use strict';

  angular.module('fashionshop')
    .controller('verificationController',controller);

  function controller($http, transaksiService) {
    var vm = this;

    vm.transaksi = [];
    vm.verification = verification;
    getAllVerify();

    function getAllVerify() {
      transaksiService.getAllVerify(function (allVerify) {
        if (allVerify) {
          vm.transaksi = allVerify;
        }
      })
    };

    function verification(produk) {
      transaksiService.verification(produk.id, function (response) {
        if (response=='OK') {
          vm.transaksi.splice(vm.transaksi.indexOf(produk),1);
        }
      })
    }

  }
})();
