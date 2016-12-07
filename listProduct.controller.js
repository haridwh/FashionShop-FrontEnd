(function () {
  'use strict';

  angular.module('fashionshop')
    .controller('listProductController', controller);

  function controller($http, $rootScope, $state, produkService){
    var vm = this;

    vm.produks = [];

    getAllProduk();
    vm.deleteProduk = deleteProduk;
    vm.updateProduk = updateProduk;

    function getAllProduk() {
      produkService.getAllProduk(function (allProduk){
        if (allProduk) {
          vm.produks = allProduk;
        }
      })
    }

    function getProduk(id){
      $rootScope.idProduk = id;
      $state.go('detail');
    }

    function updateProduk(id) {
      $rootScope.idProduk = id;
      $state.go('updateProduk'); 
    }

    function deleteProduk(produk){
      produkService.deleteProduk(produk.id, function (response) {
        vm.produks.splice(vm.produks.indexOf(produk),1);
      })
    }
  }
})();
