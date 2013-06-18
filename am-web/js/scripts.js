$(function() {
	// slider
	$('#slider').slidesjs({
		width: 1480,
		height: 380,
		navigation: {
			active: false,
			effect: "fade"
		},
		pagination: {
			active: false,
			effect: "fade"
		},
		play: {
			auto: true,
			effect: "fade",
			interval: 5000
		},
		effect: {
			fade: {
				speed: 800
			}
		}
	});
	//----------------------------------------------

	// Menu
    $('#nav-mobile a').click(function() {
    	//$('#main-nav').slideDown("slow")
    	$('#main-nav').css({"height":"209px","display":"block"});
    });
    //----------------------------------------------

});