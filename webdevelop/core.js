$(document).ready(function() {	

	$('.list-group-item').hover(function(){
		var id = $(this).attr("id");
		switch(id){
			case 'first' :
				$('#first').css('background-color','red');
				break;
			case 'second':
				$('#second').css('background-color','#FF5E00');
				break;
			case 'third':
				$('#third').css('background-color','yellow');
				break;
			case 'fourth':
				$('#fourth').css('background-color','green');
				break;
			case 'fifth':
				$('#fifth').css('background-color','blue');
				break;
			case 'sixth':
				$('#sixth').css('background-color','purple');
				break;
			}
		},

		function(){
			var id = $(this).attr('id');
			$('#'+id).css('background-color','white')
		});
});

