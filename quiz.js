function checkAnswer() {
    const answer = document.getElementById("answer").value.trim().toLowerCase();
    const result = document.getElementById("result");

    if (answer === "hypertext markup language") {
        result.textContent = "Correct! 🎉";
        result.style.color = "green";
    } else {
        result.textContent = "Incorrect, try again.";
        result.style.color = "red";
    }
}
