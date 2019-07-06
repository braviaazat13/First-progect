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
	
	//Section: Drop List
	$(document).ready(function() {
		var $parentElement = $('[data-reletive2=here]');
		
		$parentElement.on('click', function() {
			
			if ($(this).hasClass('is-active')) {
				$(this).removeClass('is-active');
				$(this).siblings('.c-section__list').removeClass('is-active');
			}
			
			else {
				$($parentElement).removeClass('is-active');
				$($parentElement).siblings('.c-section__list').removeClass('is-active');
				$(this).addClass('is-active');
				$(this).siblings('.c-section__list').addClass('is-active');
			}
		});
	});
	//End of Section: Drop List
	
});

//$('.c-section--menu').find('.c-section__inner')
