/**
 * Section: jQuery
 */

$(function() {
	
	//@@include('global/_global.js')
	//@@include('components/_components.js')

//Section: Drop Menu
	$(document).ready(function() {
		var $menuLiElement = $('[data-reletive=here]');
		
		$menuLiElement.mouseover(function() {
			$(this).find('.c-drop-menu').addClass('h-flex');
		});
		
		$menuLiElement.mouseleave(function() {
			$(this).find('.c-drop-menu').removeClass('h-flex');
		});
		
	});
	// End of Section: Drop Menu
	
});

//$('.c-section--menu').find('.c-section__inner')
