(function() {
	'use strict';
	var a = 0;
	var b = 0;
	var c = 0;
	var d = 0;
	var x = 0;
	var increment = 0.1;
	var lower = 0;
	var upper = 1;
	var area = 0;
	var htmlout = "";
	$(document).ready(function() {
		function fx(a, b, c, d, x) {
			// returns the height (function value)
			var y = 0.0;
			y = a * x * x * x + b * x * x + c * x + d;
			return y;
		}

		function getAreaOfRect(a, b, c, d, x, increment) {
			var height = 0.0;
			height = fx(a, b, c, d, x);
			var area = 0.0;
			area = height * increment;
			return area;
		}

		function buildURL(linkname, datapoints) {
			var url = "mathcode.net/chart.cshtml?id=";
			url = "<a href=http://" + url + datapoints;
			url = url + ">" + linkname + "</a>";
			return url;
		}

		function pCurve(a, b, c, d, start, end, inc) {               
			var points = "";
			var x = start;
			var y = 0;
			while (x <= end) {
				y = fx(a, b, c, d, x);
				points = points + ",[" + x.toFixed(2) + "," + y.toFixed(2) + "]";
				x = x + inc;
			}
			return points;
		}

		function pArea(a, b, c, d, start, end, inc) {
			var points = "";
			var x = start + increment / 2;
			while (x < upper) {
				area = area + getAreaOfRect(a, b, c, d, x, increment);
				points = points + ",[" + x.toFixed(2) + "," + area.toFixed(2) + "]";
				x = x + inc;
			}
			return points;
		}

		$('#submitButton').click(function() {
			area = 0.0;
			a = parseFloat($('#a').val());
			b = parseFloat($('#b').val());
			c = parseFloat($('#c').val());
			d = parseFloat($('#d').val());
			increment = parseFloat($('#inc').val());
			lower = parseFloat($('#lower').val());
			upper = parseFloat($('#upper').val());
			htmlout = "";
			x = lower + increment / 2;
			console.log(a, b, c, d, x, increment, lower, upper);
			while (x < upper) {
				area = area + getAreaOfRect(a, b, c, d, x, increment);
				console.log(x, area);
				x = x + increment;
			}
			var curvePts = pCurve(a, b, c, d, lower, upper, increment);
			console.log(curvePts);
			var urlCurve = buildURL("Graph Curve", curvePts);
			console.log(urlCurve);
			var areaPts = pArea(a, b, c, d, lower, upper, increment);
			console.log(areaPts);
			var urlArea = buildURL("Graph Area", areaPts);
			console.log(urlArea);

			htmlout = "<br/><br/>";
			htmlout = htmlout + urlCurve;
			htmlout = htmlout + "<br/><br/>";
			htmlout = htmlout + urlArea;
			$('#details').html("The area is " + area + htmlout);
		});
	});
}());