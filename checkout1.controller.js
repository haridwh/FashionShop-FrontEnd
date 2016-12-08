(function () {
  'use strict';

  angular.module('fashionshop')
    .controller('checkout1Controller', controller);

  function controller($http, transaksiService, $state) {
    var vm = this;

    vm.alamat="";
    vm.no_tlp="";
    vm.buy = buy;

    function buy() {
      transaksiService.buy(vm.alamat,vm.no_tlp, function (response) {
        if (response == "OK") {
          $state.go('home');
        }
      })
    }


  }
})();
