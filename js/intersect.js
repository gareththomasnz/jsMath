(function () {
   'use strict';
        var num = 99;
        var htmlout = "";
        $(document).ready(function() {
                // function code goes here
                function isFactor(x) {
                        if (num % x === 0) {
                                return true;
                        } else {
                                return false;
                        }
                }
                $('#submitButton').click(function() {
                        // JavaScript code here
                        num = parseFloat($('#input1').val());
                        if (num < 0) {
                                htmlout = "Enter integer greater than zero.";
                        }
                        for (var i = 1; i <= num; i++) {
                                if (isFactor(i) === true) {
                                        htmlout = htmlout + " " + i.toString();
                                        console.log(i);
                                }
                        }
                        $('#details').html(htmlout);
                });
        });
}());