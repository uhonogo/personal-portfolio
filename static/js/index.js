$(document).ready(function() {
	// owl slider 
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	// menu animation
	var menu_button = $( '.menu-button' );
	var menu_block  = $( '.menu-wrap');

	// remove "active" class when page load/reload
	menu_button.removeClass('active');
	
	// remove "show" class when page load/reload
	menu_block.removeClass('show');

	menu_button.click( function() {
		
		menu_button.toggleClass('active');
		menu_block.toggleClass('show');

	});	

	// get top distance
	$( 'main' ).children().each( function() {
		var window_height = $( window ).height()/2;

		var bottom_side = $(this).offset().top - window_height + $(this).height();
		var top_side    = $(this).offset().top - window_height;

		var active_section = $(this).attr('id');

		// scroll function
		$( window ).scroll( function() {

			var scrollTop = $( window ).scrollTop();

			var top    = top_side - scrollTop;
			var bottom = bottom_side - scrollTop;
			
			if ( top <= 0 && bottom >= 0 ) {
				$(this).addClass('active');
				$('.' + active_section ).addClass('active');
			} else {
				$( this ).removeClass('active');
				$('.' + active_section ).removeClass('active');
			}
		});
	});

	
	var article_block = $('.article-block');
	
	// remove active class from article block
	article_block.removeClass('active');

	// article block hover fuction
	article_block.hover( function() {
		$(this).toggleClass('active');
	});
	
	// navigation 
	var menu_link = $('.menu-block li');

	// remove active class from menu nav
	menu_link.removeClass('active');
	// article block hover fuction
	menu_link.hover( function () {
		$(this).toggleClass('active');
	});

});