$(document).ready(function(){
	
	imageBg($("#imgFondArticle"));
	imageBg($("#lightbox"));
		
	function imageBg(elem){
		var img = $(elem).children("img.imgRemove").attr("src");
		$(elem).css("background-image", "url("+img+")");
		$(elem).children("img.imgRemove").remove();
	}
});