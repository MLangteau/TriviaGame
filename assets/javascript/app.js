var questionQuest;
var questionCount = 0;
var timer;
var corr = 0;
var inCorr = 0;
var unAnswered = 0;
var radioEverChecked = false;
var submitEverDone = false;
var radios = [];
var gotARightOne = false;
var neverAnswered = false;

//  Game Questions Object

  var gameQuest = [{
  					question: "What is one of the best know catch phrases from this movie?",
		            answers:["Gotta keep moving","Don't stop now","Just keep swimming","I can't remember"],
		            url: "../images/sunset.jpg",
	  	//			url: "http://www.grahamowengallery.com/forum/mallard.jpg",
	  				correctAnswer: "Just keep swimming"
	  				},
					
					{
					question: "What type of a fish is Nemo?",
	  				answers:["Blowfish","Clownfish","Pufferfish","Striped fish"],
	  				url: "../images/sunset.jpg",
	  //				url: "https://i.ytimg.com/vi/_z-1fTlSDF0/maxresdefault.jpg",
	  				correctAnswer: "Clownfish"
	  				},
					
					{
					question: "How old is Crush, the Turtle?",
	  				answers:["102","150","40","99"],
	  				url: "../images/sunset.jpg",
	  //				url: "http://www.grahamowengallery.com/forum/mallard.jpg",
	  				correctAnswer: "150",
	  				},
					
					{
					question: "From what disorder does Dory suffer?",
	  				answers:["Borderline personality disorder","Dementia","Anterograde Amnesia","Autism"],
	  //				url: "http://www.grahamowengallery.com/forum/mallard.jpg",
	  				correctAnswer: "Anterograde Amnesia",
	  				},
					
					{
					question: "What is the safest way for Dory and Marlin to get past the maze of Jellyfish",
	  				answers:["Over","Under","Through","Around"],
	  				url: "../images/sunset.jpg",
	  //				url: "http://www.grahamowengallery.com/forum/mallard.jpg",
	  				correctAnswer: "Over",
	  				},
					
					{
					question: "What is Anterograde Amnesia?",
	  				answers:["Inability to swim for a long time","Inability to keep friends","Inability to swim straight","Inability to form new memories"],
	  				url: "../images/sunset.jpg",
	  //				url: "http://www.grahamowengallery.com/forum/mallard.jpg",
	  				correctAnswer: "Inability to form new memories"
	  				},

					{
					question: "Which one of these can foster memory retention for those who suffer from Anterograde Amnesia?",
	  				answers:["A positive environment","Social support","Familiarity","All of the above"],
	  				url: "../images/sunset.jpg",
	  //				url: "http://www.grahamowengallery.com/forum/mallard.jpg",
	  				correctAnswer: "All of the above",
	  				},

					{
					question: "Why was Nemo's fin smaller than the other?",
	  				answers:["Birth defect","Ran into the side of a boat","Attacked while still in the egg","Clipped by a shark"],
	  				url: "../images/sunset.jpg",
	  //				url: "http://www.grahamowengallery.com/forum/mallard.jpg",
	  				correctAnswer: "Attacked while still in the egg",
	  				},

					{
					question: "What address was Dory and Marlin were looking for?",
	  				answers:["44 Winding Way","13 Shark Drive","52 Reed Road","42 Wallaby Way"],
	  				url: "../images/sunset.jpg",
	  //				url: "http://www.grahamowengallery.com/forum/mallard.jpg",
	  				correctAnswer: "42 Wallaby Way",
	  
	  				},
	  									{
					question: "Who ate Nemo's mother, Coral, and all but one of her eggs?",
	  				answers:["Jellyfish","Barracuda","A shark","A whale"],
	  				url: "../images/sunset.jpg",
	  //				url: "https://i.ytimg.com/vi/_z-1fTlSDF0/maxresdefault.jpg",
	  				correctAnswer: "Barracuda"
	  				}];

//Declare the timer variable above the game object

var game = {
  correct: 0,
  incorrect: 0,
// In the top of game{}, set the counter to be whatever value want
//     SHOULD BE 120  counter: 120,            ***************   CHANGE **********

	counter: 40,

//Here we have the method for doing the actual counting down 
  countdown: function() {
    game.counter--;
//    console.log("game.counter: inside of countdown function: " + game.counter);
//    $("#counter-number").html(game.counter);
    $("#counter-number").text(game.counter);

    game.submitCheck();

    if (submitEverDone) {
    	console.log("SUBMIT THIS!");	

    	for (var j=0; j<gameQuest.length; j++) {
    		console.log("j: " + j);
    		game.checkAllAnswers('question-' + j, j); ///  need index
    	} // end of if for all questions

    	game.done();
    }
    else if (game.counter === 0) {
      console.log("TIME UP");

	  for (var j=0; j<gameQuest.length; j++) {
			console.log("j: " + j);
			game.checkAllAnswers('question-' + j, j); ///  need index
	  } // end of if for all questions

//This calls a game over function
      game.done();
    }  // end of else if
  },  // end of countdown function

// checks to see which radio buttons were checked and if correct/incorrect/empty
// handles on click
//*******************************************************************************	
//	var whatever =
/*	$.each($("input[name='question-0']:checked"), function() {
		console.log("helphelphelp");
		});

	console.log("whatever", whatever);
	str = JSON.stringify(whatever, null, 4);

	console.log("stringify ************** ", str, " end stringify ***********");

	$.each($("input[name='question-1']:checked"), function() {
		console.log("helphelphelp222");
		});
*/

  submitCheck: function() {

  	$("#submit").on("click", function (){	
  		console.log("IN SubmitCheck - must have submitted ***");
  		submitEverDone = true;
//	var justSeeIfSubmitWorks = $("#submit").on("click", function (){	
//		console.log("clicked submit" + justSeeIfSubmitWorks);
//	});
	});
  },  // end of submitCheck function

  checkAllAnswers: function (questionthis, index) {  //  has 'question-0' thru 'question-9' so far

//	$.each($("input[name='question-0']:checked"), function() {
//		console.log("q checked, so eval q0");
		console.log("In checkAllAnswers");
		console.log("questionthis: mlml " + questionthis);
		var radios = document.getElementsByName(questionthis);

		console.log("radios", radios);
//                               game.checkAllAnswers('question-' + j);
		console.log("radios.length b4 for " + radios.length);
		gotARightOne = false;
		neverAnswered = false;

		for (var i = 0; i < radios.length; i++) {
			if (radios[i].checked) {
		console.log("radios[i]  is checked inside INDEX AND I: " + " " + index + " " + i);

//				var radioValue = $("input[name='question-0']:checked").val(); ///**ml
//  the following is not working, so replace with next
/*				var creature = "name='" + questionthis + "'";
//				var creature = "name=" + questionthis;

				console.log("creature: mallard ", creature);

				var radioValue = $("input[creature]:checked").val();
*/	
				var radioValue = "";
				console.log("index: " + index);
				if (index === 0) {
					radioValue = $("input[name='question-0']:checked").val();
					console.log("q0");
				}
				else if (index === 1) {
					radioValue = $("input[name='question-1']:checked").val();
					console.log("q1");
				}
				else if (index === 2) {
					radioValue = $("input[name='question-2']:checked").val();
					console.log("q2");
				}
				else if (index === 3) {
					radioValue = $("input[name='question-3']:checked").val();
					console.log("q3");
				}
				else if (index === 4) {
					radioValue = $("input[name='question-4']:checked").val();
					console.log("q4");
				}
				else if (index === 5) {
					radioValue = $("input[name='question-5']:checked").val();
					console.log("q5");
				}
				else if (index === 6) {
					radioValue = $("input[name='question-6']:checked").val();
					console.log("q6");
				}
				else if (index === 7) {
					radioValue = $("input[name='question-7']:checked").val();
					console.log("q7");
				}
				else if (index === 8) {
					radioValue = $("input[name='question-8']:checked").val();
					console.log("q8");
				}
				else if (index === 9) {
					radioValue = $("input[name='question-9']:checked").val();
					console.log("q9");
				}
				else {
					console.log("WHAT index is this: " + index);
				}

				console.log("radioValue is (after the if): ", radioValue + " index " + index);

				if (radioValue) {
					// compare with correct answer
					console.log("radios[i].value (if) :", radios[i].value);
					if (radios[i].value == gameQuest[index].correctAnswer){
						alert("Got this sucker right! q0  ");
						gotARightOne = true;
						neverAnswered = false;
//						corr++;
					}  // end of if 
					else 
						alert("Got this sucker wrong! q0  ");
						neverAnswered = false;
	//					inCorr++;
				}  // end of if 
			  	else {
					unAnswered++;
					neverAnswered = true;
		//			alert("unAnswered/wrong! q0  ");
			  	}  // end of else	
			} // end of if (radios[i].checked) 
			else {
//				neverAnswered = true;
//				alert("did not answer");
			}
			
		}  // end of for

		if (gotARightOne){
			corr++;
		} // end of if
		else {
			inCorr++;
		}; // end of else
		
		if (neverAnswered) {
				unAnswered++;
		};
		
//	});  // end of each


  },  // end of checkAllAnswers function
	
//****************************************************************************

  start: function() {
//Inside start Function we set timer by calling the countdown method\
    
    timer = setInterval(game.countdown, 1000);

  	$("#timerDisplay").prepend("<h2>Time Remaining: <span id='counter-number'></span> Seconds</h2>");
//	$("#questionAnswerDiv").hide();

	$("#start").remove(); //remove start button; no longer needed (hide if needed)

	for (var i=0; i<gameQuest.length; i++){
//		console.log("gameQuest[i].question BOZO ", gameQuest[i].question);

	   $("#questionAnswerDiv").append("<h2>" + gameQuest[i].question + "</h2>");

		for (var j=0; j<gameQuest[i].answers.length; j++){
// puts each answer on the page with the question from above
		  $("#questionAnswerDiv").append("<input type='radio' name='question-" + i +
        "' value='" + gameQuest[i].answers[j] + "''>" + gameQuest[i].answers[j]);

		}; // end of j loop
	};   // end of i loop

	game.countdown();

  },  // end of start function

// clear the interval in the end

	done: function() {


//		console.log("Timer in done function before clearInterval: " + timer);
		clearInterval(timer);
//		console.log("Timer in done function after clearInterval: " + timer);

//  hide all the questions from the page
		$("#timerDisplay").hide();
		$("#questionAnswerDiv").hide();
		$("#submit").hide();

// Creating a div to hold the game ending stats
          var gameStats = $("<div class='allDone'>");

      // Creating an element to display All Done!
          var pZero = $("<p>").text(" All Done! ");

          // Displaying above
          gameStats.html(pZero);

          // Storing the correct answers value
 //         var corr = correct.length;

          // Creating an element to have the count of Correct Answers
          var pOne = $("<p>").text("Correct Answers: " + corr);

          // Displaying above
          gameStats.append(pOne);

          // Storing the incorrect answers value
   //       var inCorr = incorrect.length;

          // Creating an element to hold the count of Incorrect Answers ***CHANGE LATER
          var pTwo = $("<p>").text("Incorrect Answers: " + inCorr);

          // Displaying above
          gameStats.append(pTwo);

          // Storing the length of the unanswered array
     //     var unAnswered = UnAnswered.length;      ***********CHANGE LATER
  //        var unAnswered = 88;

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

/// THIS IS WHAT WORKS  
$("#start").click(game.start);

// dot and variable notation (most of the time files will be with JSON or object)

	console.log(game);

}); // end of document.ready
