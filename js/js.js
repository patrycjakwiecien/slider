'use strict';

$(function(){
    //Zmienne
    var slider = $('#slider');
    var slideShow = $('.slide-show');
    var slideCount = slideShow.children().length;
    var slideWidth = 100/slideCount;
    var slideIndex = 0;
    
    
    //funkcja animujaca ktorej parametr jest nowy index slajd
    function slide(newSlideIndex) {
        if(newSlideIndex < 0 || newSlideIndex >= slideCount){
            return;
        }
        var slideCaption = $('.slider-caption').eq(newSlideIndex);
        slideCaption.hide();
        var marginLeft = (newSlideIndex * (-100)) + '%';
        
        //wywolanie animacji na elemencie slideShow, ktora przesunie lewy margines rowny zmiennej marginLeft
        
        slideShow.animate({'margin-left': marginLeft}, 800, function(){
            slideIndex = newSlideIndex;
            slideCaption.fadeIn('slow');
        });
    }
    
    //Szerokosc kontenera slideshow
    slideShow.css('width', slideCount * 100 + '%');
    
    
    //Iteracja po wszytskich sljadach i nadanie im marginesow oraz szerokosci
    slideShow.find('.single-slide').each(function(index){
        $(this).css({
            'width': slideWidth + '%',
            'margin-left': index * slideWidth + '%'
        
        });
    });
    
    //przycisk poprzedni - wywolanie funkcji slide()
    
    $('.prev-slide').click(function(){
        slide(slideIndex - 1);
    });
    
      //przycisk nastepnu - wywolanie funkcji slide()
    
    $('.next-slide').click(function(){
        slide(slideIndex + 1);
    });
});