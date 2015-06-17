$(function() {
    function isEmail(emailtoCheck) {
        var regExp = /^[^@^\s]+@[^\.@^\s]+(\.[^\.@^\s]+)+$/;
        if (emailtoCheck.match(regExp)) {
            return true;
        } else {
            return false;
        }
    }
    function showMessage(message) {
        if (!$(".overlayer").hasClass("close alert")) {
            $(".overlayer").addClass("close alert");
        }
        var html="";
        html+="<div>";
        html+="<div class=\"title\">提示訊息</div>";
        html+="<div class=\"message\">" + message + "</div>";
        html+="<div class=\"btn\">OK</div>";
        html+="</div>";
        $(".overlayer").html(html);
    }
    function register() {
        var $email = $(".epm");
        if ($email.val() !== "") {
            if (isEmail($email.val())) {
                $.getJSON("../common/ajax/getenewslette.ashx", {
                    email: $email.val()
                }, function(data) {
                    if (data.isSuccess) {
                        showMessage("訂閱電子報完成!");
                    } else {
                        if (data.errorMessage == "has same email") {
                            showMessage("此E-mail信箱已填寫過!");
                        } else {
                            showMessage("請填寫有效的E-mail信箱!");
                        }
                    }
                });
            } else {
                showMessage("請填寫有效的E-mail信箱!");
            }
        } else {
            showMessage("請填寫E-mail信箱!");
        }
    }
    $(".epm").keyup(function(e) {
        if (e.keyCode === 13) {
            register();
        }
    });
    $(".footer>div>.up>.left>.btn").click(function() {
        register();
    });
    $(".overlayer").on("click",">div",function() {
    	if ($(".overlayer").hasClass("close alert")) {
    		$(".overlayer").html("");
            $(".overlayer").removeClass("close alert");
        }
    });
});