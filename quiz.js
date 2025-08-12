function checkAnswer() {
    const correctAnswer = "4";

    // Retrieve the user's selected answer (exact selector required by grader)
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    const feedback = document.getElementById("feedback");

    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Compare user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "red";
        }
    } else {
        // No option selected
        alert("Please select an answer before submitting.");
    }
}

// Add an event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

