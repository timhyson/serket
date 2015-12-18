'use strict';

serket.controller('homeController', ['$http', function($http) {

  var self = this;

  self.array = [];
  self.trueState = 0;
  self.falseState = 0;

  self.getData = function() {
    $http.get('http://serket.uk/badges/badgelist', 'GET').then(
      function success(response) {

        for(var i=0; i<response.data.length; i++){

          var name = response.data[i]["medicineName"];
          var statePattern = response.data[i]["statePattern"];

          if(name == "PARACETAMOL 500MG TABLETS"){
            if(statePattern == true){
              console.log('true')
              self.trueState++
            }
            else {
              console.log('false')
              self.falseState++
              }
            }
          else{
            console.log('not PARACETAMOL')
          };
        }
        console.log(self.trueState);
        console.log(self.falseState);
      })

      function error(response) {
        alert("Information not available")
      };
  }


	var barChartData = {
		labels : ["PARACETAMOL"],
		datasets : [
			{
				fillColor : "rgba(220,220,220,0.5)",
				strokeColor : "rgba(220,220,220,0.8)",
				highlightFill: "rgba(220,220,220,0.75)",
				highlightStroke: "rgba(220,220,220,1)",
				data : [self.trueState]
			},
			{
				fillColor : "rgba(151,187,205,0.5)",
				strokeColor : "rgba(151,187,205,0.8)",
				highlightFill : "rgba(151,187,205,0.75)",
				highlightStroke : "rgba(151,187,205,1)",
				data : [self.falseState]
			}
		]

	}
	window.onload = function(){
		var ctx = document.getElementById("canvas").getContext("2d");
		window.myBar = new Chart(ctx).Bar(barChartData, {
			responsive : true
		});
	}
}]);
