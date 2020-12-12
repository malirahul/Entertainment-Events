// Code By Webdevtrick ( https://webdevtrick.com )
jQuery(document).ready(function($){
	//open menu
	$('.menu').on('click', function(event){
		event.preventDefault();
		$('#wrapper').addClass('move-out');
		$('#main-nav').addClass('is-visible');
		$('.transparent-shadow').addClass('is-visible');
	});
	//close menu
	$('.close-nav').on('click', function(event){
		event.preventDefault();
		$('#wrapper').removeClass('move-out');
		$('#main-nav').removeClass('is-visible');
		$('.transparent-shadow').removeClass('is-visible');
	});

	//blur effect
	set_clip_property();
	$(window).on('resize', function(){
		set_clip_property();
	});

	function set_clip_property() {
		var $header_height = $('.nav').height(),
			$window_height = $(window).height(),
			$header_top = $window_height - $header_height,
			$window_width = $(window).width();
		$('.bg').css('clip', 'rect('+$header_top+'px, '+$window_width+'px, '+$window_height+'px, 0px)');
	}
});