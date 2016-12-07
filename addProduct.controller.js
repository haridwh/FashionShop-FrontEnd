(function () {
  'use strict';

  angular.module('fashionshop')
    .controller('addProductController', controller);

  function controller($rootScope, $http, $state, produkService, Upload){
    var vm=this;

    vm.nama='';
    vm.deskripsi='';
    vm.kategori='';
    vm.stok='';
    vm.harga='';
    vm.addProduk = addProduk;
    vm.picFile = '';
    vm.isInserted=true;
    vm.addProdukWithImage = addProdukWithImage;

    function addProduk(){
      produkService.addProduk(vm.nama, vm.deskripsi, vm.kategori, vm.stok, vm.harga, function (result) {
        if (result == "OK") {
          $state.go('listProduct');
        }else{
          vm.isInserted=false;
        }
      })
    }

    function addProdukWithImage(file) {
      console.log('hmm');
      file.upload = Upload.upload({
        url: $rootScope.baseUrl + '/api/produk',
        data:{
          nama: vm.nama,
          deskripsi: vm.deskripsi,
          kategori: vm.kategori,
          stok: vm.stok,
          harga: vm.harga,
          image: file
        },
      });

      file.upload.then(function(response) {
        $state.go('listProduct');
      });
    }
  }
})();
