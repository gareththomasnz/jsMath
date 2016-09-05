"use strict";
var y = 0;
var x = 0;
var a = 0,
	b = 1,
	c = 0,
	d = 0;
var startbound = -5;
var endbound = 5;
var increment = 1;
var htmlout = "";
var gl = "";
$(document).ready(function() {
	// function code goes here
	function getY(x) {
		return a * x * x * x + b * x * x + c * x + d;
	}
	$('#buildTable').click(function() {
		// JavaScript code here
		a = parseFloat($('#a').val());
		b = parseFloat($('#b').val());
		c = parseFloat($('#c').val());
		d = parseFloat($('#d').val());
		startbound = parseFloat($('#start').val());
		endbound = parseFloat($('#end').val());
		increment = parseFloat($('#inc').val());
		x = startbound;
		htmlout = "<table class='table'>"
		htmlout = htmlout + "<tr><th>X</th><th>Y</th></tr>";
		gl = "mathcode.net/chart.cshtml?id=";
		do {
			htmlout = htmlout + "<tr>";
			y = getY(x);
			console.log(x, y);
			htmlout = htmlout + "<td>" + x.toFixed(2) + "</td>";
			htmlout = htmlout + "<td>" + y.toFixed(2) + "</td>";
			htmlout = htmlout + "</tr>";
			gl = gl + ",[" + x.toFixed(2) + "," + y.toFixed(2) + "]";
			x = x + increment;
		} while (x <= endbound)
		htmlout = htmlout + "</table><br/><br/>";
		htmlout = htmlout + "<a href=http://" + gl + ">Graph</a><br/><br/>";
		$('#details').html(htmlout);
	});
});