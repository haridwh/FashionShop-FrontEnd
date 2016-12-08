(function () {
  'uses strict';

  angular.module('fashionshop')
    .controller('registerController', controller);

  function controller($http, authenticationService, $state) {
    var vm = this;

    vm.name="";
    vm.email="";
    vm.uname="";
    vm.upass="";
    vm.type="2";
    vm.jenis_kelamin="";
    vm.tgl_lahir="";
    vm.alamat="";
    vm.nomor_tlp="";

    vm.register=register;

    function register() {
      authenticationService.register(vm.name, vm.email, vm.uname, vm.upass, vm.type, vm.jenis_kelamin, vm.tgl_lahir, vm.alamat, vm.nomor_tlp, function (result) {
        if (result) {
          $state.go('login');
        }
      })
    }

  }
})();
