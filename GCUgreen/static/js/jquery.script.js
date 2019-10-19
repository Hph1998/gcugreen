/**
 * @package 	WordPress
 * @subpackage 	Eco Press
 * @version 	1.0.5
 *
 * Theme Custom Scripts
 * Created by ge
 *
 */


jQuery(document).ready(function() {
	"use strict";

	/* Add Class To Row */
	(function ($) {
		$('.ge_row_margin').each(function () {
			var ge_column = $(this).find('.ge_column').eq(0);


			if (
				ge_column.hasClass('one_half') &&
				ge_column.next().hasClass('one_half')
			) {
				$(this).addClass('ge_1212');
			} else if (
				ge_column.hasClass('one_third') &&
				ge_column.next().hasClass('two_third')
			) {
				$(this).addClass('ge_1323');
			} else if (
				ge_column.hasClass('two_third') &&
				ge_column.next().hasClass('one_third')
			) {
				$(this).addClass('ge_2313');
			} else if (
				ge_column.hasClass('one_fourth') &&
				ge_column.next().hasClass('three_fourth')
			) {
				$(this).addClass('ge_1434');
			} else if (
				ge_column.hasClass('three_fourth') &&
				ge_column.next().hasClass('one_fourth')
			) {
				$(this).addClass('ge_3414');
			} else if (
				ge_column.hasClass('one_third') &&
				ge_column.next().hasClass('one_third') &&
				ge_column.next().next().hasClass('one_third')
			) {
				$(this).addClass('ge_131313');
			} else if (
				ge_column.hasClass('one_half') &&
				ge_column.next().hasClass('one_fourth') &&
				ge_column.next().next().hasClass('one_fourth')
			) {
				$(this).addClass('ge_121414');
			} else if (
				ge_column.hasClass('one_fourth') &&
				ge_column.next().hasClass('one_half') &&
				ge_column.next().next().hasClass('one_fourth')
			) {
				$(this).addClass('ge_141214');
			} else if (
				ge_column.hasClass('one_fourth') &&
				ge_column.next().hasClass('one_fourth') &&
				ge_column.next().next().hasClass('one_half')
			) {
				$(this).addClass('ge_141412');
			} else if (
				ge_column.hasClass('one_fourth') &&
				ge_column.next().hasClass('one_fourth') &&
				ge_column.next().next().hasClass('one_fourth') &&
				ge_column.next().next().next().hasClass('one_fourth')
			) {
				$(this).addClass('ge_14141414');
			} else {
				$(this).addClass('ge_11');
			}
		} );
	} )(jQuery);





    /* Scroll Top */
	(function ($) {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 200) {
				$('#slide_top').filter(':hidden').fadeIn('fast');
			} else {
				$('#slide_top').filter(':visible').fadeOut('fast');
			}
		} );


		$('.divider a, #slide_top').on('click', function () {
			$('html, body').animate( {
				scrollTop : 0
			}, 'slow');


			return false;
		} );
	} )(jQuery);




	/* Lightbox Classes Adding */
	(function ($) {
		$('.widget_custom_flickr_entries').each(function () {
			var flickrUniqID = uniqID();


			$(this).find('.flickr_badge_image a').each(function () {
				var src = $(this).find('img').attr('src'),
					title = $(this).find('img').attr('title'),
					src_full = src.replace(/_s.jpg/g, '.jpg');


				$(this).removeAttr('href').attr( {
					href : 		src_full,
					title : 	title,
					rel : 		'ilightbox[flickr_' + flickrUniqID + ']'
				} );
			} );
		} ); // Flickr Widget Lightbox


		$('.gallery').each(function () {
			var galUniqID = uniqID();


			$(this).find('a').each(function () {
				var linkHref = $(this).attr('href'),
					lastDotPos = linkHref.lastIndexOf('.'),
					imgFormat = linkHref.slice(lastDotPos + 1);


				if (imgFormat.length <= 5) {
					$(this).attr('rel', 'ilightbox[wp_gal_' + galUniqID + ']');
				}
			} );
		} ); // WordPress Default Gallery Shortcode Lightbox
	} )(jQuery);



	/* iLightBox Init */
	(function ($) {
		var ilightbox_settings = {
			skin : 					ge_script.ilightbox_skin,
			path : 					ge_script.ilightbox_path,
			infinite : 				(ge_script.ilightbox_infinite == '1') ? true : false,
			keepAspectRatio : 		(ge_script.ilightbox_aspect_ratio == '1') ? true : false,
			mobileOptimizer : 		(ge_script.ilightbox_mobile_optimizer == '1') ? true : false,
			maxScale : 				Number(ge_script.ilightbox_max_scale),
			minScale : 				Number(ge_script.ilightbox_min_scale),
			innerToolbar : 			(ge_script.ilightbox_inner_toolbar == '1') ? true : false,
			smartRecognition : 		(ge_script.ilightbox_mobile_optimizer == '1') ? true : false,
			fullAlone : 			(ge_script.ilightbox_fullscreen_one_slide == '1') ? true : false,
			fullViewPort : 			ge_script.ilightbox_fullscreen_viewport,
			controls : {
				toolbar : 			(ge_script.ilightbox_controls_toolbar == '1') ? true : false,
				arrows : 			(ge_script.ilightbox_controls_arrows == '1') ? true : false,
				fullscreen : 		(ge_script.ilightbox_controls_fullscreen == '1') ? true : false,
				thumbnail : 		(ge_script.ilightbox_controls_thumbnail == '1') ? true : false,
				keyboard : 			(ge_script.ilightbox_controls_keyboard == '1') ? true : false,
				mousewheel : 		(ge_script.ilightbox_controls_mousewheel == '1') ? true : false,
				swipe : 			(ge_script.ilightbox_controls_swipe == '1') ? true : false,
				slideshow : 		(ge_script.ilightbox_controls_slideshow == '1') ? true : false
			},
			text : {
				close : 			ge_script.ilightbox_close_text,
				enterFullscreen : 	ge_script.ilightbox_enter_fullscreen_text,
				exitFullscreen : 	ge_script.ilightbox_exit_fullscreen_text,
				slideShow : 		ge_script.ilightbox_slideshow_text,
				next : 				ge_script.ilightbox_next_text,
				previous : 			ge_script.ilightbox_previous_text
			},
			errors : {
				loadImage : 		ge_script.ilightbox_load_image_error,
				loadContents : 		ge_script.ilightbox_load_contents_error,
				missingPlugin : 	ge_script.ilightbox_missing_plugin_error
			}
		},
		gallery_array = [],
		gallery_id = '';


		$('[rel="ilightbox"]').each(function () {
			$(this).iLightBox(ilightbox_settings);
		} );


		$('[rel^="ilightbox["]').each(function () {
			if ($(this).closest('.ge_more_items_loader').length === 0) {
				var item_rel = $(this).attr('rel');


				if ($.inArray(item_rel, gallery_array) === -1) {
					gallery_array.push(item_rel);
				}
			}
		} );


		$.each(gallery_array, function (gallery_array, gallery_id) {
			$('[rel="' + gallery_id + '"]').iLightBox(ilightbox_settings);
		} );
	} )(jQuery);



	/* Header Search Toggle */
	(function ($) {
		$('.search_wrap .search_button button').on('click', function () {
			var searchButton = $(this),
				searchWrap = searchButton.closest('.search_wrap'),
				searchInput = searchWrap.find('.search_field input');


			if (searchWrap.hasClass('search_opened')) {
				searchWrap.removeClass('search_opened');

				searchButton.removeClass('ge_theme_icon_cancel');

				setTimeout(function () {
					searchButton.addClass('ge_theme_icon_search').attr('type', 'submit');
				}, 300);
			} else {
				searchWrap.addClass('search_opened');

				searchButton.removeClass('ge_theme_icon_search');

				setTimeout(function () {
					searchButton.addClass('ge_theme_icon_cancel').attr('type', 'button');
				}, 300);

				searchInput.focus();
			}


			return false;
		} );
	} )(jQuery);



	/* Header Top Hide Toggle */
	(function ($) {
		$('.header_top_but').on('click', function () {
			var headerTopBut = $(this),
				headerTopButArrow = headerTopBut.find('> span'),
				headerTopOuter = headerTopBut.parents('.header_top').find('.header_top_outer');

			if (headerTopBut.hasClass('opened')) {
				headerTopOuter.slideUp();

				headerTopButArrow.removeClass('ge_theme_icon_slide_top').addClass('ge_theme_icon_slide_bottom');

				headerTopBut.removeClass('opened').addClass('closed');
			} else if (headerTopBut.hasClass('closed')) {
				headerTopOuter.slideDown();

				headerTopButArrow.removeClass('ge_theme_icon_slide_bottom').addClass('ge_theme_icon_slide_top');

				headerTopBut.removeClass('closed').addClass('opened');
			}
		} );
	} )(jQuery);



	/* Fixed Header Function Start */
	(function ($) {
		$('#header').geFixedHeaderScroll();
	} )(jQuery);



	/* Responsive Navigation Function Start */
	(function ($) {
		$('#navigation').geResponsiveNav();
	} )(jQuery);



	/* Row Parallax Function Start */
	(function ($) {
		$(window).load(function () {
			if (
				!checker.os.iphone &&
				!checker.os.ipad &&
				!checker.os.ipod &&
				!checker.os.android &&
				!checker.os.blackberry
			) {
				if (checker.ua.safari) {
					if (checker.ua.chrome || checker.os.mac) {
						setTimeout(function () {
							$.stellar( {
								horizontalScrolling : 	false,
								verticalOffset : 		30,
								parallaxElements : 		false
							} );
						}, 1500);


						$(window).on('debouncedresize', function () {
							if ($(window).width() < 1024) {
								$.stellar('destroy');
							} else {
								$.stellar( {
									horizontalScrolling : 	false,
									verticalOffset : 		30,
									parallaxElements : 		false
								} );
							}
						} );
					}
				} else {
					setTimeout(function () {
						$.stellar( {
							horizontalScrolling : 	false,
							verticalOffset : 		30,
							parallaxElements : 		false
						} );
					}, 1500);


					$(window).on('debouncedresize', function () {
						if ($(window).width() < 1024) {
							$.stellar('destroy');
						} else {
							$.stellar( {
								horizontalScrolling : 	false,
								verticalOffset : 		30,
								parallaxElements : 		false
							} );
						}
					} );
				}
			} else {
				$('div.ge_row').css('background-attachment', 'scroll');
			}
		} );
	} )(jQuery);



	/* One Page Navigation */
	(function ($) {
		$(window).load(function () {
			var inViewNav = 			$('#navigation'),
				inViewSelector = 		inViewNav.find('a[href*="#"]'),
				inViewBlocks = 			[],
				siteURL = 				ge_script.site_url;

			// Recalculate Header Offset
			function rebuildHeaderOffset(hashRow) {
				var geFHeader = 			$('#page').hasClass('fixed_header'),
					geTHeader = 			$('#page').hasClass('enable_header_top'),
					geBHeader = 			$('#page').hasClass('enable_header_bottom'),
					wpAdminBar = 			$('#wpadminbar').outerHeight(),
					geMHeaderHeight = 	$('#header .header_mid').data('height'),
					geTHeaderHeight = 	$('#header .header_top').data('height'),
					geBHeaderHeight = 	$('#header .header_bot').data('height'),
					geHeaderOffset = 	0,
					scrollTop = 			$(window).scrollTop(),
					winWidth = 				$(window).width();


				if (geFHeader) {
					if (geTHeader) {
						if (hashRow >= (geMHeaderHeight / 3) + geTHeaderHeight) {
							geHeaderOffset = (geMHeaderHeight / 3) * 2 + (geBHeader ? geBHeaderHeight : 0);
						} else if (hashRow >= geTHeaderHeight) {
							geHeaderOffset = (geMHeaderHeight - (scrollTop - geTHeaderHeight)) + (geBHeader ? geBHeaderHeight : 0);
						} else {
							geHeaderOffset = (geMHeaderHeight + geTHeaderHeight - scrollTop) + (geBHeader ? geBHeaderHeight : 0);
						}
					} else {
						if (hashRow >= geMHeaderHeight / 3) {
							geHeaderOffset = (geMHeaderHeight / 3) * 2 + (geBHeader ? geBHeaderHeight : 0);
						} else {
							geHeaderOffset = (geMHeaderHeight - scrollTop) + (geBHeader ? geBHeaderHeight : 0);
						}
					}


					geHeaderOffset = -geHeaderOffset - Number((wpAdminBar !== undefined) ? wpAdminBar - 1 : 0);
				}


				if (checkN(-geHeaderOffset, hashRow, 150)) {
					geHeaderOffset = 'false';
				}


				if (winWidth < 1008) {
					geHeaderOffset = 0 - Number((wpAdminBar !== undefined) ? wpAdminBar - 1 : 0);
				}


				return geHeaderOffset;
			}

			// Find InView Blocks
			inViewSelector.each(function () {
				if (this.hash !== '' && $('body').find('div' + this.hash + '.ge_row_outer_parent').length > 0) {
					inViewBlocks.push($('body').find('div' + this.hash + '.ge_row_outer_parent'));
				}
			} );

			// Highlight InView Section Navigation Link
			$(inViewBlocks).each(function () {
				var winHeight = 			$(window).height(),
					inViewTop = 			$(this).offset().top,
					inViewHeight = 			$(this).outerHeight(),
					headerOffsetRebuild = 	(rebuildHeaderOffset(inViewTop) !== 'false') ? rebuildHeaderOffset(inViewTop) : 0;


				$(this).scrollspy( {
					min : 		(inViewHeight / 2) - (winHeight - inViewTop + headerOffsetRebuild),
					max : 		inViewTop + (inViewHeight / 3) + headerOffsetRebuild,
					onEnter : function (el, pos) {
						inViewNav.find('li.menu-item.current-menu-item').removeClass('current-menu-item');

						inViewNav.find('li.menu-item.current-menu-ancestor').removeClass('current-menu-ancestor');


						inViewSelector.each(function () {
							if ($(this).attr('href').slice($(this).attr('href').indexOf('#')) === '#' + $(el).attr('id')) {
								$(this).parents('li').addClass('current-menu-item');
							}
						} );
					}
				} );
			} );

			// Scroll to Section on Page Load if Hash Exists or Else add Current Menu Item Class to First Navigation Item
			if (window.location.hash && $('body').find('div' + window.location.hash + '.ge_row_outer_parent').length > 0) {
				var headerOffsetRebuild = 	rebuildHeaderOffset($('body').find('div' + window.location.hash + '.ge_row_outer_parent').offset().top),
					currentNavItem = 		inViewNav.find('> li.menu-item > a[href="' + window.location.hash + '"]');


				if (currentNavItem.length > 0 && currentNavItem.parents('li').is(':not(.current-menu-item)')) {
					currentNavItem.parents('li').addClass('current-menu-item');
				}


				if (headerOffsetRebuild !== 'false') {
					$.scrollTo(window.location.hash, 800, {
						easing : 	'easeInOutExpo',
						axis : 		'y',
						margin : 	true,
						offset : {
							top : 	headerOffsetRebuild
						}
					} );
				} else {
					$('html, body').animate( {
						scrollTop : 0
					}, 800);
				}
			} else if (window.location.href === siteURL) {
				inViewNav.find('> li.menu-item').each(function () {
					var thisHref = $(this).find('> a').attr('href');


					if (
						thisHref === siteURL ||
						thisHref === window.location.pathname ||
						thisHref === '/'
					) {
						$(this).addClass('current-menu-item');
					}
				} );
			}

			// Scroll to Sections on Link Click
			$('nav a[href*="#"], a.ls-l, .hash-link a, a.hash-link').on('click', function () {
				var linkHash = 				this.hash,
					linkHref = 				$(this).attr('href'),
					rowExists = 			$('body').find('div' + linkHash + '.ge_row_outer_parent'),
					headerOffsetRebuild = 	(rowExists.length > 0) ? rebuildHeaderOffset(rowExists.offset().top) : false;


				if (linkHash !== '') {
					if (rowExists.length > 0) {
						if (headerOffsetRebuild !== 'false') {
							$.scrollTo(linkHash, 800, {
								easing : 	'easeInOutExpo',
								axis : 		'y',
								margin : 	true,
								offset : {
									top : 	headerOffsetRebuild
								},
								onAfter : function () {
									if (history.pushState) {
										history.pushState(null, null, linkHash);
									}
								}
							} );
						} else {
							$('html, body').animate( {
								scrollTop : 0
							}, 800, function () {
								if (history.pushState) {
									history.pushState(null, null, linkHash);
								}
							} );
						}
					} else {
						if (
							linkHref.indexOf(linkHash) !== -1 &&
							linkHref.slice(0, linkHref.indexOf(linkHash)) !== siteURL &&
							linkHref !== linkHash
						) {
							window.location.href = linkHref;
						} else {
							window.location.href = siteURL + linkHash;
						}
					}


					return false;
				}
			} );
		} );
	} )(jQuery);



	/* Notise Close Button */
	(function ($) {
		$('.ge_notice a.notice_close').on('click', function () {
			$(this).parents('.ge_notice').fadeOut(500, function () {
				$(this).remove();
			} );


			return false;
		} );
	} )(jQuery);



	/* Toggles */
	(function ($) {
		$('.ge_toggles .ge_toggle_title a').on('click', function (i) {
			var active_toggle = $(this).parents('.ge_toggles').find('.ge_toggle_wrap.current_toggle .ge_toggle'),
				toggle = $(this).parents('.ge_toggle_wrap'),
				acc = ($(this).parents('.ge_toggles').hasClass('toggles_mode_accordion')) ? true : false,
				dropDown = toggle.find('.ge_toggle');


			if (toggle.hasClass('current_toggle')) {
				dropDown.slideUp('fast', function () {
					toggle.removeClass('current_toggle');
				} );
			} else {
				if (acc) {
					active_toggle.slideUp('fast', function () {
						active_toggle.parents('.ge_toggle_wrap').removeClass('current_toggle');
					} );
				}

				dropDown.slideDown('fast', function () {
					toggle.addClass('current_toggle');
				} );
			}


			i.preventDefault();


			setTimeout(function () {
				jQuery('body').trigger('debouncedresize');
			}, 300);
		} );


		$('.ge_toggles .ge_toggles_filter a').on('click', function (i) {
			var filter_wrap = $(this).parents('.ge_toggles_filter'),
				filter = $(this).data('key'),
				toggle = $(this).parents('.ge_toggles').find('.ge_toggle_wrap');


			if ($(this).is(':not(.current_filter)')) {
				filter_wrap.find('a').removeClass('current_filter');


				$(this).addClass('current_filter');


				toggle.filter('[data-tags~="' + filter + '"]').slideDown('fast');


				toggle.filter(':not([data-tags~="' + filter + '"])').slideUp('fast');


				toggle.filter(':not([data-tags~="' + filter + '"])').removeClass('current_toggle').find('.ge_toggle').removeAttr('style');
			}


			i.preventDefault();
		} );
	} )(jQuery);



	/* Tabs */
	(function ($) {
		$('.ge_woo_tabs > .ge_tabs_list > .ge_tabs_list_item:first-child').addClass('current_tab');
		$('.ge_woo_tabs > .ge_tabs_wrap > .ge_tab:first-child').addClass('active_tab');

		$('.ge_tabs ul.ge_tabs_list li a').on('click', function (t) {
			var tabs_parent = $(this).parents('.ge_tabs'),
				tabs = tabs_parent.find('.ge_tabs_wrap'),
				index = $(this).parents('li').index();


			tabs_parent.find('.ge_tabs_list > .current_tab').removeClass('current_tab');


			$(this).parents('li').addClass('current_tab');


			tabs.find('.ge_tab').not(':eq(' + index + ')').slideUp('fast', function () {
				$(this).removeClass('active_tab');
			} );


			tabs.find('.ge_tab:eq(' + index + ')').slideDown('fast', function () {
				$(this).addClass('active_tab');
			} );


			t.preventDefault();


			setTimeout(function () {
				jQuery('body').trigger('debouncedresize');
			}, 300);
		} );
	} )(jQuery);



	/* Share Buttons */
	(function ($) {
		$('.share_posts a, .share_wrap a').bind('click', function (e) {
			var screenSize = {
					width : 	screen.width,
					height : 	screen.height
				},
				windowWidth = 650,
				windowHeight = 350,
				windowTop = (screenSize.height / 2) - (windowHeight / 2),
				windowLeft = (screenSize.width / 2) - (windowWidth / 2),
				socialHref = $(this).attr('href'),
				newWindow = 'width = ' + windowWidth + ', height = ' + windowHeight + ', top = ' + windowTop + ', left = ' + windowLeft + ', resizable = no, status = no, titlebar = no, toolbar = no, location = no';


			e.preventDefault();


			return window.open(socialHref, '_blank', newWindow);
		} );
	} )(jQuery);



	/* YouTube Iframe Fix */
	(function ($) {
		var iframe = $('iframe[src*="youtube.com"]');


		iframe.each(function () {
			var current = 	$(this),
				src = 		current.attr('src');


			if (src) {
				if (src.indexOf('?') !== -1) {
					src += "&wmode=opaque";
				} else {
					src += "?wmode=opaque";
				}


				current.attr('src', src);
			}
		} );
	} )(jQuery);
} );



/* Like Button */
function ge_like(postID) {
	"use strict";

	if (postID !== '') {
		var likeButton = jQuery('#geLike-' + postID),
			data = {
				action : 	'ge_ajax_like',
				id : 		postID,
				nonce : 	ge_script.nonce_ajax_like
			};


		//likeButton.find('> span').text('...');


		jQuery.post(ge_script.like_url, data, function(response) {

			if(response.status_code==200){
                likeButton.find('> span').text(response.like_num);
			}else alert(response.message);

			likeButton.addClass('active');

			likeButton.attr( {
				onclick : 	'return false;'
			} );
		} );
	}


	return false;
}


"use strict";

/* Correct OS & Browser Check */
var ua = navigator.userAgent,
	checker = {
		os : {
			iphone : 		ua.match(/iPhone/),
			ipod : 			ua.match(/iPod/),
			ipad : 			ua.match(/iPad/),
			blackberry : 	ua.match(/BlackBerry/),
			android : 		ua.match(/(Android|Linux armv6l|Linux armv7l)/),
			linux : 		ua.match(/Linux/),
			win : 			ua.match(/Windows/),
			mac : 			ua.match(/Macintosh/)
		},
		ua : {
			ie : 		ua.match(/MSIE/),
			ie6 : 		ua.match(/MSIE 6.0/),
			ie7 : 		ua.match(/MSIE 7.0/),
			ie8 : 		ua.match(/MSIE 8.0/),
			ie9 : 		ua.match(/MSIE 9.0/),
			ie10 : 		ua.match(/MSIE 10.0/),
			ie11 : 		ua.match(/MSIE 11.0/),
			opera : 	ua.match(/Opera/),
			firefox : 	ua.match(/Firefox/),
			chrome : 	ua.match(/Chrome/),
			safari : 	ua.match(/(Safari|BlackBerry)/)
		}
	};



/* Correct Image Load Check */
function isImageOk(img) {
	"use strict";

	if (!img.complete) {
		return false;
	}


	if (typeof img.naturalWidth !== undefined && img.naturalWidth === 0) {
		return 'stop';
	}


	return true;
}



/* Check Whether the Numbers are Approximately Equal */
function checkN(a, b, x) {
	"use strict";

    if ((a > b && a - x <= b) || (b > a && b - x <= a)){
        return true;
    } else {
        return false;
    }
}



/* Uniq ID */
function uniqID() {
	"use strict";

	return Math.round(new Date().getTime() + (Math.random() * 1000000));
}


/* Input type checkbox & radio wrapper */
jQuery(document).ready(function() {
	"use strict";

	(function ($) {
		var form = $('#submit-donation-form'),
			flength = form.length;

		if (flength > 0) {
			var timerId = setInterval(function () {
				form.each(function () {
					var fields = $(this).find('> div > div').eq(1);


					if (fields.not(':empty')) {
						flength -= 1;


						if (flength <= 0) {
							clearTimeout(timerId);


							var checkbox = form.find('input:checkbox'),
								radio = form.find('input:radio');


							checkbox.each(function () {
								$(this).after('<div class="field_before" />');
							} );



							radio.each(function () {
								$(this).after('<div class="field_before" />');
							} );
						}
					}
				} );
			}, 100);
		}
	} )(jQuery);
} );



/* Touch events on Ipad. iphone etc */
jQuery('body').bind('touchstart', function() {});
