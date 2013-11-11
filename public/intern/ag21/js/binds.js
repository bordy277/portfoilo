$(document).ready(function(){
	$('.tab').click(function(){
		$('.tab').removeClass('active');
		$(this).addClass('active');
	});

	$('.center').click(function(){
		$('.page').hide();
		$('.harvest').show();
		$('.grain-cart').hide();
		$('.contract-delivery').hide();
	});

	$('.left').click(function(){
		$('.page').hide();
		$('.inputs').show();
		$('.grain-cart').hide();
		$('.contract-delivery').hide();

	});

	$('.right').click(function(){
		$('.page').hide();
		$('.inventory').show();
		$('.grain-cart').hide();
		$('.contract-delivery').hide();


	});

	$('.gc').click(function(){
		$('.page').hide();
		$('.grain-cart').show();

	})

	$('.gc-cancel').click(function(){
		$('.page, .grain-cart').hide();
		$('.harvest').show();

	})

	$('.field-complete').click(function(){
		$('.field-complete').hide();
		$('.field-check').show();

	})

	$('.field-check').click(function(){
		$('.field-check').hide();
		$('.field-complete').show();

	})

	$('.sync').click(function(){
		$('.light-green').toggle();
		$('.light-white').toggle();

	})

	$('.history-button').click(function(){
		$('.killer, .history-panel').show();
		$('.history-panel').animate({'right': 0}, 500);
		$('body').css('overflow', 'hidden');
	});

	$('.ticket-x').click(function(){
		$('.killer').hide();
		$('.history-panel').animate({'right': '-650px'}, 500);
		$('body').css('overflow', 'hidden');
	});

	$('.sync-harvest').click(function(){
		$('.light-green-harvest').toggle();
		$('.light-white-harvest').toggle();

	})

	$('.login-button').click(function(){
		$('.login').animate({'left': '-768px'}, 500);

	});

	$('.settings').click(function(){
		$('.killer, .setup-panel').show();
		$('.setup-panel').animate({'right': 0}, 500);
		$('body').css('overflow', 'hidden');
		$('.tickets-content').show();

	});

	$('.setup-x').click(function(){
		$('.killer').hide();
		$('.setup-panel').animate({'right': '-650px'}, 500);
		$('body').css('overflow', 'hidden');
	});

	$('.logout').click(function(){
		$('.login').animate({'left': 0}, 500);
		$('body').css('overflow', 'hidden');
	});

	$('.menu-drop').click(function(){
		$('.killer, .crop-panel').show();
		$('.crop-panel').animate({'right': 0}, 500);
		$('body').css('overflow', 'hidden');
	});

	$('.crop-x').click(function(){
		$('.killer').hide();
		$('.crop-panel').animate({'right': '-650px'}, 500);
		$('body').css('overflow', 'hidden');
	});

	$('.login-info').click(function(){
		$('.killer').show();
		$('.info-overlay').show();
	});

	$('.info-x').click(function(){
		$('.killer').hide();
		$('.info-overlay').hide();
	});

	$('.submit').click(function(){
		$('.killer').show();
		$('.submit-overlay').show();
	});

	$('.submit-x').click(function(){
		$('.killer').hide();
		$('.submit-overlay').hide();
	});

	$('.submit-yes').click(function(){
		$('.confirmation-box').show();
		$('.submit-box').hide();
	});

	$('.cd').click(function(){
		$('.page').hide();
		$('.contract-delivery').show();

	})
	$('.cd-cancel').click(function(){
		$('.page , .contract-delivery').hide();
		$('.inventory').show();

	})

});







































