$(document).ready(function(){
var optionTexts = []; // picked numbers
var choised = []; // random numbers
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
	// pick numbers, accept and push to array
	$('.acc_numbers').click(function(){
		optionTexts = [];
		$('.number_check').each(function() { optionTexts.push($(this).text()) });
		// function checks the number of selected numbers
		console.log(optionTexts);
		if(optionTexts.length === 6){
			$('.game_choise').hide()
			$('.game_random').fadeIn(1500);
			// show numbers
			for(var i = 0;i<optionTexts.length;i++){
				let lista = '<div class = "u_number"><p>' + optionTexts[i] + '</p></div>';
				$('.picked_numbers').append(lista);
			}
			$('.info_warning p').append('');
		}
		// shows error
		else{
			$('.info_warning p').html('<span class="icon-check-alt"></span><p>Nie wybrałes 6 liczb</p>');
		}
	});
	// function random numbers after click, compare with the selected and shows result
	$('.lotery').click(function(){
		$('.end_number').hide().fadeIn(200);
		$('.los_number').remove();

		var pula = 49;
		// array of randomly selected numbers
		choised = [];
		for(var i = 0;i<6;i++){
			var random_number = Math.floor(Math.random()*49)+1;
			// check if the number is in the array
			if (choised.indexOf(random_number) === -1) {
  				choised.push(random_number);
  				let lista = '<li class="los_number ">' + choised[i] + '</li>';
				$('.end_number').append(lista);
			}
			else{
				i--;
			}
		}
		var suma = 0;
		for(var i = 0;i<choised.length;i++){
			for(var j = 0;j<choised.length;j++){
				if(choised[i] == optionTexts[j]){
					suma += 1;
				}
			}	
		}

	switch(suma){
		case 0:
			$('.winner_img').html('<span class="icon-wondering"></span>');
			$('.winner_info').html('Niestety dzis nie miales szczescia');
			break;
		case 1:
			$('.winner_img').html('<span class="icon-shield"></span>');
			$('.winner_info').html('Trafieles tylko <span>1</span> liczbe');
			break;
		case 2:
			$('.winner_img').html('<span class="icon-gift"></span>');
			$('.winner_info').html('Idzie Ci coraz lepiej, trafiles <span>2</span> liczby');
			break;
		case 3:
			$('.winner_img').html('<span class="icon-happy"></span>');
			$('.winner_info').html('No No :) <span>3</span> liczby były Twoje');
			break;
		case 4:
			$('.winner_img').html('<span class="icon-star"></span>');
			$('.winner_info').html('Bardzo Dobrze!! Udało Ci sie trafic az <span>4</span> liczby');
			break;
		case 5:
			$('.winner_img').html('<span class="icon-star2"></span>');
			$('.winner_info').html('Super, masz niezła rekę, bo az <span>5</span> liczb było Twoich');
			break;
		case 6:
			$('.winner_img').html('<span class="icon-spin"></span>');
			$('.winner_info').html('Hurrrra !!! Trafiłes wszystkie <span>6</span> liczb, to zdarza sie bardzo zadko');
			break;
		}

	});
});


