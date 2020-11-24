const numDecks = 1,
	blindStart = 5;

var markup = `
		<p>
			<label for="bet">Bet: </label>
			<input type="number" name="bet" class="bet">
		</p>
		<p>
			<label for="got-it">Got It? </label>
			<input class="got-it" type="checkbox" name="got-it">
		</p>`,
	markupBlind = `
		<p class="full">
			<label for="blind-bet">Blind: </label>
			<input type="checkbox" name="blind-bet" class="blind">
		</p>` + markup,
	finishRound = `<td><button class="finish-round" type="button">Finish Round</button></td>`,
	table = document.querySelector('#score-table'),
	playerInput = document.querySelector('#num-players'),
	start = document.querySelector('#start-game');


const calcScore = function(){
	var numPlayers = playerInput.value;
	var rounds = document.querySelectorAll('.round');

	for (var p = 1; p <= numPlayers; p++) {
		var score = 0;
		for (var r = 0; r < rounds.length; r++) {
			data = rounds[r].querySelectorAll('td')[p];

			gotIt = data.querySelector('.got-it').checked;
			bet = data.querySelector('.bet').value ? parseInt(data.querySelector('.bet').value) : 0;
			isBlind = data.querySelector('.blind') ? data.querySelector('.blind').checked : false;
			if (gotIt) {
				score += (isBlind ? 20 : 10) + bet;
			}
		}

		console.log(score)
		document.querySelector('#player-'+p+'-score').innerText = score;
	}
}

const initRounds = function() {
	var btns = document.querySelectorAll('.finish-round');

	for (var b = 0; b < btns.length; b++) {
		const btn = btns[b];

		btn.addEventListener('click', function(){
			const row = btn.parentNode.parentNode,
			    inputs = row.querySelectorAll('input');

		    row.classList.add('disabled')
		    for (var i = 0; i < inputs.length; i++) {
		    	inputs[i].disabled = true;
		    }

			console.log(0)
		    calcScore();
		});
	}
}


start.addEventListener('click', function(){
	var numPlayers = playerInput.value;
	maxRounds = Math.min(Math.floor(numDecks*52/numPlayers), 13);

	tableContent = ""

	tableContent += "<tr><th>Round</th>"
	for(var p = 1; p <= numPlayers; p++){
		tableContent += "<th><input type='' name='' id='player-"+p+"-name'></th>"
	}
	tableContent += "<th></th></tr>"

	for(var i = 10; i >= 1; i--){
		tableContent += "<tr id='round-"+i+"-down' class='round'>"
		tableContent += "<td>"+i+"</td>"
		for(var p = 1; p <= numPlayers; p++){
			tableContent += "<td>"+markup+"</td>"
		}
		tableContent += finishRound + "</tr>"
	}
	for(var i = 1; i <= maxRounds; i++){
		tableContent += "<tr id='round-"+i+"-up' class='round'>"
		tableContent += "<td>"+i+"</td>"
		for(var p = 1; p <= numPlayers; p++){
			if ( i < blindStart ) {
				tableContent += "<td>"+markup+"</td>"
			} else {
				tableContent += "<td>"+markupBlind+"</td>"
			}
		}
		tableContent += finishRound + "</tr>"
	}

	tableContent += "<tr><td>Total Score</td>"
	for(var p = 1; p <= numPlayers; p++){
		tableContent += "<td><div id='player-"+p+"-score'>0</div></td>"
	}
	tableContent += "<td class='score'></td></td>"

	table.innerHTML = tableContent

	initRounds();
});


