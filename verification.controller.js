(function () {
  'use strict';

  angular.module('fashionshop')
    .controller('verificationController',controller);

  function controller($http, transaksiService) {
    var vm = this;

    vm.transaksi = [];
    getAllVerify();

    function getAllVerify() {
      transaksiService.getAllVerify(function (allVerify) {
        if (allVerify) {
          vm.transaksi = allVerify;
        }
      })
    }

  }
})
