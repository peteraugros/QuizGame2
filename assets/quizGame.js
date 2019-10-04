//setting variables


//array of questions
var questions = [

    {
        title: "Inside which HTML element do we put the JavaScript?",
        choices: ["<script>", "<scripting>", "<javascript>", "<js>"],
        answer: "<script>"
    },
    {
        title: "Where is the correct place to insert a JavaScript?",
        choices: ["The <body> section", "The <head> or <body>", "the <head> section", "In the <style> tags"],
        answer: "The <head> or <body>"
    },
    {
        title: "How do you write 'Hello World' in an alert box?",
        choices: ["msgBox('Hello World');", "alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');"],
        answer: "alert('Hello World);"
    },
    {
        title: "How do you call a function in JavaScript?",
        choices: ["call myFunction", "call function myFunction", "myFunction()", "myFunction"],
        answer: "myFunction()"
    }
];

//making buttons visible and setting up question in text area and setting up questions on buttons
function setUp(){
    //making buttons visible
    document.getElementById("btn2").style.visibility = "visible";
    document.getElementById("btn3").style.visibility = "visible";
    document.getElementById("btn4").style.visibility = "visible";

    //setting up question
    document.getElementById("questionSpace").textContent = questions[0].title;
}
