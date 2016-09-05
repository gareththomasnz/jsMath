(function () {
   'use strict';
	var dice1 = 0;
	var dice2 = 0;
	var sum = 0;
	var count = 0;
	var begAddr = "";
	var endAddr = "";
	var image = "";
	
	$(document).ready(function() {
	
		function getRandom(maxnumber) {
			var x = 0;
			x = Math.floor((Math.random() * maxnumber) + 1);
			console.log(x);
			return x;
		}
	
		$('#submitButton').click(function() {
			count = 0;
			image = "";
			begAddr = "<img src='http://mathcode.net/images/dice";
			endAddr = ".jpg' alt='dice' />";
			do {
				dice1 = getRandom(6);
				image = image + begAddr + dice1.toString() + endAddr;
				dice2 = getRandom(6);
				image = image + begAddr + dice2.toString() + endAddr;
				sum = dice1 + dice2;
				count = count + 1;
				console.log(sum);
			} while (sum != 2);
			console.log("count is " + count.toString());
			console.log(image);
			image = image + "<br/>Count is " + count.toString();
	
			$('#details').html(image);
		});
	
	});
}());