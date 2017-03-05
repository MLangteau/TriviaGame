var questionQuest;
var questionCount = 0;
var timer;
var corr = 0;
var inCorr = 0;
var notAnswered = 0;
var radioEverChecked = false;

//  Game Questions Object

  var gameQuest = [{
  					question: "What is one of the best know catch phrases from this movie?",
		            answers:["Gotta keep moving","Don't stop now","Just keep swimming","I can't remember"],
	  	//			url: "http://www.grahamowengallery.com/forum/mallard.jpg",
	  				correctAnswer: "Just keep swimming"
	  	//			url: "../images/...jpg",			
	  				},
					
					{
					question: "What type of a fish is Nemo?",
	  				answers:["Blowfish","Clownfish","Pufferfish","Striped fish"],
	  //				url: "https://i.ytimg.com/vi/_z-1fTlSDF0/maxresdefault.jpg",
	  				correctAnswer: "Clownfish"
	  				},
					
					{
					question: "How old is Crush, the Turtle?",
	  				answers:["102","150","40","99"],
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
	  //				url: "http://www.grahamowengallery.com/forum/mallard.jpg",
	  				correctAnswer: "Over",
	  				},
					
					{
					question: "What is Anterograde Amnesia?",
	  				answers:["Inability to swim for a long time","Inability to keep friends","Inability to swim straight","Inability to form new memories"],
	  //				url: "http://www.grahamowengallery.com/forum/mallard.jpg",
	  				correctAnswer: "Inability to form new memories"
	  				},

					{
					question: "Which one of these can foster memory retention for those who suffer from Anterograde Amnesia?",
	  				answers:["A positive environment","Social support","Familiarity","All of the above"],
	  //				url: "http://www.grahamowengallery.com/forum/mallard.jpg",
	  				correctAnswer: "All of the above",
	  				},

					{
					question: "Why was Nemo's fin smaller than the other?",
	  				answers:["Birth defect","Ran into the side of a boat","Attacked while still in the egg","Clipped by a shark"],
	  //				url: "http://www.grahamowengallery.com/forum/mallard.jpg",
	  				correctAnswer: "Attacked while still in the egg",
	  				},

					{
					question: "What address was Dory and Marlin were looking for?",
	  				answers:["44 Winding Way","13 Shark Drive","52 Reed Road","42 Wallaby Way"],
	  //				url: "http://www.grahamowengallery.com/forum/mallard.jpg",
	  				correctAnswer: "42 Wallaby Way",
	  
	  				},
	  									{
					question: "Who ate Nemo's mother, Coral, and all but one of her eggs?",
	  				answers:["Jellyfish","Barracuda","A shark","A whale"],
	  //				url: "https://i.ytimg.com/vi/_z-1fTlSDF0/maxresdefault.jpg",
	  				correctAnswer: "Barracuda"
	  				}];

//Declare the timer variable above the game object

var game = {
  correct: 0,
  incorrect: 0,
// In the top of game{}, set the counter to be whatever value want
//     SHOULD BE 120  counter: 120,            ***************   CHANGE **********

	counter: 30,

//Here we have the method for doing the actual counting down 
  countdown: function() {
    game.counter--;
//    console.log("game.counter: inside of countdown function: " + game.counter);
//    $("#counter-number").html(game.counter);
    $("#counter-number").text(game.counter);

    if (game.counter === 0) {
      console.log("TIME UP");
//This calls a game over function
      game.done();
    }  // end of if
  },  // end of countdown function

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

// checks to see which radio buttons were checked and if correct/incorrect/empty
// handles on click
//*******************************************************************************	
	var whatever =
	$.each($("input[name='question-0']:checked"), function() {
		console.log("helphelphelp");
		});

	console.log("whatever", whatever);
	str = JSON.stringify(whatever, null, 4);

	console.log("stringify ************** ", str, " end stringify ***********");

	$.each($("input[name='question-1']:checked"), function() {
		console.log("helphelphelp222");
		});
	
	var justSeeIfSubmitWorks = $("#submit").on("click", function (){	
		console.log("clicked submit" + justSeeIfSubmitWorks);
	});
	console.log("ima duna");
		for (var i=0; i< gameQuest.length; i++) {
			var gameQ = 'question-' + i;
			console.log("gameQ here:  " + gameQ);

			var radio = $(gameQ).on("click", function (){
				radioEverChecked = true;
				console.log(gameQuest[i].correctAnswer + " compare " + radio.checked)
				if (!radio.checked){
					console.log("NOT CHECKED!!!!");
				}
				else if ((radio.value) == gameQuest[i].correctAnswer && (radio.checked)) {
					console.log("correct and checked");
					corr++;
				} // end of if
				else if ((radio.value) == gameQuest[i].correctAnswer && (!radio.checked)) {
					console.log("correct and not checked");
					inCorr++;
					UnAnswered++;
				}  // end of else if
				else {
					console.log("What's going on here?")
					inCorr++;
				} // end of else
			})  // end of on-click gameQ
				console.log("done with nothing checked");
		};  // end of for loop

		if (!radioEverChecked) {
			console.log("Radio Never Checked");
		};
		

	
//*******************************************************************************	
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
     //     var notAnswered = UnAnswered.length;      ***********CHANGE LATER
  //        var notAnswered = 88;

          // Creating an element to hold the notAnswered amount
          var pThree = $("<p>").text("Unanswered: " + notAnswered);

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
