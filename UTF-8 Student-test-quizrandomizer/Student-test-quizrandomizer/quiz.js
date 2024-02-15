//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID:   65130500036    Name: Nitchan Konkit

import { quizQuestions, getRandomQuiz } from "./quizQuestions.js";

let randomQuiz;

function init() {
//insert your code here
const menu = document.getElementById('menu');
const newQuizBtn = document.createElement('button');
newQuizBtn.textContent = 'New Quiz';
newQuizBtn.addEventListener('click', generateQuiz);

const clearQuizbtn = document.createElement('button');
clearQuizbtn.textContent = 'Clear Quiz';
clearQuizbtn.addEventListener('click', clearQuiz)

menu.appendChild(newQuizBtn);
menu.appendChild(clearQuizbtn);

}

function generateQuiz() {
//insert your code here
clearQuizbtn(); 

randomQuiz = getRandomQuiz();
const quizContainer = document.createElement('quizContainer');
const questionDiv = document.createElement('div');
questionDiv.id = 'question';
const questionPara = document.createElement('p');
questionPara.textContent = randomQuiz.question;
questionDiv.appendChild(questionPara);
randomQuiz.options.forEach(option => {
    const optionButton = document.createElement('button');
    optionButton.textContent = option;
    optionButton.style.margin = '5px';
    optionButton.addEventListener('click', checkAnswer)
    questionDiv.appendChild(optionButton);
});

quizContainer.appendChild(questionDiv);
}

function clearQuiz() {
//insert your code here
const quizContainer = document.getElementById('quizContainer');
const removeanswer = document.querySelector('answer');
quizContainer.innerHTML = '';
removeanswer.textContent = '';

}

function checkAnswer(e) {
//insert your code here
const selectOp= e.target.textcontent;
const answerD = document.querySelector('answer')
if (selectOp === randomQuiz.answer){
    answerD.textContent = 'Correct';
    answerD.style.color = 'black';
}else {
    answerD.textContent = 'Incorrect';
    answerD.style.color = 'black';
}

}

init();
