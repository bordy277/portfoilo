$(document).ready(function(){

	$('.reports').click(function(){

		$('.reports-links').toggle();

	});

	$('.donations').click(function(){

		$('.donations-links').toggle();

	});

	$('.news').click(function(){

		$('.news-links').toggle();

	});

	$('.question.outdoors').click(function(){

		$('.answer.outdoors').toggle();

	});

	$('.question.volunteer').click(function(){

		$('.answer.volunteer').toggle();

	});

	$('.question.clubs').click(function(){

		$('.answer.clubs').toggle();

	});

	$('.profile').click(function(){

		$('.callout').toggle();

	});


	$('.profile-small').click(function(){

		$('.callout').toggle();

	});

	$('.menu').click(function(){

		$('.menu-panel').animate({marginLeft: (0)},500);

	});

	$('.menu-panel .menu').click(function(){

		$('.menu-panel').animate({marginLeft: ("-308px")},500);

	});

	$('.menu-panel').mouseleave(function(){

		$('.menu-panel').animate({marginLeft: ("-308px")},500);

	});

	$('.search').click(function(){

		$('.search-filter').toggle();

	});

	$('.panel-search').click(function(){

		$('.small-filter').toggle();

	});












	var map = L.map('map').setView([44.9833, -93.2667], 8);

	var minnehaha = L.marker([44.9, -93.2 ]).addTo(map);

	minnehaha.bindPopup("<b>Minnehaha Park, MN</b><br></br>4801 South Minnehaha Park Drive Minneapolis, MN 55417<br></br>Great place to visit and bike around. Can rent bikes and Surreys right there. Fun place for the whole family to just hang out, listen to the bands playing (we went Friday) and enjoy the falls. Very social place with lots of people so don't go if you're trying to get away.<br></br><a href=https://maps.google.com/maps?expflags=enable_star_based_justifications:true&ie=UTF8&f=d&daddr=Minnehaha+Park,+4801+South+Minnehaha+Park+Drive,+Minneapolis,+MN+55417&geocode=CQsYj8fXkdCSFfJPrQIdCdNx-iG5bNDO_KKaPg&gl=US&hl=en target=_blank>Directions</a><br><a href=gallery.html>View Photos</a>").openPopup();

	var afton = L.marker([44.8, -92.8 ]).addTo(map);

	afton.bindPopup("<b>Afton State Park, MN</b><br></br>6959 Peller Ave S Hastings, MN 55033<br></br>Afton has awesome camping sites, great, great trails to hike, and great picnic and swimming places.<br></br><a href=https://maps.google.com/maps?expflags=enable_star_based_justifications:true&ie=UTF8&f=d&daddr=Afton+State+Park,+6959+Peller+Ave+S,+Hastings,+MN+55033&geocode=CRVnayWAKxAlFfRTrAIdeTJ4-iFCVJL1oGx1hQ&gl=US&hl=en target=_blank>Directions</a><br><a href=gallery.html>View Photos</a>").openPopup();

	var maria = L.marker([45.3, -93.9 ]).addTo(map);

	maria.bindPopup("<b>Lake Maria State Park, MN</b><br></br>11411 Clementa Ave NW Monticello, MN 55362<br></br>One of the few remaining stands of the Big Woods, a maple, oak and basswood forest that once covered part of southern Minnesota.The park is perfect for hikers, backpackers, horseback riders, and cross-country skiers who enjoy the challenge of the rolling terrain. Take a stroll on the boardwalk which winds through a marsh.<br></br><a href=https://maps.google.com/maps?expflags=enable_star_based_justifications:true&ie=UTF8&f=d&daddr=Lake+Maria+State+Park,+11411+Clementa+Ave+NW,+Monticello,+MN+55362&geocode=Cd1z2Iabv8AyFSB3swId57Jm-iGm6w5O7pG4aw&gl=US&hl=en target=_blank>Directions</a><br><a href=gallery.html>View Photos</a>").openPopup();


	L.tileLayer('http://{s}.tile.cloudmade.com/c06852f73692438b93ea95d72f188ca3/{styleId}/256/{z}/{x}/{y}.png',{attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,Imagery © <a href="http://cloudmade.com">CloudMade</a>', styleId: 997}).addTo(map);



});











