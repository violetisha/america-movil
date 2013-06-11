$(function() {

	// slider
	$('#slider').slidesjs({
		width: 420,
		height: 237,
		navigation: false,
		play: {
					active: false,
					auto: true,
					interval: 2000,
					swap: true,
					pauseOnHover: true,
					restartDelay: 2500
				},
		pagination: false
	});

	//submenu
	$('#main-nav > ul li a').click(function() {
		
		if($(this).hasClass('activo')){
			$(this).removeClass("activo");
		}
		else {
			$(this).addClass("activo");
		}
		// fix brinco en menu
		$("#main-nav").css("position", "absolute")
	});

	// fix brinco en menu
	$('.close-menu').click(function() {
		
		$("#main-nav").css("position", "fixed")
	});

	// para el paginador ajax, un demo
	$('.load_more').click(function() {
		$('.cargados').append('<section class="lista"><article><a href="articulo.html"><img src="http://placehold.it/100x100" alt="WikiMéxico"><div class="texto"><h2>El misterio de los anasazi </h2><p class="meta">Por: Claudia Espinoza<br>Fecha: 21/05/2013</p></div></a></article></section><section class="lista"><article><a href="articulo.html"><img src="http://placehold.it/100x100" alt="WikiMéxico"><div class="texto"><h2>El misterio de los anasazi </h2><p class="meta">Por: Claudia Espinoza<br>Fecha: 21/05/2013</p></div></a></article></section><section class="lista"><article><a href="articulo.html"><img src="http://placehold.it/100x100" alt="WikiMéxico"><div class="texto"><h2>El misterio de los anasazi </h2><p class="meta">Por: Claudia Espinoza<br>Fecha: 21/05/2013</p></div></a></article></section><section class="lista"><article><a href="articulo.html"><img src="http://placehold.it/100x100" alt="WikiMéxico"><div class="texto"><h2>El misterio de los anasazi </h2><p class="meta">Por: Claudia Espinoza<br>Fecha: 21/05/2013</p></div></a></article></section><section class="lista"><article><a href="articulo.html"><img src="http://placehold.it/100x100" alt="WikiMéxico"><div class="texto"><h2>El misterio de los anasazi </h2><p class="meta">Por: Claudia Espinoza<br>Fecha: 21/05/2013</p></div></a></article></section>');
		alto = $(".page-wrap").height()
	$("#main-nav").css("min-height", alto)
	});


});

$(window).load(function(){
	var alto;
	// alto minimo
	alto = $(".page-wrap").height()
	$("#main-nav").css("min-height", alto)
});

$(window).resize(function() {
	var alto;
	// alto minimo
	alto = $(".page-wrap").height()
	$("#main-nav").css("min-height", alto)
});