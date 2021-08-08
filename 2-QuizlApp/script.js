const quizData = [
  {
    question: 'What is the most used programming language in 2019?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
  },
  {
    question: 'Who is the President of US?',
    a: 'Florin Pop',
    b: 'Donald Trump',
    c: 'Ivan Saldano',
    d: 'Mihai Andrei',
    correct: 'b',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Cascading Style Sheet',
    c: 'Jason Object Notation',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
]
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const answerEls = document.querySelectorAll('.answer')
let currentQuiz = 0
let score = 0

loadQuizl()

function loadQuizl() {
  const currentQuizlData = quizData[currentQuiz]

  questionEl.innerText = currentQuizlData.question
  a_text.innerText = currentQuizlData.a
  b_text.innerText = currentQuizlData.b
  c_text.innerText = currentQuizlData.c
  d_text.innerText = currentQuizlData.d
}

function getSelected() {
  let answer = undefined
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })
  return answer
}

submitBtn.addEventListener('click', () => {
  // check to see the answer
  const answer = getSelected()
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }
    currentQuiz++
    if (currentQuiz < quizData.length) {
      loadQuizl()
    } else {
      quiz.innerHTML = `<h2> You answered correctly at ${score}/${quizData.length} questions. </h2>
      <button onclick="location.reload()">Reload</button>
      `
    }
  }
})
