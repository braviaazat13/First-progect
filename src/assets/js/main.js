/**
 * Section: jQuery
 */

$(function() {
	
	//@@include('global/_global.js')
	//@@include('components/_components.js')
	
//Section: Drop Menu
	$(document).ready(function() {
		var $menuLiElement = $('.c-section--menu').find('.c-section__inner')
			.children().children();
		
		$menuLiElement.mouseover(function() {
			$(this).find('.c-drop-menu--main').addClass('h-flex');
			
		});
		
		$menuLiElement.mouseleave(function() {
			$(this).find('.c-drop-menu--main').removeClass('h-flex');
		});
	});
	// End of Section: Drop Menu
	
});
