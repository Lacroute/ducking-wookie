$(document).ready(function(){
	$( "dl" ).each(function() {
		imageBg(this);
	});
	
	imageBg($("#mainArticle"));
	imageBg($("#secondArticle"));
	imageBg($("#imgFond"));
		
	function imageBg(elem){
		var img = $(elem).children("img.imgRemove").attr("src");
		$(elem).css("background-image", "url("+img+")");
		$(elem).children("img.imgRemove").remove();
	}
});