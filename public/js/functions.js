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
            $('#front-images').animate({'opacity': [0, 'swing']}, 100, function(){
				if (i== theImages.length){
					i = 0; 
				}
                $('#front-images').html(theImages[i++]);
            });
            $('#front-images').animate({'opacity': 1}, 250)
        }
	    function change() {
	        setInterval(thing, 5000);
	    }

	    change();

	});
}