'use strict';

$(function(){
    //Zmienne
    var slider = $('#slider');
    var slideShow = $('.slide-show');
    var slideCount = slideShow.children().length;
    var slideWidth = 100/slideCount;
    var slideIndex = 0;
    
    //Szerokosc kontenera slideshow
    slideShow.css('width', slideCount * 100 + '%');
});