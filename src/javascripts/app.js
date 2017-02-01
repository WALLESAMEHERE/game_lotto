$(document).ready(function(){
	$('.start_game').click(function(){
		$('.game_info').hide()
		$('.game_choise').fadeIn(1500);
		
	});

	$('.number_box').click(function(){
		var lng = $('.number_check').length;
		if(lng < 6){
			$(this).toggleClass('number_check');
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
				var lista = '<div class = "u_number"><p>' + optionTexts[i] + '</p></div>';
				$('.picked_numbers').append(lista);
			}
			$('.info_warning p').append('');
		}
		else{
			$('.info_warning p').html('<span class="icon-check-alt"></span><p>Nie wybrałes 6 liczb</p>');
		}
	});
});