(function($) {
  "use strict";


$(document).ready(function(){
	
	
if (!(/android|blackberry|windows phone|iphone|ipod/i).test(navigator.userAgent.toLowerCase())) {

		var header = $('.mainHeader'),
			pos = header.offset();

			$(window).scroll(function(){
				if($(this).scrollTop() > pos.top+20 && header.hasClass('default')){
					header.fadeOut('fast', function(){
						$(this).removeClass('default').addClass('switchedHeader').slideDown(200);
					});
				} else if($(this).scrollTop() <= pos.top+20 && header.hasClass('switchedHeader')){
					header.slideUp(200, function(){
						$(this).removeClass('switchedHeader').addClass('default').fadeIn(200);
					});
				}
		});

}
	
	
//------------------------------------- Navigation setup ------------------------------------------------//

$('a.scroll').smoothScroll({
        speed: 800,
        offset: -78
});

//------------------------------------- End navigation setup ------------------------------------------------//



//---------------------------------- Main slider setup-----------------------------------------//

function scrolling() {
	    var treshhold = Math.round($(window).scrollTop() / 8) + 60;
        $('li.parallax').css('backgroundPosition', '100% ' + treshhold + '%');    
}

$('.teaser .slide li').css('height', $(window).height());


for(var i = 0; i < $('.teaser .slide li').length; i++){

    var path = $('.teaser .slide li').eq(i).find('img.slide').attr('src');
	$('.teaser .slide li').eq(i).addClass('parallax');
    $('.teaser .slide li').eq(i).css('backgroundImage', 'url("' + path + '")');
    $('.teaser .slide li').eq(i).find('img.slide').detach();
    scrolling();
}



$(document).scroll(function () {
	scrolling();
});

//---------------------------------- End main slider setup-----------------------------------------//




//---------------------------------- Portfolio -----------------------------------------//

$(".itemDesc, .prjLink").css({ opacity: 0.9 });
//--------------------------------- Hover animation for the elements of the portfolio --------------------------------//
				
	
$('.itemDesc, .prjLink').hover( function(){ 
	$(this).stop().animate({ opacity: 1 }, 'slow');
}, function(){ 
	$(this).stop().animate({ opacity: 0.9 }, 'slow'); 
});


//--------------------------------- End hover animation for the elements of the portfolio --------------------------------//


	//--------------------------------- Sorting portfolio elements with quicksand plugin  --------------------------------//
	
		var $portfolioClone = $('.portfolio').clone();

		$('.filter a').click(function(e){
			$('.filter li').removeClass('current');	
			var $filterClass = $(this).parent().attr('class');
			if ( $filterClass == 'all' ) {
				var $filteredPortfolio = $portfolioClone.find('li');
			} else {
				var $filteredPortfolio = $portfolioClone.find('li[data-type~=' + $filterClass + ']');
			}
			$('.portfolio').quicksand( $filteredPortfolio, { 
				duration: 800,
				easing: 'easeInOutQuad' 
			}, function(){
					$('.itemDesc').hover( function(){ 
						$(this).stop().animate({ opacity: 1 }, 'slow');
					}, function(){ 
						$(this).stop().animate({ opacity: 0.9 }, 'slow'); 
					});
					
					

			});


			$(this).parent().addClass('current');
			e.preventDefault();
		});

//--------------------------------- End sorting portfolio elements with quicksand plugin--------------------------------//


//---------------------------------- End portfolio-----------------------------------------//






//--------------------------------- Mobile menu --------------------------------//


var mobileBtn = $('.mobileBtn');
	var nav = $('.mainNav');
	var navHeight= nav.height();

$(mobileBtn).click(function(e) {
		e.preventDefault();
		nav.slideToggle();
		$('.mainNav li a').addClass('mobile');


});

$(window).resize(function(){
		var w = $(window).width();
		if(w > 320 && nav.is(':hidden')) {
			nav.removeAttr('style');
			$('.mainNav li a').removeClass('mobile');
		}

});



$('.mainNav li a').click(function(){
	if ($(this).hasClass('mobile')) {
        nav.slideToggle();
	}

});


//--------------------------------- End mobile menu --------------------------------//







//---------------------------------- Instagram feed -----------------------------------------//

jQuery.fn.spectragram.accessData={
	accessToken:'305801553.467ede5.94e8f22591af44eea81bdbd1ca3bff04',
	clientID:'e659391279a64365a13bfb26b4caf15d'}
	
$('.instaFeed').spectragram('getUserFeed', {
		query: 'Schnitzel', //Change the instagram feed user to display the feed that you want.
		size: 'large',
		max: 10
});


//---------------------------------- End instagram feed -----------------------------------------//



});

})(jQuery);
