"use strict"
// var contents = $('#h2').html();
// alert(contents);

// $('.codeup').css('border', '1px solid red')

// $('li').css('font-size', '20px');
//
// $('h1').css('background-color', '#FF0');
//
// $('p').css('background-color', '#FF0');
//
// $('li').css('background-color', '#FF0');
//
// var contents = $('h1').html();
// alert(contents);
//
// $('h1, p, li').css('background-color', '#FF0');
$("h1").click(function() {
    $(this).css("background-color", "red");
});

$('p').dblclick(function(){
    $(this).css('font-size', '18px');
});

$('li').hover
(function() {
        $(this).css('color', 'red');
    },
    function() {
        $(this).css('color', 'black');
    });