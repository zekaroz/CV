
(function($){

	"use strict";

	var body = $("body"),

	popup = $(this).strictPopup(),
	postPopup,

	tabsBlocksParent = $("#js-tabs-infoblocks");

	if(!body.hasClass("js-yes")){

		return;

	}

	$(".js-contacts").on("webkitTransitionEnd transitionend", function(){


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

		var aboutSection = $(".js-about"),
		preloader = $("#js-overlay");

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
