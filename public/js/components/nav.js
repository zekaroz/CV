
(function($){
	
	$.fn.initStrictNav = function(tabsBlocksParent){
		
		var doc = $(document),
		
		nav = $("#js-nav"),
		navHeight = nav.outerHeight(),
		coordinateFluidNav = 0;
		
		function setCoordinateFluidNav(){
			
			if(window.innerWidth < 1201){

				coordinateFluidNav = $("#js-sidebar").outerHeight();
	 
			}else{
				
				coordinateFluidNav = navHeight;
				
			}
			
		}
				
		function showActiveContent(idActiveContent){
			
			var activeBlock = $(idActiveContent);
			
			if(doc.scrollTop() > tabsBlocksParent.offset().top){
			
				doc.scrollTop(coordinateFluidNav - navHeight);
				
			}		
			
			tabsBlocksParent.find(".js-tabs-infoblock_active").removeClass("js-tabs-infoblock_active");
			activeBlock.addClass("js-tabs-infoblock_active");
			
		}
		
		function navKeyControl(key){
			
			var activeNavLink, nextActiveNavLink;
			
			if(event.keyCode == key){
				
				event.preventDefault();
				
				activeNavLink = nav.find(".js-nav__link_active");
				nextActiveNavLink = activeNavLink.next();
				
				if(!nextActiveNavLink.length){
					
					nextActiveNavLink = $(".js-nav__link:first-child");
					
				}
				
				activeNavLink.removeClass("js-nav__link_active");
				nextActiveNavLink.addClass("js-nav__link_active");
				
				showActiveContent(nextActiveNavLink.attr("href"));
				
			}
						
		}
		
		doc.on("keydown", function(event){
			
			var keyTab = "9";
			navKeyControl(keyTab);
			
		});	 
		
		$(".js-nav__link").on("click", function(event){
		
			event.preventDefault();
		
			var idActiveContent;
		
			if(!$(this).hasClass("js-nav__link_active")){
				
				idActiveContent = $(this).attr("href");
				
				nav.find(".js-nav__link_active").removeClass("js-nav__link_active");
				$(this).addClass("js-nav__link_active");
				
				showActiveContent(idActiveContent);
			
			}
			
		});
		
		doc.on("scroll", function(){

			if($(this).scrollTop() > coordinateFluidNav){

				if(!nav.hasClass("js-nav_fixed")){
					
					nav.addClass("js-nav_fixed");
					
				}	

			}else{

				nav.removeClass("js-nav_fixed"); 

			}

		});	

		setCoordinateFluidNav();
		
		$(window).on("resize", function(){
			
			setCoordinateFluidNav();
			
		});
		
	};
	
})(window.jQuery);