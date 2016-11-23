(function () {
  'use strict';
  angular.module('fashionshop',['ui.router', 'ngMessages', 'ngStorage', 'ngRoute'])
    .config(config)
    .run(run);

  function config($stateProvider){
    $stateProvider
      .state('')
  }
})();
'ui_router'
