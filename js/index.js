$(function() {
    var data = [
        [
            [
                "http://www.celluloidportraits.com/img/Films/imgFILM28/17_6164_L.jpg",
                "#url1"
            ],
            [
                "http://3.bp.blogspot.com/-AIQF_Jg8vI4/UPSPVfVHnhI/AAAAAAABCWw/NaMM9y4n06E/s1600/Old%2BPhotograph%2BPier%2BWestray%2BOrkney%2BScotland.jpg",
                "#url2"
            ],
            [
                "https://gateway2morocco.com/uploads/images/blog/743095menara.jpg.jpg",
                "#url3"
            ],
            [
                "http://g02.s.alicdn.com/kf/HT1alyaFR0cXXagOFbXJ/67224/HT1alyaFR0cXXagOFbXJ.jpg",
                "#url4"
            ]
        ]
    ];







    (function(data) {
    	var sid;
    	function build(data) {
    		return "<a href=\"" + data[1] + "\"><img src=\"" + data[0] + "\"></a>";
    	}
    	function resize() {
    		var nowWidth;
    		$(".index>.up>div").css("left",0).width("auto");
    		nowWidth = $(".index>.up").width();
    		$(".index>.up").height(nowWidth/(1255/585));
    		$(".index>.up>div").width(nowWidth*$(".index>.up>div>a").length);
    		$(".index>.up>div>a>img").width(nowWidth);
    	}
    	function next() {
    		$(".index>.up>div").animate({left:"-=" + $(".index>.up").width()},function() {
    			var at = (parseInt($(this).css("left"),10) / -$(".index>.up").width())+1;
    			if (at >= $(".index>.up>div>a").length) {
    				$(".index>.up>div").css("left",0);
    				showNavi();
    			}
    		});
    	}
    	function prev() {
    		var at = parseInt($(".index>.up>div").css("left"),10);
    		if (at===0) {
    			$(".index>.up>div").css("left",$(".index>.up").width()*-($(".index>.up>div>a").length-1));
    		}
    		$(".index>.up>div").animate({left:"+=" + $(".index>.up").width()},function() {
    			showNavi();
    		});
    	}
    	function generate(data) {
    	    var html = "";
    	    var navi = "<ul>";
    	    for (var i = 0, max = data.length; i < max; i++) {
    	        html += build(data[i]);
    	        if (i === max - 1) {
    	            html += build(data[0]);
    	        }
    	        navi += "<li";
    	        if (i===0) {
    	        	navi += " class=\"active\"";
    	        }
    	        navi += "></li>";
    	    }
    	    navi += "</ul>";
    	    $(".index>.up>div").html(html).parent().append(navi);
    	}
    	function autoResize() {
    	    $(window).resize(function() {
    	        resize();
    	    });
    	    resize();
    	}
    	function start() {
    		sid=setInterval(next,3000);
    	}
    	function hoverStop() {
    		$(".index>.up").mouseenter(function() {
    			if (sid) {
    				clearInterval(sid);
    			}
    		}).mouseleave(function() {
    			start();
    		});
    	}
    	function showNavi(index) {
    		 $(".index>.up>ul>li.active").removeClass();
    		 $(".index>.up>ul>li").eq(index).addClass("active");
    	}
    	(function() {
    		generate(data);

    		autoResize();
    		hoverStop();
    		start();
    	})();//initializing
    })(data[0]); //rotate
});
