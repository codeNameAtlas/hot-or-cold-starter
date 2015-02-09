
$(document).ready(function(){

/*-----Variable Declarations-----*/


var found = false

/*--- Creating a new Game ---*/
newGame();

/*--- On Submit ---*/


	
/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

/*--- Create New Game on Click ---*/

/*--- Create New Game ---*/
	function newGame() {
		if function userGuess(min, max) {
			var min = 0;
			var max = 1;
			return Math.random();
		}

/*--- Generate Random Number ---*/
	function generateNumber() {
		var generatedNumber = Math.round(Math.random()*100);
		
		console.log("Generated Number: " + generatedNumber);
		return generatedNumber; 
	}

	/* Other potential options are

	var generatedNumber = Math.Floor((Math.random()*100)+1);

	var generatedNumber = Math.Ceil((Math.random()*100)-1); */

	
	/*--- Set focus to the input box ---*/

	/*--- Clear the text box ---*/

	/*--- Set the guess count ---*/

	/*--- Prompt for Users Guess ---*/

	/*--- Check to see if Users Guess is valid ---*/
		function validGuess(n) {
			if (isNaN(n)) {
				setFeedback("Opps! I only accept numbers.");
				console.log("Opps! I only accept numbers.");
				return true;
			}
			else if ((n < 1) || (n > 100)) {
				setFeedback("Opps! I only accept numbers between 1-100.");
				console.log("Opps! I only accept numbers between 1-100.");
				return true;
			}
			else if ((n >= 1) && (n <= 100)) {
				console.log(n);
				return false;
			};
		}
	
	/*--- Check the Hot or Cold feedback ---*/
	function userFeedback() {
	if (number == userGuess()) {
		return number;
	}
	else if (userGuess > 50 || userGuess < 50) {
		return ("You are Ice Cold");
	}
}

	/*--- Set the Feedback ---*/


	}

	



});


