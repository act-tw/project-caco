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
        ],
        [
        	[
        		"http://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s306x306/e15/10955018_1558782561067671_1930246942_n.jpg",
        		"#url1"
        	],
        	[
        		"https://scontent-ams.cdninstagram.com/hphotos-xaf1/t51.2885-15/s306x306/e15/11015563_715765361877503_232937317_n.jpg",
        		"#url2"
        	],
        	[
        		"https://s.yimg.com/aw/api/res/1.2/_sfkV62ulGAnT4pMnnuLDw--/YXBwaWQ9eXR3YXVjdGlvbnNlcnZpY2U7aD0zMDY7cT04NTtyb3RhdGU9YXV0bztzcj0xLjI7c3M9MS4yO3c9MzA2/http://nevec-img.zenfs.com/prod/tw_ec05-7/20d395e9-d554-43fb-a82e-e017bed2af91.jpg",
        		"#url3"
        	],
        	[
        		"http://www.symme.com/media/reviews/photos/original/25/e0/67/157175-10428009-631477343651272-6213452629237871894-n-78-1425466202.jpg",
        		"#url4"
        	], 
        	[
        		"https://s.yimg.com/aw/api/res/1.2/4oJI2G3zUmenhzM.Uy_f3g--/YXBwaWQ9eXR3YXVjdGlvbnNlcnZpY2U7Zmk9ZmlsbDtoPTMwNjtxPTg1O3JvdGF0ZT1hdXRvO3NyPTEuMjtzcz0xLjI7dz0zMDY-/http://nevec-img.zenfs.com/prod/tw_ec05-7/669a886e-9fa1-4afc-b82f-751a9e8c159f.jpg",
        		"#url5"
        	], 
        	[
        		"http://img.xizhewang.com/upload/15/02/12/334353575B59608FCD05B4807CB60D56.jpg",
        		"#url6"
        	], 
        	[
        		"https://s.yimg.com/aw/api/res/1.2/X9mznqdD97xA77lw8r.ekQ--/YXBwaWQ9eXR3YXVjdGlvbnNlcnZpY2U7Zmk9ZmlsbDtoPTMwNjtxPTg1O3JvdGF0ZT1hdXRvO3c9MzA2/http://nevec-img.zenfs.com/prod/tw_ec05-7/e68f8215-693a-4e23-9390-56526df1b6c4.jpg",
        		"#url7"
        	], 
        	[
        		"https://s.yimg.com/hg/pimg2/a0/a7/p082058971930-item-3594xf2x0306x0306-m.jpg",
        		"#url8"
        	],



			[
        		"http://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s306x306/e15/10955018_1558782561067671_1930246942_n.jpg",
        		"#url1"
        	],
        	[
        		"https://scontent-ams.cdninstagram.com/hphotos-xaf1/t51.2885-15/s306x306/e15/11015563_715765361877503_232937317_n.jpg",
        		"#url2"
        	],
        	[
        		"https://s.yimg.com/aw/api/res/1.2/_sfkV62ulGAnT4pMnnuLDw--/YXBwaWQ9eXR3YXVjdGlvbnNlcnZpY2U7aD0zMDY7cT04NTtyb3RhdGU9YXV0bztzcj0xLjI7c3M9MS4yO3c9MzA2/http://nevec-img.zenfs.com/prod/tw_ec05-7/20d395e9-d554-43fb-a82e-e017bed2af91.jpg",
        		"#url3"
        	],
        	[
        		"http://www.symme.com/media/reviews/photos/original/25/e0/67/157175-10428009-631477343651272-6213452629237871894-n-78-1425466202.jpg",
        		"#url4"
        	], 
        	[
        		"https://s.yimg.com/aw/api/res/1.2/4oJI2G3zUmenhzM.Uy_f3g--/YXBwaWQ9eXR3YXVjdGlvbnNlcnZpY2U7Zmk9ZmlsbDtoPTMwNjtxPTg1O3JvdGF0ZT1hdXRvO3NyPTEuMjtzcz0xLjI7dz0zMDY-/http://nevec-img.zenfs.com/prod/tw_ec05-7/669a886e-9fa1-4afc-b82f-751a9e8c159f.jpg",
        		"#url5"
        	], 
        	[
        		"http://img.xizhewang.com/upload/15/02/12/334353575B59608FCD05B4807CB60D56.jpg",
        		"#url6"
        	], 
        	[
        		"https://s.yimg.com/aw/api/res/1.2/X9mznqdD97xA77lw8r.ekQ--/YXBwaWQ9eXR3YXVjdGlvbnNlcnZpY2U7Zmk9ZmlsbDtoPTMwNjtxPTg1O3JvdGF0ZT1hdXRvO3c9MzA2/http://nevec-img.zenfs.com/prod/tw_ec05-7/e68f8215-693a-4e23-9390-56526df1b6c4.jpg",
        		"#url7"
        	], 
        	[
        		"https://s.yimg.com/hg/pimg2/a0/a7/p082058971930-item-3594xf2x0306x0306-m.jpg",
        		"#url8"
        	] , 
        	[
        		"https://s.yimg.com/hg/pimg2/a0/a7/p082058971930-item-3594xf2x0306x0306-m.jpg",
        		"#url8"
        	]

        ],
        false

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
    			}
    			showNavi(parseInt($(this).css("left"),10)/ -$(".index>.up").width());
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
    	function setNavi() {
    		$(".index>.up>ul>li").click(function() {
    			var index = $(this).index();
    			$(".index>.up>div").animate({left:-index * $(".index>.up").width()},function() {
    				showNavi(index);
    			});
    		});
    	}
    	(function(data) {
    		generate(data);
    		setNavi();
    		autoResize();
    		hoverStop();
    		start();
    	})(data);//initializing
    })(data[0]); //rotate


    (function(data,autoPlay) {
    	var sid;
    	function build(data) {
    		return "<a href=\"" + data[1] + "\"><img src=\"" + data[0] + "\"></a>";
    	}
    	function resize() {
    		var nowWidth;
    		$(".index>.down>div>div").css("left",0).width("auto");
    		$(".index>.down").width("auto");
    		nowWidth = $(".index>.down>div").width();
    		$(".index>.down").width(nowWidth);
    		$(".index>.down>div").height(nowWidth/(1255/306)).css("margin-top",nowWidth/(1255/17));
    		$(".index>.down>div>div").width(nowWidth/(1255/316)*$(".index>.down>div>div>a").length);
    		$(".index>.down>div>div>a>img").width(nowWidth/(1255/306)).css("margin-right",nowWidth/(1255/10));
    	}
    	function autoResize() {
    	    $(window).resize(function() {
    	        resize();
    	    });
    	    resize();
    	}
    	function generate(data) {
    	    var html = "";
    	    for (var i = 0, max = data.length; i < max; i++) {
    	        html += build(data[i]);
    	    }
    	    $(".index>.down>div").html("<div>" + html + "</div>");
    	    if (data.length>4) {
    	    	$(".index>.down").append("<span class=\"rightflag\"></span><span class=\"leftflag\"></span>");
    	    }
    	}
    	function next() {
    		if (!$(".index>.down>div>div").is(":animated")) {
	    		var max = $(".index>.down>div>div").width();
	    		var width = $(".index>.down>div>div>a").width()*4;
	    		var left = -1*parseInt($(".index>.down>div>div").css("left"));
	    		var move = "-=" + width;
	    		if (max-width === left ) {
	    			move = 0;
	    		} else if (left+width > max -width) {
	    			move = -(max-width);
	    		}
				$(".index>.down>div>div").animate({left:move});
    		}
    	}
    	function back() {
    		if (!$(".index>.down>div>div").is(":animated")) {
    			var max = $(".index>.down>div>div").width();
	    		var width = $(".index>.down>div>div>a").width()*4;
	    		var left = -1*parseInt($(".index>.down>div>div").css("left"));
	    		var move = "+=" + width;
	    		if (left <= 0) {
	    			move = -(max-width);
	    		} else if (left<width) {
	    			move = 0;
	    		}
	    		$(".index>.down>div>div").animate({left:move});
    		}
    	}
    	function start(autoPlay) {
    		if (autoPlay) {
    			sid=setInterval(next,3000);	
    		}
    	}
    	function hoverStop(autoPlay) {
    		if (autoPlay) {
	    		$(".index>.down").mouseenter(function() {
	    			if (sid) {
	    				clearInterval(sid);
	    			}
	    		}).mouseleave(function() {
	    			start();
	    		});
	    	}
    	}
    	function setFlag() {
    		$(".index>.down>.leftflag").click(function() {
    			back();
    		});
    		$(".index>.down>.rightflag").click(function() {
    			next();
    		});
    	}
    	(function(data,autoPlay) {
    		generate(data);
    		autoResize();
    		setFlag();
    		start(autoPlay);
    		hoverStop(autoPlay);
    	})(data,autoPlay); //initializing
    })(data[1],data[2]); //scrollable
});
