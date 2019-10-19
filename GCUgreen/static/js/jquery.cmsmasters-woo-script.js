/**
 * @package 	WordPress
 * @subpackage 	Eco Press
 * @version		1.0.5
 * 
 * Woocommerce Scripts
 * Created by ge
 * 
 */


"use strict";

jQuery(document).ready(function () { 
	setTimeout(function () { 
		if ( 
			jQuery('.ge_dynamic_cart .widget_shopping_cart_content > ul li').length != 0 && 
			jQuery('.ge_dynamic_cart .widget_shopping_cart_content > ul li').hasClass('empty') != true 
		) {
			jQuery('.ge_dynamic_cart_wrap > .ge_dynamic_cart').addClass('ge_active');
			jQuery('.ge_dynamic_cart_wrap').css( { 
				opacity : 		'1', 
				display : 		'block' 
			} );
		}
	}, 2000);
	
	
	ge_ajax_add_to_cart();
	
	
	jQuery('.ge_add_to_cart_button').on('click', function () { 
		jQuery('.ge_dynamic_cart_wrap').css( { 
			opacity : 		'1', 
			display : 	'block' 
		} );
	} );
	
	
	jQuery('body').on('added_to_cart', update_dynamic_cart);
} );


var ge_added_product = {};


function ge_ajax_add_to_cart() {
	"use strict";
	
	jQuery('.ge_add_to_cart_button').on('click', function() {	
		var productInfo = jQuery(this).closest('.ge_product'), 
			productAmount = productInfo.find('.price > .amount, .price > ins > .amount').text(), 
			addedToCart = productInfo.find('.added_to_cart'), 
			product = {};
		
		
		product.name = productInfo.find('.ge_product_title a').text();
		
		product.price = productAmount.replace(ge_woo_script.currency_symbol, '');
		
		product.image = productInfo.find('.ge_product_img img');
		
		
		addedToCart.addClass('ge_to_show');
		
		
		if (product.image.length) {
			/* Dynamic Cart Update Img Src */
			var str = product.image.get(0).src, 
				ext = /(\..{3,4})$/i.exec(str), 
				extLength = ext[1].length, 
				url = str.slice(0, -extLength), 
				newURL = /(-\d{2,}x\d{2,})$/i.exec(url), 
				newSize = '-' + ge_woo_script.thumbnail_image_width + 'x' + ge_woo_script.thumbnail_image_height, 
				buildURL = '';
			
			
			if (newURL !== null) {
				buildURL += url.slice(0, -newURL[1].length) + newSize + ext[1];
			} else {
				buildURL += url + newSize + ext[1];
			}
			
			
			product.image = '<img class="ge_added_product_info_img" src="' + buildURL + '" />';
		}
		
		
		ge_added_product = product;
	} );
}


function update_dynamic_cart(event) { 
	"use strict";
	
	var product = jQuery.extend( { 
		name : 		'', 
		image : 	'' 
	}, ge_added_product);
	
	
	if (typeof event != 'undefined') {
		var cart_button = jQuery('.ge_dynamic_cart .ge_dynamic_cart_button'), 
			template = jQuery( 
				'<div class="ge_added_product_info">' + 
					product.image + 
					'<span class="ge_added_product_info_text">' + product.name + '</span>' + 
				'</div>' 
			);
		
		
		jQuery(event.currentTarget).find('a.ge_to_show').removeClass('ge_to_show').addClass('ge_visible');
		
		
		template.appendTo('.ge_dynamic_cart').css('visibility', 'visible').animate( { 
			marginTop : '20px', 
			opacity : 	1 
		}, 500);
		
		
		template.on('mouseenter ge_hide', function () { 
			template.animate( { 
				marginTop :	0, 
				opacity : 	0 
			}, 500, function () { 
				template.remove();
			} );
		} );
		
		
		setTimeout(function () { 
			template.trigger('ge_hide');
		}, 2000);
	}
}


jQuery(document).ready(function() {
	"use strict";
	
	(function ($) {
		$('.touch .ge_product .ge_product_img').on('click', function() { 
			$('*:not(this)').removeClass('ge_mobile_hover');
			
			
			$(this).addClass('ge_mobile_hover');
		} );
	} )(jQuery);
} );

