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
		*/
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
		

// the animation of the heart
$('.inside').each(function(id){
    $(this).css({
      position: 'relative',
      top: '-200px',
      opacity: 0
    });
    var wait = Math.floor((Math.random()*3000)+1);
    $(this).delay(wait).animate({
      top: '0px',
      opacity: 1
    },1000);
  });

// animation for the text
$(".text").typed({
        strings: ["我们结婚啦"],
        typeSpeed:350,
        backDelay: 1000,
        loop: false,
        loopCount: false,
      });
$(".text2").typed({
        strings: ["时间：2015年9月5号， 周六^500","地点：滨海建国大酒店^500","交通：天津滨海建国大酒店距离滨海国际机场38公里，您可以选择机场大巴或者出租车前往酒店。如果您乘坐机场大巴，请在滨海国际机场国内出口处到达厅乘前往天津开发区的大巴车，车票25元。抵达泰达中心站，然后搭乘出租车约9元到达酒店；如果您选择出租车，从滨海国际机场到酒店约170元车费（含20元高速费），请别忘了放在车上的行李。"],
        typeSpeed:150,
        backDelay: 1000,
        loop: false,
        loopCount: false,
      });

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