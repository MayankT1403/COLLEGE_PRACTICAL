document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById('submitBtn');
    const resultContainer = document.getElementById('resultContainer');


    const correctAnswers = {
        q1: 'A',
        q2: 'C',
        q3: 'A'
    };

    function checkAnswers() {
        let score = 0;
        let totalQuestions = 3;

        const userAnswers = {
            q1: document.querySelector('input[name="q1"]:checked'),
            q2: document.querySelector('input[name="q2"]:checked'),
            q3: document.querySelector('input[name="q3"]:checked'),
        };

        for (let key in userAnswers) {
            if (userAnswers[key] && userAnswers[key].value === correctAnswers[key]) {
                score++;
            }
        }

        resultContainer.classList.remove('hidden');
        resultContainer.textContent = `You got ${score} out of ${totalQuestions} correct.`;
    }

    submitButton.addEventListener('click', checkAnswers);
});
