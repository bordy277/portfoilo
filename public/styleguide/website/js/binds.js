$(document).ready(function(){

	$('.button').click(function(){

		$('.login-center').hide();
		$('.home').fadeIn(1000);

	});

	$('.harv').click(function(){

		
		$('.nav').fadeIn(500);
		$('.harv').show('.active');

	});

	$('.inputs').click(function(){

		
		$('.nav').fadeOut(500);

	});

	$('.invent').click(function(){

		
		$('.nav').fadeOut(500);

	});

	$('.plan').click(function(){

		
		$('.nav').fadeOut(500);

	});

	$('.location').click(function(){

		
		$('.location').removeClass('active');
		$(this).addClass('active');

	});
});








































