"use strict";
var isLocal = /^file\:\/\/\//i.test(location.href);
function initShoppingCart() {
    var cartlist = [{"MerNo":"SBSS017","MerNo1":"BSS017","MerName":"ELMO條紋短T","Color":"74丈青","Size":"S","Price":350,"Num":1,"PhotoSmPath":"http://www.caco.url.tw/caco/PD/BSS017_260_2.jpg","ColorPhotoPath":"http://www.caco.url.tw/caco/COLOR/BSS01774.jpg"},{"MerNo":"SBCA071","MerNo1":"BCA071","MerName":"雪花鬚邊牛仔短褲","Color":"70淺藍","Size":"M","Price":550,"Num":1,"PhotoSmPath":"http://www.caco.url.tw/caco/PD/BCA071_260_1.jpg","ColorPhotoPath":"http://www.caco.url.tw/caco/COLOR/BCA07170.jpg"},{"MerNo":"SBNA006","MerNo1":"BNA006","MerName":"潑漆破壞牛仔短褲‧情侶款(女)","Color":"70淺藍","Size":"M","Price":680,"Num":1,"PhotoSmPath":"http://www.caco.url.tw/caco/PD/BNA006_260_1.jpg","ColorPhotoPath":"http://www.caco.url.tw/caco/COLOR/BNA00670.jpg"},{"MerNo":"SBSS013","MerNo1":"BSS013","MerName":"MIT 拼接數字ELMO背心‧情侶款(女)","Color":"34紅色","Size":"F","Price":350,"Num":1,"PhotoSmPath":"http://www.caco.url.tw/caco/PD/BSS013_260_1.jpg","ColorPhotoPath":"http://www.caco.url.tw/caco/COLOR/BSS01334.jpg"}];
    function getdata(cartlist) {
        var html = "";
        var count = 0;
        var total = 0;
        try {
            if (cartlist[0].MerName) {
                for (var i = 0, max = cartlist.length; i < max; i++) {
                    html += "<tr>";
                    html += "<td width=\"34\" class=\"end\" align=\"center\"><img src=\"" + cartlist[i].PhotoSmPath + "\" height=\"25\"></td>";
                    html += "<td>" + cartlist[i].MerName + "</td>";
                    html += "<td width=\"34\" align=\"center\"><img title=\"" + cartlist[i].Color + "\" src=\"" + cartlist[i].ColorPhotoPath + "\"></td>";
                    html += "<td width=\"44\" align=\"center\">" + cartlist[i].Size + "</td>";
                    html += "<td width=\"44\" align=\"center\">" + cartlist[i].Price + "</td>";
                    html += "<td width=\"34\" class=\"end\" align=\"center\">" + cartlist[i].Num + "</td>";
                    html += "</tr>";
                    count += cartlist[i].Num;
                    total += cartlist[i].Num * cartlist[i].Price;
                }
            }
        } catch (e) {}
        if (html === "") {
            html += "<tr>";
            html += "<td class=\"end\" align=\"center\" colspan=\"6\">沒有商品</td>";
            html += "</tr>";
        }
        $(".header>div>.right>.down>.bag>.bagbox>.tablebody>tbody").html(html);
        $(".header>div>.right>.down>.bag>span").text(count);
        $(".header>div>.right>.down>.bag>.bagbox>.totalmoney>span").text(total);
    }
    if (isLocal) {
        getdata(cartlist);
    } else {
        $.getJSON("../Common/CartList.ashx", function(cartlist) {
            getdata(cartlist);
        });
    }
}
function initWishList() {
	var wishlist = [{"tidno":218052,"MerNo1":"BSS022","MerName":"ELMO背心","Color":"02米白","Size":"S","Price":290,"PhotoSmPath":"http://www.caco.url.tw/caco/PD/BSS022_260_1.jpg","DetailUrl":"itemDetail.aspx?mNo1=BSS022","merOrderNum":0,"ColorPhotoPath":"http://www.caco.url.tw/caco/COLOR/BSS02202.jpg"},{"tidno":218053,"MerNo1":"VC0022","MerName":"水洗單寧後背包","Color":"78深藍","Size":"F","Price":680,"PhotoSmPath":"http://www.caco.url.tw/caco/PD/VC0022_260_1.jpg","DetailUrl":"itemDetail.aspx?mNo1=VC0022","merOrderNum":0,"ColorPhotoPath":"http://www.caco.url.tw/caco/COLOR/VC002278.jpg"},{"tidno":218054,"MerNo1":"BCA050","MerName":"刷色抓破男朋友褲","Color":"70淺藍","Size":"L","Price":880,"PhotoSmPath":"http://www.caco.url.tw/caco/PD/BCA050_260_1.jpg","DetailUrl":"itemDetail.aspx?mNo1=BCA050","merOrderNum":0,"ColorPhotoPath":"http://www.caco.url.tw/caco/COLOR/BCA05070.jpg"},{"tidno":218055,"MerNo1":"BCA150","MerName":"波西米亞連身褲","Color":"74丈青","Size":"M","Price":480,"PhotoSmPath":"http://www.caco.url.tw/caco/PD/BCA150_260_1.jpg","DetailUrl":"itemDetail.aspx?mNo1=BCA150","merOrderNum":0,"ColorPhotoPath":"http://www.caco.url.tw/caco/COLOR/BCA15074.jpg"}];
    function getdata(wishlist) {
        var html = "";
        var count = 0;
        try {
            if (wishlist[0].MerName) {
                for (var i = 0, max = wishlist.length; i < max; i++) {
                    html += "<tr>";
                    html += "<td width=\"34\" class=\"end\" align=\"center\"><img src=\"" + wishlist[i].PhotoSmPath + "\" height=\"25\"></td>";
                    html += "<td>" + wishlist[i].MerName + "</td>";
                    html += "<td width=\"34\" align=\"center\"><img title=\"" + wishlist[i].Color + "\" src=\"" + wishlist[i].ColorPhotoPath + "\"></td>";
                    html += "<td width=\"44\" align=\"center\">" + wishlist[i].Size + "</td>";
                    html += "<td width=\"44\" align=\"center\">" + wishlist[i].Price + "</td>";
                    html += "</tr>";
                    count += 1;
                }
            }
        } catch (e) {}
        if (html === "") {
            html += "<tr>";
            html += "<td class=\"end\" align=\"center\" colspan=\"5\">沒有商品</td>";
            html += "</tr>";
        }
        $(".header>div>.right>.down>.fav>.favbox>.tablebody>tbody").html(html);
        $(".header>div>.right>.down>.fav>span").text(count);
    }
    if (isLocal) {
        getdata(wishlist);
    } else {
        $.getJSON("../Common/m/Main/Ajax/CartCmd.ashx?method=GetTraceList&returntype=json", function(wishlist) {
            getdata(wishlist);
        });
    }	
}
$(function() {
    (function() {
        var data = {
            "IsLogin": true
        };
        function getdata(data) {
            if (data !== null && data.IsLogin) {
                $(".usrbox>.lab").first().text("SIGN OUT");
                $(".usrbox>.btn").first().find(">a").text("登出").attr("href", "../Common/loginout.aspx");
            }
        }
        if (isLocal) {
            getdata(data);
        } else {
            $.getJSON("../Common/LoginStatus.ashx", function(data) {
                getdata(data);
            });
        }
    })(); //loginstatus
    (function() {
        $(".menu").on("mouseenter mouseleave", "img[hover]", function() {
            var $this = $(this),
                src = $this.attr("src");
            $this.attr("src", $this.attr("hover"));
            $this.attr("hover", src);
        }); //change menu image
    })(); //change menu image    
    (function() {
        function setAdjustHeight() {
            $(".event>.inbox").height($(window).height()-$(".header").height());
            $(".event>.inbox>.box").height($(window).height()-$(".header").height()-$(".event>.inbox>.lab").outerHeight(true));
            $(".event>.inbox>.box").mCustomScrollbar("update");
        }
        function setmCustomScrollbar() {
            $(".event>.inbox").width(190);
            $(".event>.inbox>.box").mCustomScrollbar({
                autoDraggerLength: false,
                mouseWheel: "auto",
                scrollButtons: {
                    enable: false
                }
            });
            $(".event>.inbox").removeAttr("style");
        }
        $(window).resize(function() {
            setAdjustHeight();
        });
        $(".event").mouseenter(function() {
            if (!$(this).hasClass("close")) {
                $(this).add(".overlayer").addClass("close");

            }
        }).mouseleave(function() {
            if ($(this).hasClass("close")) {
                $(this).add(".overlayer").removeClass("close");
            }
        });
        (function() {
            var data = [{"uid":"0b82f6e0-5bcc-4339-8d63-1dcad621bc0c","image":"http://www.caco2.url.tw/caco/AC/images/15601-EVENT.gif","title":" ","thumb":null,"url":"http://goo.gl/MBp04e","enable":true,"sortnum":0},{"uid":"dc8066ce-0e56-4c1b-ac1e-aa20bb559e56","image":"http://www.caco2.url.tw/caco/AC/images/EVENT_70off_MAN.gif","title":"  ","thumb":null,"url":"http://goo.gl/nRsAfd","enable":true,"sortnum":6},{"uid":"d19061a7-6115-4c32-888c-2e07c3c48977","image":"http://www.caco2.url.tw/caco/AC/images/EVENT_70off_WOMAN.gif","title":"  ","thumb":null,"url":"http://goo.gl/Io0uZO","enable":true,"sortnum":7},{"uid":"165c01c1-9894-411c-a34a-93903914f0d8","image":"http://www.caco2.url.tw/caco/AC/images/150427-EVENT.gif","title":" ","thumb":null,"url":"http://goo.gl/ekoxwm","enable":true,"sortnum":11},{"uid":"8335181b-9971-489f-bc5e-05e73e7cb430","image":"http://www.caco2.url.tw/caco/AC/images/150427-EVENT-bonus.gif","title":" ","thumb":null,"url":"http://goo.gl/XD1IEA","enable":true,"sortnum":12},{"uid":"70764ce4-ea7b-45f1-8521-71241f16b6e6","image":"http://www.caco2.url.tw/caco/AC/images/150424-EVENT_over.gif","title":" ","thumb":null,"url":"http://goo.gl/0TUpKF","enable":true,"sortnum":100}];
            function getdata(data) {
                var html = "";
                for (var i = 0, max = data.length; i < max; i++) {
                    html += "<a href=\"" + data[i].url + "\">";
                    html += "<img src=\"" + data[i].image + "\">";
                    html += "</a>";
                }
                $(".event>.inbox>.box").html(html);
                setmCustomScrollbar();
                $(".event>.inbox>.box img").load(function() {
                    setAdjustHeight();
                });
                setAdjustHeight();
            }
            if (isLocal) {
                getdata(data);
            } else {
                $.getJSON("../Common/supersizelist.ashx", function(data) {
                    getdata(data);
                });
            }
        })(); //load event data
    })(); //event
    (function() {
        initShoppingCart();
        initWishList();
    })(); //initializing
});
$(function () {
    function queryString(name) {
        var allVars = window.location.search.substring(1);
        var vars = allVars.split("&");
        for (var i = 0; i < vars.length; i++) {
            var key = vars[i].split("=");
            if (key[0].toUpperCase() == name.toUpperCase()) return key[1];
        }
        return "";
    }
    function runable(data) {
        if (data !== undefined && data !== null && data.length > 0) {
            (function (data) {
                function build(data) {
                    var html = "";
                    html += "<a href=\"" + data[1] + "\">";
                    html += "<img src=\"" + data[0] + "\">";
                    html += "</a>";
                    return html;
                }
                var html = "",
                    navi = "";
                html += "<div class=\"outbox\">";
                html += "<div class=\"inbox\">";
                for (var i = 0, max = data.length; i < max; i++) {
                    html += build(data[i]);
                    if (i >= max - 1 && max >1) {
                        html += build(data[0]);
                    }
                    navi += "<li";
                    if (i === 0) {
                        navi += " class=\"active\"";
                    }
                    navi += "></li>";
                }
                html += "</div>";
                if (data.length > 1) {
                    html += "<ul>" + navi + "</ul>";
                }
                html += "</div>";
                $("#litTop").prepend(html);
                var n = 0;
                $("#litTop>.outbox>.inbox>a>img").load(function () {
                    n++;
                    if (n >= $("#litTop>.outbox>.inbox>a>img").length) {
                        loadAllImageCompleted($(this).width(), $(this).height(), n);
                    }
                });
                function loadAllImageCompleted(width, height, count) {
                    $("#litTop>.outbox").width(width).height(height);
                    $("#litTop>.outbox>.inbox").width(width * count);
                    var sid;
                    function next() {
                        $("#litTop>.outbox>.inbox").animate({ left: "-=" + width }, function () {
                            var at = (parseInt($(this).css("left"), 10) / -width) + 1;
                            if (at >= count) {
                                $(this).css("left", 0);
                            }
                            showNavi(parseInt($(this).css("left"), 10) / -width);
                        });
                    }
                    function start() {
                        sid = setInterval(next, 3000);
                    }
                    function showNavi(index) {
                        $("#litTop>.outbox>ul>li.active").removeClass();
                        $("#litTop>.outbox>ul>li").eq(index).addClass("active");
                    }
                    if (data.length > 1) {
                        $("#litTop>.outbox").mouseenter(function () {
                            if (sid) {
                                clearInterval(sid);
                            }
                        }).mouseleave(function () {
                            start();
                        });
                        $("#litTop>.outbox>ul>li").click(function () {
                            var index = $(this).index();
                            $("#litTop>.outbox>.inbox").animate({ left: -index * width }, function () {
                                showNavi(index);
                            });
                        });
                        start();
                    }
                }
            })(data); //generate
        }
    }
    if (/itemList.aspx/i.test(location.href)) {
        $.getJSON("../common/ajax/menucmd.ashx", function (data) {
            function findP(items, p, l) {
                for (var i = 0, max = items.length; i < max; i++) {
                    if (items[i].Idno.toString() === p) {
                        return p;
                    } else {
                        var out = findP(items[i].List, p, l + 1);
                        if (out && l===0) {
                            return items[i].Idno.toString();
                        }
                    }
                }
                return false;
            }
            var m = queryString("m");
            var p = queryString("p");
            var item = $.grep(data, function(a) {
                return a.Idno.toString() === m;
            })[0];
            var subP = findP(item.SubClass, p, 0);
            if (p !== "") {
                $.getJSON("../Shop/CustomUc/C12Coconut201212/201506/data/data.ashx", { m: m, p: subP }, function(data) {
                    runable(data);
                });
            }
        });
    }
});