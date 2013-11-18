$(document).ready(function(){

	function hideAll() {
		alert('caw');
		$('#oven').hide();
		$('#conservis').hide();
		$('#ff').hide();
		$('#sleepr').hide();
		$('#pgomn').hide();
		$('#earthworks').hide();
		$('#claires').hide();
		$('#sirocco').hide();
	}

	$('.project.one').click(function(){
		hideAll();
		$('#oven').toggle();
		alert('day');
	});
	
	$('.project.two').click(function(){
		hideAll();
		$('#pgomn').toggle();
	});

	$('.project.three').click(function(){
		hideAll();
		$('#conservis').toggle();
	});

	$('.project.four').click(function(){
		hideAll();
		$('#earthworks').toggle();
	});

	$('.project.five').click(function(){
		hideAll();
		$('#sleepr').toggle();
	});

	$('.project.six').click(function(){
		hideAll();
		$('#ff').toggle();
	});
	$('.project.seven').click(function(){
		hideAll();
		$('#sirocco').toggle();
	});

	$('.project.eight').click(function(){
		hideAll();
		$('#claires').toggle();
	});

	$('.tab.work').click(function(){

		$('html,body').animate({scrollTop: $('#work').offset().top},'slow');

	});
	
		$('.tab.bio').click(function(){

		$('html,body').animate({scrollTop: $('#bio').offset().top},'slow');

	});
	
		$('.tab.contact').click(function(){

		$('html,body').animate({scrollTop: $('#contact').offset().top},'slow');

	});
	


$('.work-showcase').click(function(){

    $('html,body').animate({
        scrollTop: $(this).offset().top},
        'slow');
});

$(function() {

    $('#mybook').booklet({

        width:  1368,
		height: 576

    });

});

function initializeFunction() { 
	
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

		var theImages = new Array('<img id="first" src="/images/cover-1.jpg" />', '<img id="first" src="/images/cover-2.jpg" />', '<img id="first" src="/images/cover-3.jpg" />')
        
        var i = 0;
      

	    function thing() {
            $('#front-images').animate({'opacity': [0, 'swing']}, 1000, function(){
				if (i== theImages.length){
					i = 0; 
				}
                $('#front-images').html(theImages[i++]);
            });
            $('#front-images').animate({'opacity': 1}, 1000)
        }
	    function change() {
	        setInterval(thing, 10000);
	    }

	    change();

	});
}









	// $('.menu').click(function(){

	// 	$('.menu-panel').animate({marginLeft: (0)},500);

	// });

	// $('.menu-panel .menu').click(function(){

	// 	$('.menu-panel').animate({marginLeft: ("-308px")},500);

	// });

	// $('.menu-panel').mouseleave(function(){

	// 	$('.menu-panel').animate({marginLeft: ("-308px")},500);

	// });








});











