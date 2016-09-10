(function($){
	
	$.fn.initStrictMap = function(domMapNode){
		
		var map, marker, balloon,
		
		settings = {
			
			lat: parseFloat(domMapNode.getAttribute("data-lat")),
			lng: parseFloat(domMapNode.getAttribute("data-lng")),
			address: domMapNode.getAttribute("data-address")
			
		}; 
		
		map = new window.google.maps.Map(domMapNode,{
			
			zoom: 16,
			center: {lat: settings.lat, lng: settings.lng},
			scrollwheel: false,
			
		});

		marker = new window.google.maps.Marker({
			
			position: {lat: settings.lat, lng: settings.lng},
			map: map,
			title: settings.address
			
		});
	  
		balloon = new window.google.maps.InfoWindow({
			
			content: settings.address
			
		});	

		marker.addListener("click", function(){
			
			balloon.open(map, marker);
			
		});			
	
		return this;
	
	};
	
})(window.jQuery);