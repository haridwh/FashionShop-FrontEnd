(function () {
  'use strict';

  angular.module('fashionshop')
    .controller('homeController', controller);

  function controller($http, $rootScope, $state, produkService){
    var vm = this;

    vm.produks = [];
    vm.getProduk = getProduk;

    getAllProduk();

    function getAllProduk(){
      produkService.getAllProduk(function (allProduk) {
        if (allProduk) {
          vm.produks=allProduk;
        }
      })
    }

    function getProduk(id){
      $rootScope.idProduk = id;
      $state.go('detail');
    }
  }
})();
