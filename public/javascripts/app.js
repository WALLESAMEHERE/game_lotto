$(document).ready(function(){
	$('.start_game').click(function(){
		$('.game_info').hide()
		$('.game_choise').fadeIn(1500);
		
	});

	$('.number_box').click(function(){
		var lng = $('.number_check').length;
		if(lng < 6){
			$(this).toggleClass('number_check');
			console.log(lng);
		}
		else if(lng == 6){
			$(this).removeClass('number_check');
		}
	});
	$('.acc_numbers').click(function(){
		var optionTexts = [];
		$('.number_check').each(function() { optionTexts.push($(this).text()) });

		if(optionTexts.length === 6){
			$('.game_choise').hide()
			$('.random_numbers').fadeIn(1500);
			for(var i = 0;i<optionTexts.length;i++){
				var lista = '<div class = "u_number">' + optionTexts[i] + '</div>';
				$('.picked_numbers').append(lista);
				console.log(lista);
			}
		}
		else{
			console.log('nie wybrales liczb');
		}
	});
});