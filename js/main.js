$(document).ready(function(){
		
	$('#menu-trigger').click(function(e){
		e.preventDefault();
		$('#mobile-nav').fadeToggle();
	});

	$('#mobile-nav a').click(function(e){
		$('#menu-trigger').click();
	});

	$('#goto-second-page').click(function(e){
		$("html, body").animate({ scrollTop: $('#about').offset().top }, 1000);	
	});

	$('.header img').mouseenter(function(){
		$('.about-link').slideDown();

	});
	$('.about-link li').mouseout(function(){
		$('.about-link').slideUp();
	});
});
