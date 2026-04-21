const form = document.getElementById("habit-form");
const questionsContainer = document.getElementById("questions");

renderQuestions();

form.addEventListener("submit", handleSubmit);

function renderQuestions() {
    const questionCards = GREEN_MIRROR_QUESTIONS.map((question, index) => {
        const optionsMarkup = question.options.map((option) => {
            return `<option value="${option.value}">${option.label} - ${option.description}</option>`;
        }).join("");

        return `
            <article class="question-card">
                <div class="question-number">Question ${index + 1}</div>
                <label for="${question.id}">
                    <span class="question-title">${question.title}</span>
                    <span class="question-text">${question.prompt}</span>
                </label>
                <select id="${question.id}" name="${question.id}" required>
                    ${optionsMarkup}
                </select>
            </article>
        `;
    }).join("");

    questionsContainer.innerHTML = questionCards;
}

function handleSubmit(event) {
    event.preventDefault();

    const responses = {};

    GREEN_MIRROR_QUESTIONS.forEach((question) => {
        responses[question.id] = document.getElementById(question.id).value;
    });

    localStorage.setItem("greenMirrorResponses", JSON.stringify(responses));
    window.location.href = "results.html";
}