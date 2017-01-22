$(document).ready(function(){
	$('.start_game').click(function(){
		$('.game_info').hide()
		$('.game_choise').fadeIn(1500);
		
	});

	$('.number_box').click(function(){
		$(this).toggleClass('number_check');
	});
	$('.acc_numbers').click(function(){
		$('.game_choise').hide()
		$('.random_numbers').fadeIn(1500);

	/*	if($('.number_box').hasClass('number_check')){
			var a = $('.number_check');
				for(var i=0;i<a.length;i++){
					console.log(a);
				}
		}	

	*/
	var a = $('.number_box');
	for (var i = 0; i < a.length; i++) {
        // Check if each class from the element is within the array of classes we want to match
        	if($('.number_box').hasClass('number_check')){
			var b = $('this').html();
		}	
		console.log(b);
    }
	});
});