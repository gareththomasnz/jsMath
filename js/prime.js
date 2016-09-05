(function() {
	'use strict';
	var num = 0;
	var sum = 0;
	var htmlout = "";
	$(document).ready(function() {
		function isPrime(x) {
			for (var i = 2; i <= x - 1; i++) {
				if (x % i === 0) {
                                console.log(x + ' is not a prime');                                       
					return false;
				}
			}
                        console.log(x + ' is a prime');
			return true;
		}
		$('#submitButton').click(function() {
			htmlout = "Prime Numbers: ";
			sum = 0;
			num = parseFloat($('#input1').val());
			for (var i = 2; i <= num; i++) {
				if (isPrime(i) === true) {
					sum = sum + i;
					htmlout = htmlout + " " + i.toString();
					console.log(i, sum);
				}
			}
			htmlout = htmlout + "<br/><br/>";
			htmlout = htmlout + "The sum is " + sum.toString();
			$('#details').html(htmlout);
		});
	});
}());