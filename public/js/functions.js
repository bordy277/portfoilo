(function($){

	function vertAlign(item){
		item.each(function(){
			var itemPadding = ($(window).height() - item.height()) / 2 - 50; 
			$(this).css('padding', itemPadding + 'px 0');
		});
	}

	$(document).ready(function(){
		vertAlign($('#message'));
	});

	$(window).resize(function() {
	  vertAlign($('#message'));
	});

})(jQuery);