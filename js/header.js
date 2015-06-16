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
                for (var i = 0; i < cartlist.length; i++) {
                    html += "<tr>";
                    html += "<td width=\"34\" class=\"end\" align=\"center\"><img src=\"" + cartlist[i].PhotoSmPath + "\" height=\"25\"></td>";
                    html += "<td>" + cartlist[i].MerName + "</td>";
                    html += "<td width=\"34\" align=\"center\"><img title=\"" + cartlist[i].Color + "\" src=\"" + cartlist[i].ColorPhotoPath + "\"></td>";
                    html += "<td width=\"44\" align=\"center\">" + cartlist[i].Size + "</td>";
                    html += "<td width=\"44\" align=\"center\">" + cartlist[i].Price + "</td>";
                    html += "<td width=\"34\" class=\"end\" align=\"center\">" + cartlist[i].Num + "</td>";
                    html += "</tr>"
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
    wishlist=[];
    function getdata(wishlist) {
        var html = "";
        var count = 0;
        try {
            if (wishlist[0].MerName) {
                for (var i = 0; i < wishlist.length; i++) {
                    html += "<tr>";
                    html += "<td width=\"34\" class=\"end\" align=\"center\"><img src=\"" + wishlist[i].PhotoSmPath + "\" height=\"25\"></td>";
                    html += "<td>" + wishlist[i].MerName + "</td>";
                    html += "<td width=\"34\" align=\"center\"><img title=\"" + wishlist[i].Color + "\" src=\"" + wishlist[i].ColorPhotoPath + "\"></td>";
                    html += "<td width=\"44\" align=\"center\">" + wishlist[i].Size + "</td>";
                    html += "<td width=\"44\" align=\"center\">" + wishlist[i].Price + "</td>";
                    html += "</tr>"
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
        $(".header>div>.right>.down>.fav>.favbox>.totalmoney>span").text(total);
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
        initShoppingCart();
        initWishList();
    })(); //initializing
    $(".menu").on("mouseenter mouseleave", "img[hover]", function() {
        var $this = $(this),
            src = $this.attr("src");
        $this.attr("src", $this.attr("hover"));
        $this.attr("hover", src);
    }); //change menu image
});