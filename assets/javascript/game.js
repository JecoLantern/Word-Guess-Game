// Array of Words to Guess
var word = ["frozen", "cinderella", "dumbo", "pinocchio", "hercules", "pocahontas", "aladdin", "mulan", "moana"];

// Array of Picture Clues by ID
var pic = ["frozen_img", "cinderella_img", "dumbo_img", "pinocchio_img", "hercules_img", "pocahontas_img", "aladdin_img", "mulan_img", "moana_img"];

// Random Word
var randNum = Math.floor(Math.random() * word.length);
var chosenWord = word[randNum];
word.splice(randNum,1);
var picClue = pic[randNum];
pic.splice(randNum,1);

// Declaration 1
var rightWord = [];
var wrongWord = [];
var underScore = [];
var guessChance = 15;
var win = 0;
var pictureClue = [];

// Declaration 2
var docUnderScore = document.getElementsByClassName("underScore");
var docRightWord = document.getElementsByClassName("rightWord");
var docWrongWord = document.getElementsByClassName("wrongWord");
var docGuessChance = document.getElementsByClassName("guessChance");
var docWin = document.getElementsByClassName("win")
var docPictureClue = document.getElementsByClassName("pictureClue")

// Underscores based on length of word
var generateUnderscore = () => {
    for(var i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
};
docUnderScore[0].innerHTML = generateUnderscore().join(" ");

// Display Movie Clue
var imageClue = document.getElementById(picClue);
imageClue.style.display = "block";

// User Guess
function Right_WrongWords(keyword) {
    // var keyword = String.fromCharCode(event.keyCode);
    if(chosenWord.indexOf(keyword) > -1) {
        // Right Words
        rightWord.push(keyword);
        // Replace underscore with the Right Letter
        underScore[chosenWord.indexOf(keyword)] = keyword;
        underScore[chosenWord.lastIndexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore.join(" ");
        docRightWord[0].innerHTML = rightWord;
    }
    else {
         // Wrong Words
         wrongWord.push(keyword);
         docWrongWord[0].innerHTML = wrongWord;
         docGuessChance[0].innerHTML = guessChance--;
    }
};

// User Word Matches??
function WordMatchesNo () {
    if(guessChance === -1) {
        alert("GAME OVER!");
        var ask = confirm("Do you want to Play Again?");
            if (ask == true) {
                location.reload();
            } else {
                alert("Thank You for Playing! See You Again!");
            }
    };
};

function WordMatchesYes () {
    if(underScore.join("") == chosenWord) {
		win = win + 1
    docWin[0].innerHTML = win

    // Clear Words and UnderScore
	underScore = [];
	rightWord = [];
	wrongWord = [];
	docUnderScore[0].innerHTML = "";
	docRightWord[0].innerHTML = rightWord;
	docWrongWord[0].innerHTML = wrongWord;
    
    // Remove Previous Image Clue
    imageClue.style.display = "none";

    //All Words Guessed Right
    if (win === 9) {

        alert("Congratulations! You've guessed all the Movie Titles!");
        var ask = confirm("Do you want to Play Again?");
            if (ask == true) {
                location.reload();
            } else {
                alert("Thank You for Playing! See You Again!");
            };
    };

    // Re-initialize
	randNum = Math.floor(Math.random() * word.length);
	chosenWord = word[randNum];
	word.splice(randNum,1);
    var generateUnderscore = () => {
        for(var i = 0; i < chosenWord.length; i++) {
            underScore.push('_');
        }
        return underScore;
    };
	docUnderScore[0].innerHTML = generateUnderscore().join(" ");
	console.log(generateUnderscore);
    console.log(underScore);
    
    var picClue = pic[randNum];
    console.log(picClue);
    pic.splice(randNum,1);
    console.log(pic);
    imageClue = document.getElementById(picClue);
    imageClue.style.display = "block";
	};
};

document.addEventListener("keypress", (event) => {

    var keyName = event.key;
    Right_WrongWords(keyName);
    WordMatchesNo();
    WordMatchesYes();
});

