const firstWords = ["Happy", "Funny", "Great", "Big", "Smart", "Fast", "Flash", "Small", "Awesome", "Amazing"]
const secondWords = ["Company", "Firm", "Corporation", "Job", "Activity", "Solutions", "Creativity", "Design", "Help", "Industry"]

var randomFirstNumber = Math.floor(Math.random()*firstWords.length)
var randomFirstWord = firstWords[randomFirstNumber];

var randomSecondNumber = Math.floor(Math.random()*secondWords.length)
var randomSecondWord = secondWords[randomSecondNumber];

var startupName = `${randomFirstWord} ${randomSecondWord}`;

var charactersNum = startupName.length - 1;
console.log("The startup: " + startupName + ", contains " + charactersNum + " characters.")