
/**
 * QUIZ LOGIC
 * Data Processing & Interfaces
 * Main functionality for the quiz
 */

let currentQuestion = 0;
let score = 0;
let answered = false;
let answers = [];

/**
 * Loads the current question and displays it
 */
function loadQuestion() {
    const question = questions[currentQuestion];
    
    document.getElementById('questionNumber').textContent = 
        `Question ${currentQuestion + 1} of ${questions.length}`;
    
    document.getElementById('typeIndicator').textContent = question.type;
    
    document.getElementById('question').textContent = question.question;

    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectOption(index);
        optionDiv.id = `option-${index}`;
        optionsDiv.appendChild(optionDiv);
    });

    document.getElementById('feedback').classList.remove('show', 'correct', 'incorrect');
    document.getElementById('btnNext').disabled = true;
    answered = false;

    updateProgress();
}

/**
 * Handles answer selection
 * @param {number} index - Index of selected answer
 */
function selectOption(index) {
    if (answered) return;

    const question = questions[currentQuestion];
    answered = true;
    answers.push(index);

    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.onclick = null);

    const selectedOption = document.getElementById(`option-${index}`);
    selectedOption.classList.add('selected');

    const feedback = document.getElementById('feedback');
    const isCorrect = index === question.correct;

    if (isCorrect) {
        selectedOption.classList.add('correct');
        score++;
        feedback.className = 'feedback show correct';
        feedback.innerHTML = `
            <div class="feedback-title">✅ Correct!</div>
            <div>${question.explanation}</div>
        `;
    } else {
        selectedOption.classList.add('incorrect');
        document.getElementById(`option-${question.correct}`).classList.add('correct');
        feedback.className = 'feedback show incorrect';
        feedback.innerHTML = `
            <div class="feedback-title">❌ Wrong!</div>
            <div>Correct Answer: ${question.options[question.correct]}</div>
            <div style="margin-top: 10px;">${question.explanation}</div>
        `;
    }

    document.getElementById('btnNext').disabled = false;
}

/**
 * Goes to next question or shows results
 */
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

/**
 * Updates the progress bar
 */
function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progress').style.width = progress + '%';
}

/**
 * Shows the final results
 */
function showResults() {
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('results-section').classList.add('show');

    const correct = score;
    const total = questions.length;
    const percentage = Math.round((correct / total) * 100);

    document.getElementById('finalScore').textContent = `${correct}/${total}`;
    document.getElementById('correctCount').textContent = correct;
    document.getElementById('wrongCount').textContent = total - correct;
    document.getElementById('percentage').textContent = `${percentage}%`;

    let grade = "EXCELLENT";
    if (percentage < 60) {
        grade = "NEEDS IMPROVEMENT";
    } else if (percentage < 70) {
        grade = "SATISFACTORY";
    } else if (percentage < 80) {
        grade = "GOOD";
    } else if (percentage < 90) {
        grade = "VERY GOOD";
    }

    document.getElementById('gradeText').textContent = grade;
}

/**
 * Resets the quiz to start over
 */
function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    answered = false;
    answers = [];
    
    document.getElementById('quiz-section').style.display = 'block';
    document.getElementById('results-section').classList.remove('show');
    
    loadQuestion();
}

/**
 * Initialize quiz on page load
 */
document.addEventListener('DOMContentLoaded', function() {
    loadQuestion();
});
