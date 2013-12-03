var alarmHour = null;
var alarmMinute = null;
var alarmAmPm = null;
var active;

var timerHour = null;
var timerMinute = null;
var timerAmPm = null;
var timerActive;



$(document).ready(function(){

	muted = true;

	
	$('.splash').click(function(){

		$('.splash').hide();
		$('.beach').show();
		$('.nav').show();
		$('#clock').show();
		$('.menu').show();
		


	});

	$('.noise-button').click(function(){

		
		
		$('.menu').animate({height: "429px"}, 500);
		$('.noise-panel').show();
		$('.time-panel').hide();
		$('.close').show();


		
		


	});


	$('.time-button, .reset').click(function(){

		
		
		$('.menu').animate({height: "429px"}, 500);
		$('.time-panel').show();
		$('.noise-panel').hide();
		$('.close').show();




	});

	$('.close').click(function(){

		
		
		$('.menu').animate({height: "0px"}, 500);
		$('.noise-panel').hide();
		$('.time-panel').hide();
		$('.close').hide();
		



	});

		
		
	function getTheSound(meh) {

		var sound = $(meh).val();
		$('#sound').html('<source src="sounds/'+sound+'.mp3" type="audio/mpeg">');
		$('.beach').css({'backgroundImage': 'url("images/'+sound+'.jpg")'});

		

	}

	$('.radio').on("click", function(){

		getTheSound(this);
		muted = true;
		muter();
		$('.pause').hide();
		$('.play').show();

	});



	function muter(){

		if (muted == true){
			$('#sound').get(0).muted = true;

		}

		else {
			$('#sound').get(0).muted = false;
		}

	}

	muter();
	
	$('#sound').html('<source src="sounds/ocean.mp3" type="audio/mpeg">');

	$('.play').on('click', function(){
		muted = false;
		muter();
		$('#sound').get(0).play();
		$(this).hide();
		$('.pause').show();


	});

	$('.pause').on('click', function(){
		muted = true;
		muter();
		$(this).hide();
		$('.play').show();


	});

	for (var i=0; i<12; i++){
		var nox = i+1;
		$('.hour').append('<option value="'+nox+'">'+nox+'</option>')
	}

	for (var i=0; i<60; i++){
		if (i < 10){
			var nox = '0'+i;
		}
		else {
			var nox = i;
		}
		$('.minute').append('<option value="'+nox+'">'+nox+'</option>')
	}

	$('.set-alarm').on('click', function(){
		alarmHour = $('.alarm .hour').val();
		alarmMinute = $('.alarm .minute').val();
		alarmAmPm = $('.alarm .am-pm').val();
		$('.alarm .current-hour').html(alarmHour);
		$('.alarm .current-minute').html(alarmMinute);
		$('.alarm .current-am-pm').html(alarmAmPm);
		$('.alarm .current-setting').show();
		active = true;
	});

	$('.set-timer').on('click', function(){
		timerHour = $('.timer .hour').val();
		timerMinute = $('.timer .minute').val();
		timerAmPm = $('.timer .am-pm').val();
		$('.timer .current-hour').html(timerHour);
		$('.timer .current-minute').html(timerMinute);
		$('.timer .current-am-pm').html(timerAmPm);
		$('.timer .current-setting').show();
		timerActive = true;
	});

	$('.off').on('click', function(){
		$('#alarm').get(0).pause();
		active = false;
		$('.alarm-notice').hide();

	});

	$('.ok').on('click', function(){
		timerActive = false;
		$('.timer-notice, .timer .current-setting').hide();


	});

	$('.reset').on('click', function(){
		timerActive = false;
		$('.timer-notice, .timer .current-setting').hide();


	});


	$('.snooze').on('click', function(){
		if (parseInt(alarmMinute) > 52){
			var difference = 60-parseInt(alarmMinute);
			alarmMinute = 7-difference;
			alarmHour++;
		}
		else {
			alarmMinute = parseInt(alarmMinute)+7;
		}
		$('#alarm').get(0).pause();
		active = true;
		$('.alarm-notice').hide();
		if (alarmMinute < 10){
			alarmMinute = '0'+alarmMinute;
		}

		$('.alarm .current-hour').html(alarmHour);
		$('.alarm .current-minute').html(alarmMinute);
		$('.alarm .current-am-pm').html(alarmAmPm);

	});

});

function startTime(){var today=new Date(); var h=today.getHours();var m=today.getMinutes();var m=today.getMinutes();// add a zero in front of numbers<10
			
			
	// add a zero in front of numbers<10
	h=military(h);
	m=checkTime(m);
	document.getElementById('clock').innerHTML=h+":"+m;
	t=setTimeout(function(){startTime()},500);
	if (alarmHour != null){
		if (h == alarmHour && m == alarmMinute && active == true){
			$('#alarm').get(0).play();
			$('.alarm-notice').show();
		}
	}
	if (timerHour != null){
		if (h == timerHour && m == timerMinute && timerActive == true){
			timerActive = false;
			$('#sound').get(0).pause();
			$('.play, .timer-notice').show();
			$('.pause').hide();
		}
	}
}

function military(i) {
	if (i > 12) {
		i = i - 12;
	}
	return i;
}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}










































