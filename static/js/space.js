$(document).ready(function(){

	var	spaceShip = $('div.spaceShip'),

		neptune = $('.home_neptune'),
		uranus = $('.home_uranus'),
		saturn = $('.home_saturn'),
		jupiter = $('.home_jupiter'),
		mars = $('.home_mars'),
		earth = $('.home_earth'),
		venus = $('.home_venus'),
		mercury = $('.home_mercury'),
		sun = $('.home_sun'),

		underNeptune = false,
		underUranus = false,
		underSaturn = false,
		underJupiter = false,
		underMars = false,
		underEarth = false,
		underVenus = false,
		underMercury = false,
		underSun = false,

		h = $(window).height(),
		w = $(window).width() - 100,
		wCenter = $('body').width()/2,
		hCenter = $('body').height()/2;

	

	var shipPosition = {
		X: function() { return parseInt(spaceShip.css('left'))},
		Y: function() { return parseInt(spaceShip.css('top'))}
	};

	var neptunePosition = {
		Left: function() {return neptune.offset().left},
		Right: function() {return neptune.offset().left + neptune.width()},
		Top: function() {return neptune.offset().top},
		Bottom: function() {return neptune.offset().top + neptune.height()}
	};

	var uranusPosition = {
		Left: function() {return uranus.offset().left},
		Right: function() {return uranus.offset().left + uranus.width()},
		Top: function() {return uranus.offset().top},
		Bottom: function() {return uranus.offset().top + uranus.height()}
	};

	var saturnPosition = {
		Left: function() {return saturn.offset().left},
		Right: function() {return saturn.offset().left + saturn.width()},
		Top: function() {return saturn.offset().top},
		Bottom: function() {return saturn.offset().top + saturn.height()}
	};

	var jupiterPosition = {
		Left: function() {return jupiter.offset().left},
		Right: function() {return jupiter.offset().left + jupiter.width()},
		Top: function() {return jupiter.offset().top},
		Bottom: function() {return jupiter.offset().top + jupiter.height()}
	};

	var marsPosition = {
		Left: function() {return mars.offset().left},
		Right: function() {return mars.offset().left + mars.width()},
		Top: function() {return mars.offset().top},
		Bottom: function() {return mars.offset().top + mars.height()}
	};

	var earthPosition = {
		Left: function() {return earth.offset().left},
		Right: function() {return earth.offset().left + earth.width()},
		Top: function() {return earth.offset().top},
		Bottom: function() {return earth.offset().top + earth.height()}
	};

	var venusPosition = {
		Left: function() {return venus.offset().left},
		Right: function() {return venus.offset().left + venus.width()},
		Top: function() {return venus.offset().top},
		Bottom: function() {return venus.offset().top + venus.height()}
	};

	var mercuryPosition = {
		Left: function() {return mercury.offset().left},
		Right: function() {return mercury.offset().left + mercury.width()},
		Top: function() {return mercury.offset().top},
		Bottom: function() {return mercury.offset().top + mercury.height()}
	};

	var sunPosition = {
		Left: function() {return sun.offset().left},
		Right: function() {return sun.offset().left + sun.width()},
		Top: function() {return sun.offset().top},
		Bottom: function() {return sun.offset().top + sun.height()}
	};

	
	

		
	$(window).bind('keypress', function(e){

		// SCALE
		if(e.keyCode == 61) { spaceShip.animate({'width': '+=100','height': '+=30'},200);}
		if(e.keyCode == 45) { spaceShip.animate({'width': '-=100','height': '-=30'},200);}


		// Trips
		var tripTo = function(place){
			$('header').hide();
			$('.spacetrip').addClass('spacetrip__active').height(h);
			$('body,html').animate({scrollTop: 0},0);
			setTimeout("window.location.href = '"+ place +".html'", 2000);
		}

		// Area switch
		if(e.keyCode == 13) { 

			if (underNeptune) {tripTo('neptune')}
			if (underUranus) {tripTo('uranus')}
			if (underSaturn) {tripTo('saturn')}
			if (underJupiter) {tripTo('jupiter')}
			if (underMars) {tripTo('mars')}
			if (underEarth) {tripTo('earth')}
			if (underVenus) {tripTo('venus')}
			if (underMercury) {tripTo('mercury')}
			if (underSun) {tripTo('sun')}
		}
	});



	//MOUSE CURSOR
	$(window).bind('mousemove', function(e){

		spaceShip.css({'top': e.pageY});
		spaceShip.css({'left':e.pageX});

		//if (shipPosition.Y() > h) { spaceShip.css({'top': h});}
		if (shipPosition.X() > w) {spaceShip.css({'left': w});}

		// PLANETS

		// neptune
		if(shipPosition.X() > neptunePosition.Left() && shipPosition.X() < neptunePosition.Right() && shipPosition.Y() > neptunePosition.Top() && shipPosition.Y() < neptunePosition.Bottom()) {
			underNeptune = true;}
		else { underNeptune = false;}

		if (underNeptune) {spaceShip.addClass('spaceShip_tip-neptune')}
			else {spaceShip.removeClass('spaceShip_tip-neptune')}

		// uranus
		if(shipPosition.X() > uranusPosition.Left() && shipPosition.X() < uranusPosition.Right() && shipPosition.Y() > uranusPosition.Top() && shipPosition.Y() < uranusPosition.Bottom()) {
			underUranus = true;}
		else { underUranus = false;}

		if (underUranus) {spaceShip.addClass('spaceShip_tip-uranus')}
			else {spaceShip.removeClass('spaceShip_tip-uranus')}

		// saturn
		if(shipPosition.X() > saturnPosition.Left() && shipPosition.X() < saturnPosition.Right() && shipPosition.Y() > saturnPosition.Top() && shipPosition.Y() < saturnPosition.Bottom()) {
			underSaturn = true;}
		else { underSaturn = false;}

		if (underSaturn) {spaceShip.addClass('spaceShip_tip-saturn')}
			else {spaceShip.removeClass('spaceShip_tip-saturn')}

		// jupiter
		if(shipPosition.X() > jupiterPosition.Left() && shipPosition.X() < jupiterPosition.Right() && shipPosition.Y() > jupiterPosition.Top() && shipPosition.Y() < jupiterPosition.Bottom()) {
			underJupiter = true;}
		else { underJupiter = false;}

		if (underJupiter) {spaceShip.addClass('spaceShip_tip-jupiter')}
			else {spaceShip.removeClass('spaceShip_tip-jupiter')}

		// mars
		if(shipPosition.X() > marsPosition.Left() && shipPosition.X() < marsPosition.Right() && shipPosition.Y() > marsPosition.Top() && shipPosition.Y() < marsPosition.Bottom()) {
			underMars = true;}
		else { underMars = false;}

		if (underMars) {spaceShip.addClass('spaceShip_tip-mars')}
			else {spaceShip.removeClass('spaceShip_tip-mars')}

		// earth
		if(shipPosition.X() > earthPosition.Left() && shipPosition.X() < earthPosition.Right() && shipPosition.Y() > earthPosition.Top() && shipPosition.Y() < earthPosition.Bottom()) {
			underEarth = true;}
		else { underEarth = false;}

		if (underEarth) {spaceShip.addClass('spaceShip_tip-earth')}
			else {spaceShip.removeClass('spaceShip_tip-earth')}

		// venus
		if(shipPosition.X() > venusPosition.Left() && shipPosition.X() < venusPosition.Right() && shipPosition.Y() > venusPosition.Top() && shipPosition.Y() < venusPosition.Bottom()) {
			underVenus = true;}
		else { underVenus = false;}

		if (underVenus) {spaceShip.addClass('spaceShip_tip-venus')}
			else {spaceShip.removeClass('spaceShip_tip-venus')}

		// mercury
		if(shipPosition.X() > mercuryPosition.Left() && shipPosition.X() < mercuryPosition.Right() && shipPosition.Y() > mercuryPosition.Top() && shipPosition.Y() < mercuryPosition.Bottom()) {
			underMercury = true;}
		else { underMercury = false;}

		if (underMercury) {spaceShip.addClass('spaceShip_tip-mercury')}
			else {spaceShip.removeClass('spaceShip_tip-mercury')}

		// sun
		if(shipPosition.X() > sunPosition.Left() && shipPosition.X() < sunPosition.Right() && shipPosition.Y() > sunPosition.Top() && shipPosition.Y() < sunPosition.Bottom()) {
			underSun = true;}
		else { underSun = false;}

		if (underSun) {spaceShip.addClass('spaceShip_tip-sun')}
			else {spaceShip.removeClass('spaceShip_tip-sun')}
		
	});

	
});
