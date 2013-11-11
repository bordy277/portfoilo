$(document).ready(function(){

	$('.back').click(function(){

		$('.apps').hide();
		$('.office').fadeIn(1000);
		$('.branding').hide();
		$('.css').hide();

	});

	$('.app').click(function(){

		$('.apps').fadeIn(1000);
		$('.office').hide();
		$('.branding').hide();
		$('.css').hide();

	});

	$('.clip').click(function(){

		$('.apps').hide();
		$('.office').hide();
		$('.branding').hide();
		$('.css').hide();

	});

	$('.brand').click(function(){

		$('.branding').fadeIn(1000);
		$('.apps').hide();
		$('.office').hide();
		$('.css').hide();

	});

	$('.style').click(function(){

		$('.css').fadeIn(1000);
		$('.apps').hide();
		$('.office').hide();
		$('.branding').hide();

	});





});








































