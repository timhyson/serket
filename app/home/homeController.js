'use strict';

serket.controller('homeCtrl', ['$http', function($http) {

  var self = this;

  self.getData = function() {
    $http.get('http://serket.uk/badges/badgelist', 'GET').then(
      function success(response) {
        console.log(response.data.length);
      },
      function error(response) {
        alert("Information not available")
      });
  }

  self.joinParty();
}]);
