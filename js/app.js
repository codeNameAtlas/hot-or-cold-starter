
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
	function checkGuess(guessDiff) {
	if (guessDiff === 0) {
		setFeedback("Awesome! You guessed it!");
		found = true;
		return false;
	}
	else if (guessDiff <= 5) {
		setFeedback("You are SO HOT!");
		return true;
	}
	else if (guessDiff <= 10) {
		setFeedback("You are getting HOT!");
		return true;
	}
	else if (guessDiff > 10  && guessDiff <= 20) {
		setFeedback("You are getting warmer!");
		return true;
	}
	else if (guessDiff > 20 && guessDiff <= 30) {
		setFeedback("You are getting colder!");
		return true;
	}
	else if (guessDiff > 30 && guessDiff <= 40) {
		setFeedback("You are near freezing!");
		return true;
	}
	else {
		setFeedback("You ARE FREEZING!!");
		return true;
	}
	
}

	/*--- Set the Feedback ---*/
	function setFeedback(feedback) {
		$('#feedback').text(feedback);
	}

	/*I'm using a funciton called setFeedback and using 
	jQuery to fetch the id "feedback" in css and the .text()
	with a feeback input to display text I defined */


	



});


