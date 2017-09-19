
// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2

(	function(window) {
	var byeSpeaker = {}
 	byeSpeaker.speakWord = "Good Bye";

	byeSpeaker.speak = function (name) {
  		console.log(byeSpeaker.speakWord + " " + name);
	}

    window.byeSpeaker = byeSpeaker;
    
}) (window);