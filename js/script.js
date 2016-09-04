"use strict";
//$(document).ready(function() {
//	// function code goes here
//	$('#submitButton').click(function() {
//		// operators
//		var a = 10.0;
//		var b = 3.0;
//		var c = 2.5;
//		var sum = a + b;
//		var subtract = a - b;
//		var product = a * b;
//		var div = a / b;
//		var mod = a % b;
//		var average = (a + b + c) / 3;
//
//		console.log("The sum is " + sum);
//		console.log(subtract);
//		console.log(product);
//		console.log(div);
//		console.log("10%3 is " + mod);
//		console.log(average);
//
//		$('#details').html("See console for details.");
//	});
//});

//$(document).ready(function () {
//    // function code goes here
//    $('#submitButton').click(function () {                    
//        // iteration
//
//        var colors = ['red','green','blue','white','orange'];
//        var strColors = "";                    
//        for (var x in colors)
//        {
//            console.log(colors[x]);
//            strColors = strColors + " " + colors[x];
//        }
//        
//        $('#details').html("The colors are " + strColors);  
//
//        var msg = "Hello World!"
//        for (var x in msg)
//        {
//            console.log(msg[x]);
//        }
//
//    });
//});

//$(document).ready(function() {
//	// function code goes here
//	function getRandom(maxnumber) {
//		var x = 0;
//		x = Math.floor((Math.random() * maxnumber) + 1)
//			//console.log(x)
//		return x;
//	}
//	$('#submitButton').click(function() {
//		// branching
//		var score = getRandom(50) + 50;
//		var output = "";
//		if (score == 100) {
//			output = "Your score is A+, Great Job";
//		} else if (score >= 90) {
//			output = "Your score is A, Great Job";
//		} else if (score >= 80) {
//			output = "Your score is B, Good Job";
//		} else if (score >= 70) {
//			output = "Your score is C, OK Job";
//		} else if (score >= 60) {
//			output = "Your score is D, Needs Improvement";
//		} else {
//			output = "Your score is F, Failed";
//		}
//		console.log(score);
//		$('#details').html(output);
//	});
//});

//$(document).ready(function() {
//	// function code goes here
//	$('#submitButton').click(function() {
//		var years = 0;
//		var investment = 100;
//		do {
//			years = years + 1;
//			investment = investment * 1.05
//			console.log(investment);
//		}
//		while (years < 10);
//		$('#details').html(investment);
//	});
//});

var num1 = 0;
var num2 = 0;
var sum = 0;
$(document).ready(function() {
	// function code goes here
	$('#submitButton').click(function() {
		// JavaScript code here
		num1 = $('#input1').val();
		num2 = $('#input2').val();
		sum = parseFloat(num1) + parseFloat(num2);
		$('#details').html("The sum is " + sum.toString());
	});
});