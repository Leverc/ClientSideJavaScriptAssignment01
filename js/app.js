// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = '';
// Variable containing all the selection buttons
var buttons = document.querySelectorAll('.pressButton');

// query Selector variables for each of the individual buttons
var pressButton1 = document.querySelector('#nounButton');
var pressButton2 = document.querySelector('#verbButton');
var pressButton3 = document.querySelector('#adjectiveButton');
var pressButton4 = document.querySelector('#animalButton');
var pressButton5 = document.querySelector('#locationButton');

// Variable that stores the submit button
var submitButton = document.querySelector('.select');

// Variable that stores the random story button
var randomButton = document.querySelector('.random');

// Variable to store the text to be displayed
var storyText = document.querySelector('.storyText');
/* Button Arrays */
// Must be a noun
var button1Array = ['The Turkey ', 'Mom ', 'Dad ', 'The Dog ', 'My Teacher ', 'The Elephant ', 'The Cat '];
// Must be a verb
var button2Array = ['sat on ', 'ate ', 'danced with ', 'saw ', `doesn't like `, 'kissed '];
// Must be an adjective
var button3Array = ['a funny ', 'a scary ', 'a goofy ', 'a slimy ', 'a barking ', 'a fat '];
// Must be an animal
var button4Array = ['goat ', 'monkey ', 'fish ', 'cow ', 'frog ', 'bug ', 'worm '];
// Must be a location ex. 'on the moon'
var button5Array = ['on the moon ', 'on the chair ', 'in my spaghetti ', 'in my soup ', 'on the grass ', 'in my shoes '];

// Empty strings to hold partial string values to concatenate later
var selection1 = '';
var selection2 = '';
var selection3 = '';
var selection4 = '';
var selection5 = '';

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

// Clears the background of all buttons
function clearButtons() {
	for(var i = 0; i < buttons.length; i++)
		buttons[i].style.backgroundColor = '';
}

// Simple function to grab a random element from an array
function getRandomElement(array) {
	var randomNum = Math.floor(Math.random() * array.length);
	return array[randomNum];
}

/* Event Listeners
-------------------------------------------------- */
// Click event listener for each of the array buttons
for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function() {
		clearButtons();
		this.style.backgroundColor = 'orange';
	});
}

// Click event for the first button
pressButton1.addEventListener('click', function() {
	// Get a random element from the array
	var randomElement = getRandomElement(button1Array);
	// Save the random element as the current selection
	selection1 = randomElement;
	//Combine all the selections into a concatenated string
	textToSpeak = selection1 + selection2 + selection3 + selection4 + selection5;
	//Set the onscreen text to the story text
	storyText.textContent = textToSpeak;
	// Speak the random Element selected
	speakNow(randomElement);
});

// Click event for the second button
pressButton2.addEventListener('click', function() {
	// Get a random element from the array
	var randomElement = getRandomElement(button2Array);
	// Save the random element as the current selection
	selection2 = randomElement;
	//Combine all the selections into a concatenated string
	textToSpeak = selection1 + selection2 + selection3 + selection4 + selection5;
	//Set the onscreen text to the story text
	storyText.textContent = textToSpeak;
	// Speak the random Element selected
	speakNow(randomElement);
});

// Click event for the third button
pressButton3.addEventListener('click', function() {
	// Get a random element from the array
	var randomElement = getRandomElement(button3Array);
	// Save the random element as the current selection
	selection3 = randomElement;
	//Combine all the selections into a concatenated string
	textToSpeak = selection1 + selection2 + selection3 + selection4 + selection5;
	//Set the onscreen text to the story text
	storyText.textContent = textToSpeak;
	// Speak the random Element selected
	speakNow(randomElement);
});

// Click event for the fourth button
pressButton4.addEventListener('click', function() {
	// Get a random element from the array
	var randomElement = getRandomElement(button4Array);
	// Save the random element as the current selection
	selection4 = randomElement;
	//Combine all the selections into a concatenated string
	textToSpeak = selection1 + selection2 + selection3 + selection4 + selection5;
	//Set the onscreen text to the story text
	storyText.textContent = textToSpeak;
	// Speak the random Element selected
	speakNow(randomElement);
});

// Click event for the fifth button
pressButton5.addEventListener('click', function() {
	// Get a random element from the array
	var randomElement = getRandomElement(button5Array);
	// Save the random element as the current selection
	selection5 = randomElement;
	//Combine all the selections into a concatenated string
	textToSpeak = selection1 + selection2 + selection3 + selection4 + selection5;
	//Set the onscreen text to the story text
	storyText.textContent = textToSpeak;
	// Speak the random Element selected
	speakNow(randomElement);
});

// Click event for the Select button
submitButton.addEventListener('click', function(){
	//Combine all the selections into a concatenated string
	textToSpeak = selection1 + selection2 + selection3 + selection4 + selection5;
	//Set the onscreen text to the story text
	storyText.textContent = textToSpeak;
	//Speak the final concatenated string
	speakNow(textToSpeak);
});

// Click event for the random story button
randomButton.addEventListener('click', function() {
	//Get a random element from each array for the random story
	selection1 = getRandomElement(button1Array);
	selection2 = getRandomElement(button2Array);
	selection3 = getRandomElement(button3Array);
	selection4 = getRandomElement(button4Array);
	selection5 = getRandomElement(button5Array);

	//Combine all the selections into a concatenated string
	textToSpeak = selection1 + selection2 + selection3 + selection4 + selection5;
	
	//Set the onscreen text to the story text
	storyText.textContent = textToSpeak;
	//Speak the final concatenated string
	speakNow(textToSpeak);

});



