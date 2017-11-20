$(document).ready(function(){
		
	$('#menu-trigger').click(function(e){
		e.preventDefault();
		$('#mobile-nav').fadeToggle();
	});

	$('#mobile-nav a').click(function(e){
		$('#menu-trigger').click();
	});

});
