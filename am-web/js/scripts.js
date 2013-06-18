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
	// -----------------------------
});

// MENU
$(window).load(function(){
 	var altura = $(window).height();

 	$('.open').click(function() {
		$('header').css("height",altura)
		$('#main-nav').css("height",(altura - 121))
	});

	$('.close').click(function() {
		$('header').css("height","auto")
	});
});