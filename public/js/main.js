 
(function($){	
	
	"use strict";
	
	var body = $("body"),
	
	popup = $(this).strictPopup(),
	postPopup,
		
	tabsBlocksParent = $("#js-tabs-infoblocks"),
	domMapNode = document.getElementById("js-map");
	
	if(!body.hasClass("js-yes")){
		
		return;
		
	}
	
	$(".js-contacts").on("webkitTransitionEnd transitionend", function(){
		
		if(!$(this).hasClass("js-map_ready")){
		
			$(this).initStrictMap(domMapNode).addClass("js-map_ready");
			
		}
		
	});
	
	$(".js-readmore").on("click", function(event){

		event.preventDefault();
		
		postPopup = $($(this).attr("href"));
		popup.openPopup(postPopup);
		
	});	
	
	$(".js-popup__close").on("click", function(){
		
		popup.closePopup(postPopup);
		
	});
	
	$(window).on("load", function(){
		
		var scriptGoogleMap,
		keyApiGoogleMap = domMapNode.getAttribute("data-key"),
		
		aboutSection = $(".js-about"),
		preloader = $("#js-overlay");
		
		if(keyApiGoogleMap !== null){
		
			scriptGoogleMap = document.createElement("script");
			scriptGoogleMap.src = "https://maps.googleapis.com/maps/api/js?key=" + keyApiGoogleMap;
			body.append(scriptGoogleMap);
			
		}else{
			
			console.log("You didn't set API key for Google Maps");
			
		}	
		
		body.addClass("page-loaded");
		
		if(preloader.length){
		
			preloader.on("webkitAnimationEnd msAnimationEnd animationend", function(){
				
				$(this).hide();
				aboutSection.addClass("js-tabs-infoblock_active");
				
			});
		
		}else{
			
			aboutSection.addClass("js-tabs-infoblock_active");
			
		}
		
	});
	
	$(this).initStrictNav(tabsBlocksParent);
	
})(window.jQuery);
