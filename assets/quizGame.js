//setting variables
var getAnswer;
var score = 0;
var secondsLeft = 60;
var interval;
var initialsInput = "";
var questionCounter = 0;
var getScore = document.getElementById("scoreText");
var initialsText = document.querySelector(".initialSpace");
var user = [];

//array of questions
var questions = [

    {
        title: "Inside which HTML element do we put the JavaScript?",
        choices: ["<script>", "<scripting>", "<javascript>", "<js>"],
        answer: "<script>"
    },
    {
        title: "Where is the correct place to insert a script tag?",
        choices: ["The <body> section", "The <head> or <body>", "the <head> section", "In the <style> tags"],
        answer: "The <head> or <body>"
    },
    {
        title: "How do you write 'Hello World' in an alert box?",
        choices: ["msgBox('Hello World');", "alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');"],
        answer: "alert('Hello World');"
    },
    {
        title: "How do you call a function in JavaScript?",
        choices: ["call myFunction", "call function myFunction", "myFunction()", "myFunction"],
        answer: "myFunction()"
    }
];


function remove() {
    //deleting play button
    var play = document.getElementById("playbtn");
    play.remove(play);

    setUp();
    timer();
}

//making buttons visible and setting up question in text area and setting up questions on buttons
function setUp() {
    //creating random number
    var random = Math.floor(Math.random() * questions.length);

    //making buttons visible
    document.getElementById("btn1").style.visibility = "visible";
    document.getElementById("btn2").style.visibility = "visible";
    document.getElementById("btn3").style.visibility = "visible";
    document.getElementById("btn4").style.visibility = "visible";
    document.getElementById("score").style.visibility = "visible";
    document.getElementById("time").style.visibility = "visible";
    document.getElementById("timer").style.visibility = "visible";

    //setting up question
    document.getElementById("questionSpace").textContent = questions[random].title;

    //setting up answer on button
    document.getElementById("btn1").textContent = questions[random].choices[0];
    document.getElementById("btn2").textContent = questions[random].choices[1];
    document.getElementById("btn3").textContent = questions[random].choices[2];
    document.getElementById("btn4").textContent = questions[random].choices[3];

    //storing answer in global variable
    getAnswer = questions[random].answer;

    if (questionCounter === 5) {
        clearInterval(interval);
        window.location.href = "initials.html";
    }

}

//sets timer
function timer() {
    interval = setInterval(function () {
        secondsLeft--;
        if (secondsLeft < 10) {
            document.getElementById("timer").textContent = ":0" + secondsLeft;
        }

        if (secondsLeft >= 10 || secondsLeft < 0) {
            document.getElementById("timer").textContent = ":" + secondsLeft;
        }

        if (secondsLeft === 0) {
            clearInterval(interval);
            alert("Time is up. You Lost");
        }
    }, 1000);
}

//verifies input for button 1
function check1() {

    //adding one to the question counter to keep track of position in the game
    questionCounter++;
    //grabbing the textContent from the selected button for comparison to right answer
    var buttonId1 = document.getElementById("btn1").textContent;

    //comparing user answer to correct answer
    if (questions.length > 0) {
        if (buttonId1 === getAnswer) {
            score++;
            secondsLeft += 3;
        } else {
            score--;
            secondsLeft -= 3;
        }
    }
    //printing score to DOM
    document.getElementById("scoreText").textContent = score;
    setUp();
}

function check2() {
    //adding one to the question counter to keep track of position in the game
    questionCounter++;
    //grabbing the textContent from the selected button for comparison to right answer
    var buttonId2 = document.getElementById("btn2").textContent;

    //comparing user answer to correct answer
    if (questions.length > 0) {
        if (buttonId2 === getAnswer) {
            score++;
            secondsLeft += 3;
        } else {
            score--;
            secondsLeft -= 3;
        }
    }
    //printing score to DOM
    document.getElementById("scoreText").textContent = score;
    setUp();
}

function check3() {
    //adding one to the question counter to keep track of position in the game
    questionCounter++;
    //grabbing the textContent from the selected button for comparison to right answer
    var buttonId3 = document.getElementById("btn3").textContent;

    //comparing user answer to correct answer
    if (questions.length > 0) {
        if (buttonId3 === getAnswer) {
            score++;
            secondsLeft += 3;
        } else {
            score--;
            secondsLeft -= 3;
        }
    }
    //printing score to DOM
    document.getElementById("scoreText").textContent = score;
    setUp();
}

function check4() {
    //adding one to the question counter to keep track of position in the game
    questionCounter++;
    //grabbing the textContent from the selected button for comparison to right answer
    var buttonId4 = document.getElementById("btn4").textContent;

    //comparing user answer to correct answer
    if (questions.length > 0) {
        if (buttonId4 === getAnswer) {
            score++;
            secondsLeft += 3;
        } else {
            score--;
            secondsLeft -= 3;
        }
    }
    //printing score to DOM
    document.getElementById("scoreText").textContent = score;
    setUp();
}

 function initials(){
    //getting initials for the hall of fame
    initialsInput = document.querySelector(".input").value;
    
    //pasting initials for the hall of fame
    document.querySelector("#postInitials").textContent = initialsInput;
    //resetting the field input to null
    document.querySelector(".input").value = "";
    
    //pushing initials to array storage
    user.push(initialsInput);
  
    //calling storeInitials function
    storeInitials();
 

//end initials function   
};

function storeInitials() {
    // Stringify and set "todos" key in localStorage to todos array
    localStorage.setItem("user", JSON.stringify(user));

    //calling getInitials function
    getInitials();


}

function getInitials() {
    
    //Get stored initials from localStorag, Parsing the JSON string to an object
    var storedInitials = JSON.parse(localStorage.getItem("user"));
  
    // If user was retrieved from localStorage, update the user array 
    if (user !== null) {
      user = storedInitials;
    }

    document.querySelector("#postInitials").textContent = user;
        
    

 //end getInitials function
  }


