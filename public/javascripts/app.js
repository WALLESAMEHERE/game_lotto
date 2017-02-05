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
			$('.game_random').fadeIn(1500);
			for(var i = 0;i<optionTexts.length;i++){
				let lista = '<div class = "u_number"><p>' + optionTexts[i] + '</p></div>';
				$('.picked_numbers').append(lista);
			}
			$('.info_warning p').append('');
		}
		else{
			$('.info_warning p').html('<span class="icon-check-alt"></span><p>Nie wybrałes 6 liczb</p>');
		}
	});

	$('.lotery').click(function(){
	$('.los_number').remove();
		var choised = [];
		var pula = 49;

		for(var i = 0;i<6;i++){
			var random_number = Math.floor(Math.random()*49)+1;
			if (choised.indexOf(random_number) === -1) {
  				choised.push(random_number);
  				let lista = '<li class="los_number ">' + choised[i] + '</li>';
				$('.end_number').append(lista);
			}
			else{
				i--;
				console.log('byla');
			}
		}
		console.log(choised);
	});
});