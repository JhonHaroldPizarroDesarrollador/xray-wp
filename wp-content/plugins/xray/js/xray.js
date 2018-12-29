/* <![CDATA[ */
var object_name = {"ajaxurl":"http:\/\/127.0.0.1:7000\/wp-admin\/admin-ajax.php"};
/* ]]> */

jQuery(document).ready(function($){
	//////   RELOAD DISPONIBILIDAD   //////
		var xrayData = 'xrayData';
/* 		$.imageMapProInitialized = function(imageMapName) {
			if(imageMapName==disponibilidad){
				
			}	
			//console.log(arguments);
		} */
	var dataList="";
		(function() {
			var datos = "http://127.0.0.1:7000/wp-content/themes/xray_wp/assets/js/resultados.json";
			$.getJSON( datos, {
		
			  format: "json"
			})
			  .done(function( data ) {
				
				data.forEach(function (result) {
					datos={
					  'image': result.image,
					  'title': result.title,
					  'url': result.url
					}
					//console.log(datos)
			
					dataList+='<li><div class="image"><a href="'+datos.image+'" title="'+datos.title+'" class="img"><img class="replace-2x" src="'+datos.image+'" alt="" width="" height=""></a></div><h5><a class="subcategory-name" href="'+result.url+'">'+result.title+'</a></h5></li>';
					  
					console.log(dataList);
					
				  })
				  $('.xray ul').html(dataList);
			  });
		  })();
 
				//jQuery("#modalSpinner").modal("show");
				
	
	
	
				
	
});
