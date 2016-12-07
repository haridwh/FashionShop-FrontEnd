(function () {
  'use strict';

  angular.module('fashionshop')
    .controller('addProductController', controller,  'ngFileUpload');

  function controller($http, $state, produkService){
    var vm=this;

    vm.nama='';
    vm.deskripsi='';
    vm.kategori='';
    vm.stok='';
    vm.harga='';
    vm.addProduk = addProduk;
    vm.isInserted=true;

    function addProduk(){
      produkService.addProduk(vm.nama, vm.deskripsi, vm.kategori, vm.stok, vm.harga, function (result) {
        if (result == "OK") {
          $state.go('listProduct');
        }else{
          vm.isInserted=false;
        }
      })
    }
  }
})();
