$(document).ready(function(){
	var scale = 1;
		
	$('#menu-trigger').click(function(e){
		e.preventDefault();
		$('#mobile-nav').fadeToggle();
	});

	$('#mobile-nav a').click(function(e){
		$('#menu-trigger').click();
	});

	$('#goto-second-page').click(function(e){
		e.stopPropagation();   
		$("html, body").animate({ scrollTop: $('#about').offset().top }, 1000);	
	});

	$('#switch li').click(function(e){
		var index = $(this).index();
		$('#switch li').removeClass('active').eq(index).addClass('active');
		$('.content').removeClass('active').eq(index).addClass('active');

	});


	$(document).scroll(function(){
		if ($(this).scrollTop() > 700) {
			$('.my-photo').addClass('in');
		}
		if ($(this).scrollTop() > $('#abilities').offset().top) {
			$('.progress-bar .progress').addClass('start');
			$('.progress-bar .progress .title').addClass('start');
		}
	});


	$('.header img').mouseenter(function(){
		$('.about-link').stop().slideDown();
	});
	$('.about-link ul').mouseout(function(){
		$('.about-link').stop().slideUp();
	});

	setInterval(function(){
	  scale = scale == 1 ? 1.1 : 1
	  $('.header img').css('transform', 'scale('+scale+')')
	}, 2000);
	

});
