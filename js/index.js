$(function() {

	//todo: 選單套資料

	//todo: 會員登入時修改選單

	//todo: 線上客服缺連結


	$(".menu").on("mouseenter mouseleave","img[hover]",function() {
		var $this = $(this),
			src = $this.attr("src");
		$this.attr("src",$this.attr("hover"));
		$this.attr("hover",src);
	});


});