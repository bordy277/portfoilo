$('document').ready(function(){

	$('.content-image img').animate({'marginLeft': 0}, 200);
    $('.nav-item').click(function(){

    	$('.nav-item').removeClass('active');
	    $(this).addClass('active');

		var name = $(this).attr('name');

		function contentSwitch() {
	      $('#area').animate({'opacity': 0}, 300, function(){
	        $(this).load('ajax/' + name + '.html', function(){
	          $(this).animate({'opacity': [1, 'swing']}, 300);
	        });
	      }); 
	    } 

	    contentSwitch();

	});

});