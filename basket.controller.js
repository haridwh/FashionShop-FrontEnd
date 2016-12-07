(function () {
  'use strict';

  angular.module('fashionshop')
    .controller('basketController',controller);

  function controller($http, transaksiService){
    var vm = this;

    vm.cart = [];

    // function getCart() {
    //   transaksiService
    // }
  }
})();
