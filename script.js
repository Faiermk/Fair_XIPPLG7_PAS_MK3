const submitBtn = document.getElementById('submit');

const quizData = [
    {
        question: "Dimanakah ibukota Indonesia?",
        a: "Bali",
        b: "Padang",
        c: "Surabaya",
        d: "Jakarta",
        correct: "d",
    },
    {
        question: "Stadion Gelora Bung Karno Berlokasi Dimana?",
        a: "Banyumas",
        b: "Tanjung Priuk",
        c: "Senayan",
        d: "Depok",
        correct: "c",
    },
    {
        question: "Dari manakah asal Bika Ambon?",
        a: "Yogyakarta",
        b: "Padang",
        c: "Medan",
        d: "Ambon",
        correct:"c",
    },
    {
        question: "Siapa yang menyalin teks proklamasi?",
        a: "Ir. Soekarno",
        b: "Sayuti Melik",
        c: "Fair Muafi",
        d: "Gibran Rakabuming Raka",
        correct:"b",
    },
    {
        question: "Siapa pembuat perusahaan Apple?",
        a: "Steve Jobs",
        b: "Brian Fransisco",
        c: "William Nugget",
        d: "Dean Crab",
        correct:"a",
    }
];

const quiz = document.getElementById('quiz');
const answerEl = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswer() {
    answerEl.forEach(answer => {
        answer.checked = false;
    });
}

function getSelected() {
    let answer;
    answerEl.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h2>Anda menjawab ${score} dari ${quizData.length} pertanyaan dengan benar</h2>
            <button onclick="location.reload()">Coba Lagi</button>
            `;
        }
    }
});