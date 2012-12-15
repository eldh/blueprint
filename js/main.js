$(document).ready(function(){
	$(".fullscreen-box").css("height", window.innerHeight);
	$(".placekitten").each(function(){
		var height = $(this).outerHeight();
		var width = $(this).outerWidth();
		$(this).css("background-image", "url('http://placekitten.com/"+width+"/"+height+"')");
	});
});
