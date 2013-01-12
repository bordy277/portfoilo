$('document').ready(function(){

	$('.content-image img').animate({'marginLeft': 0}, 200);
    $('.nav-item').click(function(){

    	$('.nav-item').removeClass('active');
	    $(this).addClass('active');

		var name = $(this).attr('name');

		function contentSwitch() {
			$('#area').load('ajax/' + name + '.html');
	    } 

	    contentSwitch();

	});

});