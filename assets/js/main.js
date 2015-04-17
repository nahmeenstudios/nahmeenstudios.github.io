$(document).ready(function(){  

	$('a.thumbnail').on('click',function(event){
		event.preventDefault();
		var href = $(this).attr('href');
		var img = '<img src="' + href + '" class="img-responsive"/>';
		console.log(img)
		
		var html = '';
		html += img;                
		
		$('#myModal').modal();
		$('#myModal').on('shown.bs.modal', function(){
			$('#myModal .modal-body').html(html);
		})
		$('#myModal').on('hidden.bs.modal', function(){
			$('#myModal .modal-body').html('');
		});
		
		
   });	


   $('a[href^="#"]').click(function(){
   		$("html, body").animate({
   			scrollTop: $( $(this).attr("href") ).offset().top - 80 
   		},500);
   		return false
   });




})