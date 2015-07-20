$(document).ready(function () {
    $('#fullpage').fullpage({
        anchors: ['1stPage', '2ndPage', '3rdPage', '4thPage'],
        loopTop: true,
        loopBottom: true,
        scrollingSpeed: 1000,
        css3: true,
        afterLoad: function (anchorLink, index) {
            var loadedSection = $(this);
            if (anchorLink == '1stPage') {
                // animation for the text
                $("#text").typed({
                    strings: ["我们结婚啦"],
                    typeSpeed: 350,
                    backDelay: 1000,
                    loop: false,
                    showCursor: false,
                    loopCount: false,
                });
            }
            if (anchorLink == '2ndPage') {
                // animation for the text
                $("#text1").typed({
                    strings: ["人生难得一知己<br/>" +
                    "结婚人生特大喜<br/>" +
                    "邀请好友来相聚<br/>" +
                    "喜酒斟满盼光临<br/>" +
                    "礼品再多不嫌多<br/>" +
                    "拿根鸡毛不嫌少<br/>" +
                    "重要大家乐呵呵<br/>" +
                    "<br/><br/>新郎： 徐海明<br/>" +
                    "新娘： 严智慧<br/>恭候您的光临!"],
                    typeSpeed: 150,
                    backDelay: 1000,
                    loop: false,
                    showCursor: false,
                    loopCount: false,
                });
            }
            //using anchorLink
            if (anchorLink == '3rdPage') {
                $("#text2").typed({
                    strings: ["时间：2015年9月5号， 周六^500<br/>天津惠中酒店^500<br/>"
                    + "地址：天津市 滨海新区 第三大街3号芳林泰达园A座<br/>"
                    + "交通：如果您乘坐公交，可在到达塘沽站之后在 赵家地 站上车，" +
                    "518路内环(轻轨东海路-轻轨东海路) 至 南海路站下车，请不要将贵重物品遗忘在车上哦。"],
                    typeSpeed: 150,
                    backDelay: 1000,
                    loop: false,
                    showCursor: false,
                    loopCount: false,
                });
            }
        }
    });
// animation for the arrows
    $('.up').velocity(
        {translateY: ["3em", "4.5em"]},
        {
            duration: 1700,
            loop: true
        });

    $('.down').velocity(
        {translateY: ["1.5em", "0em"]},
        {
            duration: 1700,
            loop: true
        });

    $('.fp-prev').velocity(
        {translateX: ["1.5em", "0em"]},
        {
            duration: 1700,
            loop: true
        });
    $('.fp-next').velocity(
        {translateX: ["-1.5em", "0em"]},
        {
            duration: 1700,
            loop: true
        });

    // animation of the twinkling star
    $('.twinkling').velocity(
        {
            backgroundPositionY: ["-500px", "1000px"],
            backgroundPositionX: ["-500px", "1000px"]
        },
        {
            duration: 32500,
            loop: true
        });
//animation for the flower
    $(window).load(function () {
        $('body').sakura();
    });

// the animation of the heart
    $('.inside').each(function (id) {
        $(this).css({
            position: 'relative',
            top: '-200px',
            opacity: 0
        });
        var wait = Math.floor((Math.random() * 3000) + 1);
        $(this).delay(wait).velocity({
            top: '0px',
            opacity: 1
        }, 1000);
    });
    // add a map
    var map = new AMap.Map('mapContainer', {
        resizeEnable: true,
        rotateEnable: true,
        dragEnable: true,
        zoomEnable: true,
        //设置可缩放的级别
        zooms: [3, 18],
        //传入2D视图，设置中心点和缩放级别
        view: new AMap.View2D({
            center: new AMap.LngLat(117.71801, 39.025124),
            zoom: 16
        })
    });

    addMarker(map);
    function addMarker(map) {
        map.clearMap();
        new AMap.Marker({
            map: map,
            icon: 'imgs/map-marker.png',
            position: new AMap.LngLat(117.71801, 39.025124),
            offset: new AMap.Pixel(-12, -36)
        });
    }

    // prevent page scrolling when you move the mapContainer on touch device
    mapContainer.addEventListener('touchstart', function (e) {
        e.preventDefault(); // prevent default click behavior
        $.fn.fullpage.setAllowScrolling(false);
    }, false);
    // enable page scrolling when you move other parts
    mapContainer.addEventListener('touchend', function (e) {
        e.preventDefault(); // prevent default click behavior
        $.fn.fullpage.setAllowScrolling(true);
    });

    //animation for the button
    document.getElementById('button').onclick = (function () {
        document.getElementsByTagName('span')[0].innerHTML = '期待您的光临!';
        return false;
    });
    document.getElementById('button2').onclick = (function () {
        document.getElementsByTagName('span')[1].innerHTML = '谢谢，祝您生活愉快！';
        return false;
    });

    //play the audio
    var vid = document.getElementById("player");

    var isAndroidDevice = navigator.userAgent.match(/(Android|Chrome)/);
    // if is android device then automatically play the audio
    // and set the speaker to pause image
    if (isAndroidDevice) {
        var count = 1;
        $("#speaker").css("background-position", "61% -11%");
    }
    else {
        count = 0;
    }

    $("#speaker").click(function () {
        if (count == 0) {
            vid.play();
            $("#speaker").animate({"backgroundPositionX": "-=70%"}, "slow", "swing");
            //$("#speaker").css("backgroundPositionX", "-=70%");
            count = 1;
        }
        else {
            vid.pause();
            $("#speaker").animate({"backgroundPositionX": "+=70%"}, "slow", "swing");
            count = 0;
        }

    });
});