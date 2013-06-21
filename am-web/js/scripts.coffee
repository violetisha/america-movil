init = ->
	
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

$(document).on 'ready', init

resizing = ->
	#submenu
	if $(window).width() <= 768

		$("#main-nav > ul > li > a").attr "href", "#main-nav"

		$("#main-nav > ul > li > a").click ->
			if $(this).hasClass("activo")
				$(this).removeClass "activo"
			else
				$("#main-nav > ul > li > a").removeClass "activo"
				$(this).addClass "activo"

	# en lugar de esto, vamos a tener que hacer un ciclo, que itere entre todos los a
	# y que guarde todos los href en un arreglo, para vovlerselos a poner, jaja XD
	else $("#main-nav > ul > li > a").attr "href", "interna.html"

resizing()

$(window).on 'resize', resizing