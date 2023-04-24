	
	

document.addEventListener('DOMContentLoaded', ()=>{

    /* Parallax effect */
    $(window).scroll(function(e) {
        parallax();
    })
    function parallax() {
        var scroll = $(window).scrollTop();
        var screenHeight = $(window).height();
        $('.parallax').each(function() {
            var offset = $(this).offset().top;
            var distanceFromBottom = offset - scroll - screenHeight
            if (offset > screenHeight && offset) {
                $(this).css('background-position', 'center ' + (( distanceFromBottom  ) * 0.2) +'px');
            } else {
                $(this).css('background-position', 'center ' + (( -scroll ) * 0.2) + 'px');
            }
        })
    }

    /* Fade In Effect */
	(function($) {
		$.fn.visible = function(partial) {
			let $t            = $(this),
				$w            = $(window),
				viewTop       = $w.scrollTop(),
				viewBottom    = viewTop + $w.height(),
				_top          = $t.offset().top,
				_bottom       = _top + $t.height(),
				compareTop    = partial === true ? _bottom : _top,
				compareBottom = partial === true ? _top : _bottom;
			return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
		};
	})(jQuery);
	let win = $(window);
    /* Animation 1 */
	let allMods = $(".scroll-up");
	allMods.each(function(i, el) {
		var el = $(el);
		if (el.visible(true)) {
		el.addClass("is-visible"); 
		} 
	});
	win.scroll(function(event) {
		allMods.each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
				el.addClass("showUp"); 
			} 
		});
	});
   /* Animation 2 */
    let allScroll = $(".scroll");
	allScroll.each(function(i, el) {
		var el = $(el);
		if (el.visible(true)) {
		el.addClass("is-visible"); 
		} 
	});
	win.scroll(function(event) {
		allScroll.each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
				el.addClass("fadeIn"); 
			} 
		});
	});

});

	

