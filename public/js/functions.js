$('document').ready(function(){
	
    $('.nav-item').click(function(){

    	$('.nav-item').removeClass('active');
	    $(this).addClass('active');

		var name = $(this).attr('name');

		function contentSwitch() {
			$('#area').load('ajax/' + name + '.html');
	    } 

	    contentSwitch();

	});

	$('.work-item').click(function(){

		var name = $(this).attr('name');

		function contentSwitch() {
			$('#area').load('ajax/' + name + '.html');
	    } 

	    contentSwitch();

	});

});