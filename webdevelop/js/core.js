$(document).ready(function() {	

	$('.list-group-item').hover(function(){
		var id = $(this).attr("id");
		switch(id){
			case 'first' :
				$(id).css('background-color','red');
				break;
			case 'second':
				$(id).css('background-color','#FF5E00');
				break;
			case 'third':
				$(id).css('background-color','yellow');
				break;
			case 'fourth':
				$(id).css('background-color','green');
				break;
			case 'fifth':
				$(id).css('background-color','blue');
				break;
			case 'sixth':
				$(id).css('background-color','purple');
				break;
		}

	});

});

