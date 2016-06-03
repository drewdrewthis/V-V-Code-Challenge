console.time('timer');

$(document).ready(function() {

	// Loads the lazy script
    $(".lazy").lazyload({
        effect : "fadeIn",
        threshold: 0,
		effectspeed: 2000 
    });

    // Set the fullscreen element to have the same height as the window
	$(".full-screen").css("min-height", $(window).height());

	$('.down-arrow').on('click', function(e) {
		e.preventDefault();
		var element = $(this).parents('section').next('section');
		$('html,body').animate({
			scrollTop: element.offset().top
		}, 'normal', 'swing');
	});

	$('.navbar').affix({
	      offset: {
	        top: 0
	      }
	}); 

	setTimeout(function(){
		$('.intro-section').css('color', 'white');
		$('.section-overlay').fadeOut(2000);
		$('.intro-section').addClass('first-bg');
	}, 500);
});

$(window).resize(function() {
	// Set the fullscreen element to have the same height as the window when the window is resized
	$(".full-screen").css("min-height", $(window).height());
});

// Initialize a function that makes an element parallax
// Takes the jquery element, a starting position, and a speed as arguments
function parallax($elem, start, speed) {
	// Find how far the user has scrolled
	var scrolled = $(window).scrollTop();
	// Change the top of the element based on window scroll and speed
	$elem.css('top', -( (scrolled) * speed) + start + 'px');
}

$(window).scroll(function() {
	// Set each diagonal line to parallax
	parallax($('.diagonal-shape-1'), 64, 0.1);
	parallax($('.diagonal-shape-2'), 634, 0.6);

	if($(window).scrollTop() > $('#section-1').height() - $('.navbar').height() ) {
		$('.navbar').addClass('topfix');
	}
	else{
		$('.navbar').removeClass('topfix');
	}
});

