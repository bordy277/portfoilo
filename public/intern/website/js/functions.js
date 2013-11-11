$(document).ready(function(){

	$('.tab').live("click", function(){

		$('.tab').removeClass('active');
		$(this).addClass('active');

	});
	
});