"use strict"
var f = 1;
var x = 6;

$(document).ready(function(){
        console.log(x);
        $('#submitButton').click(function(){
                f = 1;
                x = parseFloat($("#input1").val());
                if(x>0){
                        while(x>1){
                        f = f * x;
                        x = x - 1;                      
                }
                console.log(f);
                $('#details').html('The factorial is ' + f);
                }else{
                        alert('x must be greater than zero');
                }
                
                });
        });