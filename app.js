$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['1stPage', '2ndPage', '3rdPage'],
		loopTop: true,
		loopBottom: true,
		scrollingSpeed:1000,
		css3: true
	});
/*
	$('.up').velocity(
	{translateY:["3em","4.5em"] },
	{
		duration: 1700 ,
    	loop: true
	});
		
	$('.down').velocity(
	{translateY: ["1.5em","0em"] },	
	{
		duration: 1700 ,
    	 loop: true
	});

	$('.fp-prev').velocity(
	{translateX: ["1.5em","0em"] },
	{
		duration: 1700 ,
    	loop: true
	});
	$('.fp-next').velocity(
	{translateX: ["-1.5em","0em"] },
	{
		duration: 1700 ,
    	loop: true
	});
		
		*/
	// add a map
	var map = new AMap.Map('mapContainer', {
		resizeEnable: true,
		rotateEnable: true,
		dragEnable: true,
		zoomEnable: true,
		//设置可缩放的级别
		zooms: [3,18],
		//传入2D视图，设置中心点和缩放级别
		view: new AMap.View2D({
			center: new AMap.LngLat(116.36812,39.835886),
			zoom: 16
		})
	});		

	addMarker(map);
	function addMarker(map){
		map.clearMap();
		  	new AMap.Marker({	
		   	map: map,  	
			icon: 'imgs/map-marker.png',
			position: new AMap.LngLat(116.364859,39.836727),
			offset: new AMap.Pixel(-12,-36)
		});
	}

	// prevent page scrolling when you move the mapContainer on touch device
 	mapContainer.addEventListener('touchstart', function(e){
        e.preventDefault(); // prevent default click behavior
 		$.fn.fullpage.setAllowScrolling(false);
    }, false);
 	// enable page scrolling when you move other parts
    mapContainer.addEventListener('touchend', function(e){
        e.preventDefault(); // prevent default click behavior
 		$.fn.fullpage.setAllowScrolling(true);
    });

    //animation for the button
	document.getElementById('button').onclick = (function() {
    	document.getElementsByTagName('span')[0].innerHTML = '期待您的光临!';
    return false;
	});
	
	//play the audio
	var vid = document.getElementById("player"); 

	var isAndroidDevice = navigator.userAgent.match(/(Android)/);
	// if is android device then automatically play the audio
	// and set the speaker to pause image
	if (isAndroidDevice) {
		var count = 1;
		$("#speaker").css("background-position", "61% -11%");
	}
	else{
		count =0;
	}

	$( "#speaker" ).click(function() {
		if (count == 0) {
			vid.play();
  			$("#speaker").animate({"backgroundPositionX": "-=70%"},"slow","swing");
  			//$("#speaker").css("backgroundPositionX", "-=70%");
  			count=1;
		}
		else{
			vid.pause();
			$("#speaker").animate({"backgroundPositionX": "+=70%"},"slow","swing");
			count=0;
		}
  		
	});
	// text effect
	




});