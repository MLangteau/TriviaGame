var timer;
var corr = 0;
var inCorr = 0;
var unAnswered = 0;
var submitEverDone = false;
var radios = [];
var gotARightOne = false;
var radioFail =[];

//  Game Questions Object
var gameQuest = [
	{
	question: "What is one of the best know catch phrases from this movie?",
    answers:["Gotta keep moving","Where is Nemo","Just keep swimming","I cannot remember"],
//  url: "../images/sunset.jpg",
	correctAnswer: "Just keep swimming"
	},

	{
	question: "What type of a fish is Nemo?",
	answers:["Blowfish","Clownfish","Pufferfish","Striped fish"],
	correctAnswer: "Clownfish"
	},
					
	{
	question: "How old is Crush, the Turtle?",
	answers:["102","150","40","99"],
	correctAnswer: "150"
	},
				
	{
	question: "From what disorder does Dory suffer?",
	answers:["Borderline personality disorder","Dementia","Anterograde Amnesia","Autism"],
	correctAnswer: "Anterograde Amnesia"
	},

{
	question: "What is the safest way for Dory and Marlin to get past the maze of Jellyfish",
	answers:["Over","Under","Through","Around"],
	correctAnswer: "Over"
	},

{
	question: "What is Anterograde Amnesia?",
	answers:["Inability to swim for a long time","Inability to keep friends","Inability to swim straight","Inability to form new memories"],
	correctAnswer: "Inability to form new memories"
	},

{
	question: "Which one of these can foster memory retention for those who suffer from Anterograde Amnesia?",
	answers:["A positive environment","Social support","Familiarity","All of the above"],
	correctAnswer: "All of the above"
	},

{
	question: "Why was Nemo's fin smaller than the other?",
	answers:["Birth defect","Ran into the side of a boat","Attacked while still in the egg","Clipped by a shark"],
	correctAnswer: "Attacked while still in the egg"
	},

{
	question: "What address was Dory and Marlin were looking for?",
	answers:["44 Winding Way","13 Shark Drive","52 Reed Road","42 Wallaby Way"],
	correctAnswer: "42 Wallaby Way"	  
	},
						{
	question: "Who attacked Coral and all but one of her eggs?",
	answers:["Jellyfish","Barracuda","A shark","A whale"],
	correctAnswer: "Barracuda"
	}];

//Declare the timer variable above the game object

var game = {
  correct: 0,
  incorrect: 0,
// At the start of the game{}, set the counter to be whatever value want
	counter: 120,

//Here we have the method for doing the actual counting down 
  countdown: function() {
    game.counter--;
    $("#counter-number").text(game.counter);

  	$("#submit").on("click", function (){	
  		submitEverDone = true;
	});  

    if (submitEverDone) {
    	//  if submit was pressed, check all the answers 
     	for (var j=0; j<gameQuest.length; j++) {
     		game.checkAllAnswers('question-' + j, j); // need this index in method
    	} // end of 'for loop' for all questions
    	game.done();
    }
    else if (game.counter === 0) {
   //  if submit was NOT pressed and the TIME IS UP, check all the answers
	  for (var j=0; j<gameQuest.length; j++) {
			game.checkAllAnswers('question-' + j, j); ///  need index
	  } // end of if for all questions
      game.done();
    }  // end of else if
  },  // end of countdown function

//	Could do something like this in future
//  $.each($("input['question-"+ j +"']:checked"), function() {
//		});

  checkAllAnswers: function (questionthis, index) {  

		var radios = document.getElementsByName(questionthis);
		gotARightOne = false;
		radioFail = [];
		for (var i = 0; i < radios.length; i++) {
			if (radios[i].checked) {
				var radioValue = "";
				radioValue = $("input[name='question-"+ index +"']:checked").val();
				// compare with "checked" answer to the correct answer
				if (radios[i].value == gameQuest[index].correctAnswer){
//					console.log("Got this sucker right! q: " + index);
					gotARightOne = true;
				}  // end of if part of (check for correct answer)
				else {
//					console.log("Nope, not even close! q: " + index);
				};  // end of else 
			} // end of if (radios[i].checked) 
			else {       // if radio[i] was not checked
				radioFail.push("i");
			}
		}  // end of 'for loop'

		if (gotARightOne){
			corr++;
		} // end of if
		else {
			inCorr++;
		}; // end of else

// radioFail checks to see if each question was answered or not.
// radioFail is reset every 'for loop' for each new question.
		if (radioFail.length === 4) {
			unAnswered++;
		};
//	});  // end of each not in use
  },  // end of checkAllAnswers function
	
  start: function() {
//Inside start Function we set timer by calling the countdown method\
 
    $("#submit").show();
    $("#submit").text("Submit").css('border', '3px solid blue').width(100).height(50);

    timer = setInterval(game.countdown, 1000);

  	$("#timerDisplay").prepend("<h2>Time Remaining: <span id='counter-number'></span> Seconds</h2>");

	$("#start").remove(); //remove start button; no longer needed (hide if needed)

	for (var i=0; i<gameQuest.length; i++){

	   $("#questionAnswerDiv").append("<h2>" + gameQuest[i].question + "</h2>");

// puts each answer on the page with the question from above
		for (var j=0; j<gameQuest[i].answers.length; j++){
		  $("#questionAnswerDiv").append("<input type='radio' name='question-" + i +
        "' value='" + gameQuest[i].answers[j] + "''>" + gameQuest[i].answers[j] + "<br/>");

		}; // end of j loop
	};   // end of i loop

	game.countdown();

  },  // end of start function

done: function() {
// clear the interval in the end
		clearInterval(timer);

//  hide all the questions, answers, submit buttons, etc. from the page
		$("#timerDisplay").hide();
		$("#questionAnswerDiv").hide();
		$("#submit").hide();

// Creating a div to hold the game ending stats
          var gameStats = $("<div class='allDone'>");

      // Creating an element to display All Done!
          var pZero = $("<p>").text(" All Done! ");

          // Displaying above
          gameStats.html(pZero);

          // Creating an element to have the count of Correct Answers
          var pOne = $("<p>").text("Correct Answers: " + corr);

          // Displaying above
          gameStats.append(pOne);

          // Creating an element to hold the count of Incorrect Answers ***CHANGE LATER
          var pTwo = $("<p>").text("Incorrect Answers: " + inCorr);

          // Displaying above
          gameStats.append(pTwo);

          // Creating an element to hold the unAnswered amount
          var pThree = $("<p>").text("Unanswered: " + unAnswered);

          // Appending the above
          gameStats.append(pThree);

          // Putting the stats up top
          $("#gameIsOver").prepend(gameStats);

	}  // end of done function
  };  // end of game object

//  This code will run as soon as the page loads.
$(document).ready(function() {

$("#start").css('border', '3px solid blue').width(100).height(50);
$("#submit").hide();

/// THIS IS WHAT WORKS  
$("#start").click(game.start);

}); // end of document.ready
