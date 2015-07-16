$(document).ready(function(){
	$("#home a:contains('Home')").parent().addClass("active");
	$("#about-us a:contains('About Us')").parent().addClass("active");
	$("#shows a:contains('Shows')").parent().addClass("active");
	$("#media a:contains('Media')").parent().addClass("active");
	$("#gallery a:contains('Gallery')").parent().addClass("active");
	$("#contact-us a:contains('Contact Us')").parent().addClass("active");
})

$(".thumbnail-image").click(function(){
	$('#current-modalimage').attr('src', this.src);
	$("#gallery-modal").modal({
		"show" : true
	})

})