(function() {
	'use strict';
	
	angular.module('fashionshop')
		.controller('myOrderController', controller);

	function controller($rootScope, transaksiService, Upload, $window) {

		var vm = this;
		vm.orders = [];
		vm.uploadStruk = uploadStruk;

		getData();

		function getData() {
			transaksiService.getTransaksi($rootScope.id, function(result) {
				console.log(vm.order);
				vm.orders = result;
			});
		}

		function uploadStruk(file, errFile, id) {
	      file.upload = Upload.upload({
	        url: $rootScope.baseUrl + '/api/produk/uploadStruk/' + id,
	        data: {
	          image: file
	        }
	      });

	      file.upload.then(function(response) {
	        $window.location.reload();
	      });
	    }
		
	}
})();