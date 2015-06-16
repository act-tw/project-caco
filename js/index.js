$(function() {




	$(".menu").on("mouseenter mouseleave","img[hover]",function() {
		var $this = $(this),
			src = $this.attr("src");
		$this.attr("src",$this.attr("hover"));
		$this.attr("hover",src);
	});


});