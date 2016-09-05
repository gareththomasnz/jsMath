(function () {
   'use strict';
	var C = 0;
	var F = 0;
	var startbound = 32;
	var endbound = 100;
	var increment = 3;
	var htmlout = "";
	$(document).ready(function() {
		// function code goes here
		function getC(F) {
			return (F - 32) * 5 / 9;
		}
		$('#submitButton').click(function() {
			// JavaScript code here
			startbound = parseFloat($('#input1').val());
			endbound = parseFloat($('#input2').val());
			increment = parseFloat($('#increment').val());
			console.log(startbound);
			console.log(endbound);
			F = startbound;
			htmlout = "<table class='table'>";
			htmlout = htmlout + "<tr><th>Celsius</th><th>Fahrenheit</th></tr>";
			do {
				htmlout = htmlout + "<tr>";
				C = getC(F);
				console.log(C, F);
				htmlout = htmlout + "<td>" + C.toFixed(2) + "</td>";
				htmlout = htmlout + "<td>" + F.toString() + "</td>";
				F = F + increment;
				htmlout = htmlout + "</tr>";
			} while (F < endbound);
			htmlout = htmlout + "</table>";
			$('#details').html(htmlout);
		});
	});
}());