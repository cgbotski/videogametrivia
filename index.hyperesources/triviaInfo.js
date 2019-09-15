function getInfo() {
	window.answerLocked = 0;
	//alert("window.getInfo answerlocked = " + window.answerLocked);
	window.numberOfQuestions = 	10;
	window.currentSlide = 		0;
	window.currentScore = 		0;
	window.title = "Video Game Trivia!";
	window.questions = ["Which video game is shown in the background image?",
						"Which videogame was one of the first to feature an 'easter egg'?",
						"Which is not the name of a Pac Man ghost?",
						"What is the best selling video game console?",
						"Which location is not in the original Deus Ex game?",
						"Which composer's music is prevalent throughout the Modern Age of Sid Meier's Civilization 4?",
						"Which company released the first 3D videocard for PC?",
						"In the original Castle Wolfenstein, what does an enemy say as he is dying?",
						"How many different tetraminos are there?",
						"Which of these is not a Pokemon character?"]
	window.correctAnswer = ["B", "B", "D", "A", "D","B", "C", "E", "C", "C" ]; 
	window.answerA = [	"Geometry Wars",
						"Pac Man",
						"Inky",
						"Playstation 2",
						"Battery Park New York",
						"Elvis",
						"NVIDIA",
						"Dumkopf!",
						"5",
						"Rattata"]
	window.answerB = [	"Tempest",
						"Adventure",
						"Pinky",
						"Wii",
						"Hong Kong",
						"John Adams",
						"Intel",
						"Essiggurke Suppe!",
						"6",
						"Charmander"]
	window.answerC = [	"Zaxxon",
						"Pong",
						"Blinky",
						"Super NES",
						"Area 51",
						"Bach",
						"3dFX",
						"Guten Nacht!",
						"7",
						"Badduck"]	
	window.answerD = [	"Freedom Fighters",
						"Pitfall",
						"Winky",
						"X Box One",
						"Moscow Russia",
						"Michael Jackson",
						"ATI",
						"Ich mag hunde!",
						"8",
						"Magic Carp"]
	window.answerE = [	"Missile Command",
						"Doom",
						"Clyde",
						"Gameboy",
						"Paris",
						"Louis Armstrong",
						"AMD",
						"Mein Leben!",
						"9",
						"Oddfish"]
	window.response = ["Tempest was created in 1981 and was one of the first games to use vector graphics.  It's high inertia rotary controller is smooth as butter.",
						"In 1979, Atari programmer Warren Robinett left his name in a secret room to get around Atari's disallowing programmers' names in the credits. ",
						"The original Japanese names for the ghosts translated as Fickle, Chaser, Ambusher, and Stupid.",
						"Over 157 million PS2's have been sold according to the Guinness Book of World Records",
						"Though the graphics for Deus Ex are very dated, the soundtrack and story are still one of gaming's best achievements.",
						"John Adams' minimalist industrial sounding music creates an eerie backdrop for the end game war you are likely in for angering a neighborhood culture for thousands of years.",
						"3dFX release its Voodoo 1 card in 1996 to the cheers of Duke Nukem 3D and Doom players.",
						"Mein Leben means 'My Life', and each utterance of the phrase was done with absolutely no German accent.",
						"Tetris features 7 different pieces of 4 squares.  Tetra is the Greek prefix for 4.  Some doctors believe that playing Tetris increases critical thinking, reasoning, language, and processing.",
						"Millions, perhaps trillions, of dollars are spent on Pokemon cards by kids who have no intention of learning how to play the game.  My opinion."]
	
}
						