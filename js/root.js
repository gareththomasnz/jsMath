"use strict";
var x = 25;
var guess = 9;
var marginOfError = 0.1;
var error = 0;
var counter = 0;
var htmlout = "";
$(document).ready(function() {
	function getGuess(g) {
		return (g + x / g) / 2;
	}
	$('#submitButton').click(function() {
		x = parseFloat($('#input1').val());
		error = Math.abs(guess * guess - x);
		while (error >= marginOfError) {
			guess = getGuess(guess);
			error = Math.abs(guess * guess - x);
			console.log(guess);
			counter += 1;
		}
		console.log('Count is ' + counter);
		htmlout = "Square Root is " + guess.toFixed(2);
		$('#details').html(htmlout);
	});
});