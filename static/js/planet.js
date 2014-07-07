$(document).ready(function(){

	var	spaceShip = $('div.spaceShip'),
		h = $(window).height(),
		w = $(window).width() - 100,
		wCenter = $('body').width()/2,
		hCenter = $('body').height()/2;

	
	var shipPosition = {
		X: function() { return parseInt(spaceShip.css('left'))},
		Y: function() { return parseInt(spaceShip.css('top'))}
	};	

		
	$(window).bind('keypress', function(e){

		// SCALE
		if(e.keyCode == 61) { spaceShip.animate({'width': '+=100','height': '+=30'},200);}
		if(e.keyCode == 45) { spaceShip.animate({'width': '-=100','height': '-=30'},200);}


		// Trips
		var tripTo = function(place){
			if(place=='home'){
				$('.spacetrip').addClass('spacetrip__active').height(h);
				$('body,html').animate({scrollTop: 0},0);
				setTimeout("window.location.href = '/'", 2000);}
		}

		// Area switch
		if(e.keyCode == 13) { 
			tripTo('home');
		}
	});



	//MOUSE CURSOR
	$(window).bind('mousemove', function(e){
		spaceShip.css({'top': e.pageY});
		spaceShip.css({'left':e.pageX});

		//if (shipPosition.Y() > h) { spaceShip.css({'top': h});}
		if (shipPosition.X() > w) {spaceShip.css({'left': w});}
		
	});




});
