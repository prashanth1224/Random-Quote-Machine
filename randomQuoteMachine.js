$(document).ready(function(){
			function getRandomQuote(){
				var quotes =['Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless..',
				'It may be that those who do most, dream most..', 'The future you see is the future you get..', 'The more you know, the more you realize you know nothing..', 'The nearest way to glory is to strive to be what you wish to be thought to be..', 'Programming is like kicking yourself in the face, sooner or later your nose will bleed..'];
				var authors = [' - Jamie Paolinetti', ' – Stephen Butler Leacock', ' – Robert G Allen', ' – Socrates', ' - Kyle Woodbury', ' - Socrates'];

				var randomNumber = Math.floor((Math.random()*quotes.length));
				var randomQuote = quotes[randomNumber];
				var randomAuthor = authors[randomNumber];

				$('#quote').html(randomQuote);
				$('#author').html(randomAuthor);
			};

			$('#btnNewQoute').on('click', function(){
				getRandomQuote();
			});			
		});