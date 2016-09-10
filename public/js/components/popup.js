
(function($){
	
	var body = $("body");
	
	$.fn.strictPopup = function(){
	
		return {
		
			openPopup: function(activePopup){
			
				activePopup.addClass("js-popup_active");
				body.addClass("js-modal-open");
			
			},
			closePopup: function(activePopup){
				
				var removeActivePopupClass = function(){
					
					activePopup.removeClass("js-popup_active").off("webkitTransitionEnd msTransitionEnd transitionend", removeActivePopupClass);
					
				};

				body.removeClass("js-modal-open");

				activePopup.on("webkitTransitionEnd msTransitionEnd transitionend", removeActivePopupClass);				
				
			}
		
		};
	};
		
})(window.jQuery);