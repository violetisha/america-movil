$ ->
	
	# slider
	$("#slider").slidesjs
		width: 1480
		height: 380
		navigation:
			active: false
			effect: "fade"

		pagination:
			active: false
			effect: "fade"

		play:
			auto: true
			effect: "fade"
			interval: 5000

		effect:
			fade:
				speed: 800



#submenu
$("#main-nav > ul li a").click ->
	if $(this).hasClass("activo")
		$(this).removeClass "activo"
	else
		$("#main-nav > ul li a").removeClass "activo"
		$(this).addClass "activo"