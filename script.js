const quizDB =[
    {

    question: "Inside which HTML element do we put the JavaScript?",
    a: "Hi",
    b: "Bi",
    c: "Ci",
    d: "Di",
    ans:"ans1"
    },
    {
        question : "Q2: 1+1?",
        a:2,
        b:3,
        c:4,
        d:5, 
        ans: "ans1"
    },
    {
        question : "Q3: What is your name ?",
        a: "write your self",
        b: "Ayush",
        c: "Ayusha",
        d: "ayushaa",
        ans: "ans1"
    },
    {
        question : "Q4: What is the fullform of HTML ?",
        a: "Hypertext Markup Language",
        b: "1",
        c: "2",
        d: "3",
        ans: "ans1"
    }


];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer1');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {    // question lai laod grni 
    const questionList= quizDB[questionCount]; // auta pura quesyion list mah rakni
    question.innerText = questionList.question; // teo list lai call grni 

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;


}
loadQuestion();


const getCheckAnswer = () => {
    let answer; // sab answer lai liyo 
    answers.forEach((curAnsElem) => { 
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
        
    });
    return answer;
};

const deselectAll =() =>{
    answers.forEach((curAnsElem)=> curAnsElem.checked = false);

}

submit.addEventListener('click',() => { // user ly submit button click gresi matrw fuction call hunxa checkAnser 
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };
    questionCount++;
    deselectAll();
    if(questionCount < quizDB.length){ // jaba sama question ko count less than data store vako count vanda sano hudaina taba sama question lai call gri rakhni 
        loadQuestion();

    } else {
        showScore.innerHTML = `
        <h3> You Scored ${score}/${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()"> Play Again </button> 
        `;
        showScore.classList.remove('scoreArea');

    }
});
