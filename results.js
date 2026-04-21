const savedResponses = JSON.parse(localStorage.getItem("greenMirrorResponses"));

const reportHero = document.getElementById("report-hero");
const barsContainer = document.getElementById("bars");
const detailedReport = document.getElementById("detailed-report");
const scienceContainer = document.getElementById("science");
const backButton = document.getElementById("back-button");
const resetButton = document.getElementById("reset-button");

backButton.addEventListener("click", () => {
    window.location.href = "index.html";
});

resetButton.addEventListener("click", () => {
    localStorage.removeItem("greenMirrorResponses");
    window.location.href = "index.html";
});

if (!savedResponses) {
    renderMissingDataState();
} else {
    const analysis = buildAnalysis(savedResponses);
    renderHero(analysis);
    renderBars(analysis);
    renderDetailedReport(analysis);
    renderScience(analysis);
}

function buildAnalysis(responses) {
    const results = GREEN_MIRROR_QUESTIONS.map((question) => {
        const selectedOption = question.options.find((option) => option.value === responses[question.id]) || question.options[0];

        return {
            ...question,
            selectedOption,
            score: selectedOption.score,
            scoreLabel: getScoreLabel(selectedOption.score)
        };
    });

    const totalScore = results.reduce((sum, item) => sum + item.score, 0);
    const maxScore = results.length * 2;
    const ecoScore = Math.round(((maxScore - totalScore) / maxScore) * 100);
    const averageScore = totalScore / results.length;

    const strengths = results.filter((item) => item.score === 0);
    const watchlist = results.filter((item) => item.score >= 1).sort((a, b) => b.score - a.score);
    const topConcerns = [...watchlist].sort((a, b) => b.score - a.score).slice(0, 3);

    return {
        results,
        totalScore,
        maxScore,
        ecoScore,
        averageScore,
        strengths,
        watchlist,
        topConcerns,
        impactLevel: getImpactLevel(averageScore),
        summary: getSummary(averageScore, topConcerns.length, strengths.length),
        actionPlan: buildActionPlan(results)
    };
}

function getImpactLevel(averageScore) {
    if (averageScore <= 0.4) {
        return {
            title: "Low impact",
            tone: "positive",
            description: "Your current habits suggest a relatively light environmental footprint."
        };
    }

    if (averageScore <= 1.1) {
        return {
            title: "Moderate impact",
            tone: "balanced",
            description: "You already have some strong habits, but there is still meaningful room for improvement."
        };
    }

    if (averageScore <= 1.6) {
        return {
            title: "High impact",
            tone: "warning",
            description: "Several daily habits are creating avoidable environmental pressure."
        };
    }

    return {
        title: "Very high impact",
        tone: "warning",
        description: "Your answers show repeated high-impact behaviors across multiple areas."
    };
}

function getSummary(averageScore, concernCount, strengthCount) {
    if (averageScore <= 0.4) {
        return "You are already making a number of environmentally responsible choices. The main goal now is consistency and keeping those habits in place over time.";
    }

    if (averageScore <= 1.1) {
        return `Your footprint sits in the middle range. You have ${strengthCount} solid habit${strengthCount === 1 ? "" : "s"} already working in your favor, but ${concernCount} area${concernCount === 1 ? "" : "s"} still deserve attention.`;
    }

    return `Your report points to several daily routines that can be improved without changing everything at once. If you focus on your top two or three habits first, you can make your footprint noticeably lighter.`;
}

function renderHero(analysis) {
    const concernMarkup = analysis.topConcerns.length > 0
        ? analysis.topConcerns.map((item) => `<li><strong>${item.title}:</strong> ${item.selectedOption.description}</li>`).join("")
        : "<li>Your answers did not reveal any major environmental pressure points.</li>";

    const strengthsMarkup = analysis.strengths.length > 0
        ? analysis.strengths.slice(0, 3).map((item) => `<li>${item.title}</li>`).join("")
        : "<li>No low-impact habits yet. That is okay: your action plan below shows where to start.</li>";

    reportHero.innerHTML = `
        <div class="report-hero">
            <div>
                <p class="eyebrow">Environmental report</p>
                <h1>${analysis.impactLevel.title}</h1>
                <p class="subtitle report-summary">${analysis.impactLevel.description}</p>
                <p class="report-text">${analysis.summary}</p>
            </div>

            <div class="score-card score-${analysis.impactLevel.tone}">
                <div class="score-label">Eco score</div>
                <div class="score-value">${analysis.ecoScore}<span>/100</span></div>
                <p>This score reflects how sustainable your current routine appears based on the questionnaire.</p>
            </div>
        </div>

        <div class="hero-columns">
            <div class="hero-note">
                <h3>Main concerns</h3>
                <ul>${concernMarkup}</ul>
            </div>
            <div class="hero-note">
                <h3>Strong habits</h3>
                <ul>${strengthsMarkup}</ul>
            </div>
        </div>
    `;
}

function renderBars(analysis) {
    barsContainer.innerHTML = analysis.results.map((item) => {
        const percentage = (item.score / 2) * 100;

        return `
            <div class="bar-card">
                <div class="bar-header">
                    <div>
                        <h3>${item.title}</h3>
                        <p>${item.category}</p>
                    </div>
                    <span class="severity severity-${item.score}">${item.scoreLabel}</span>
                </div>
                <div class="bar-track">
                    <div class="bar-fill fill-${item.score}" style="width: ${percentage}%;"></div>
                </div>
                <p class="bar-answer">${item.selectedOption.label}: ${item.selectedOption.description}</p>
            </div>
        `;
    }).join("");
}

function renderDetailedReport(analysis) {
    const concernCards = analysis.topConcerns.map((item) => {
        return `
            <article class="insight-card warning-card">
                <h3>${item.title}</h3>
                <p><strong>Current pattern:</strong> ${item.selectedOption.description}</p>
                <p>${buildConcernExplanation(item)}</p>
                <p><strong>Recommended next step:</strong> ${item.recommendations[0]}</p>
            </article>
        `;
    }).join("");

    const strengthCards = analysis.strengths.length > 0
        ? analysis.strengths.map((item) => {
            return `
                <article class="insight-card positive-card">
                    <h3>${item.title}</h3>
                    <p><strong>Current pattern:</strong> ${item.selectedOption.description}</p>
                    <p>This habit is already helping reduce your environmental impact. Keeping it consistent matters because long-term habits usually have more effect than one-time efforts.</p>
                    <p><strong>Keep doing this:</strong> Stay consistent and try to influence a related habit in the same category.</p>
                </article>
            `;
        }).join("")
        : `
            <article class="insight-card neutral-card">
                <h3>No low-impact habits yet</h3>
                <p>Your report does not yet show a fully low-impact category, but that is fixable. Start with the high-impact items first and return to the survey after a few habit changes.</p>
            </article>
        `;

    detailedReport.innerHTML = `
        <div class="report-section">
            <h3>Priority actions</h3>
            <div class="card-stack">${concernCards || `<article class="insight-card positive-card"><h3>Balanced routine</h3><p>You do not currently have major red flags. Focus on maintaining your habits and improving one moderate area at a time.</p></article>`}</div>
        </div>
        <div class="report-section">
            <h3>Personal action plan</h3>
            <div class="card-stack">
                ${analysis.actionPlan.map((step, index) => `
                    <article class="insight-card neutral-card">
                        <h3>Step ${index + 1}</h3>
                        <p>${step}</p>
                    </article>
                `).join("")}
            </div>
        </div>
        <div class="report-section">
            <h3>Habits already helping</h3>
            <div class="card-stack">${strengthCards}</div>
        </div>
    `;
}

function renderScience(analysis) {
    const scienceMarkup = analysis.watchlist.length > 0
        ? analysis.watchlist.map((item) => {
            return `
                <article class="science-card">
                    <h3>${item.title}</h3>
                    <p>${item.science}</p>
                    <ul>
                        <li>${item.recommendations[0]}</li>
                        <li>${item.recommendations[1]}</li>
                    </ul>
                </article>
            `;
        }).join("")
        : `
            <article class="science-card">
                <h3>Excellent baseline</h3>
                <p>Your answers suggest a low-impact lifestyle across all measured categories. The biggest opportunity now is to preserve these habits and share them with others around you.</p>
                <ul>
                    <li>Review your habits every few months to stay consistent.</li>
                    <li>Look for one new improvement area, such as water or food sourcing.</li>
                </ul>
            </article>
        `;

    scienceContainer.innerHTML = scienceMarkup;
}

function buildConcernExplanation(item) {
    if (item.score === 2) {
        return "This area stands out as a high-impact habit. Repetition is what makes it significant: small daily behaviors add up to larger annual emissions, waste, or pollution.";
    }

    return "This area is not critical yet, but it is still contributing to your footprint. Improving moderate habits early usually prevents them from becoming heavier long-term patterns.";
}

function buildActionPlan(results) {
    const sortedResults = [...results].sort((a, b) => b.score - a.score);
    const highPriority = sortedResults.filter((item) => item.score === 2);
    const moderatePriority = sortedResults.filter((item) => item.score === 1);
    const lowPriority = sortedResults.filter((item) => item.score === 0);
    const plan = [];

    highPriority.slice(0, 2).forEach((item) => {
        plan.push(`Focus first on ${item.title.toLowerCase()}. ${item.recommendations[0]} This is likely to give you one of the fastest visible improvements in your report.`);
    });

    if (moderatePriority.length > 0) {
        const item = moderatePriority[0];
        plan.push(`Strengthen ${item.title.toLowerCase()} next. ${item.recommendations[1]} Moderate-impact habits are often the easiest place to build momentum.`);
    }

    if (plan.length < 3 && lowPriority.length > 0) {
        const item = lowPriority[0];
        plan.push(`Protect one habit that is already working well: ${item.title.toLowerCase()}. Staying consistent here will make your overall footprint more stable over time.`);
    }

    if (plan.length < 3) {
        plan.push("Repeat this survey after a few weeks and compare the categories that changed. Tracking your habits over time is often more useful than trying to fix everything in one day.");
    }

    return plan.slice(0, 3);
}

function renderMissingDataState() {
    reportHero.innerHTML = `
        <div class="empty-state">
            <p class="eyebrow">No answers found</p>
            <h1>Your report is empty</h1>
            <p class="subtitle report-summary">Open the survey first, answer the questions, and then return here to generate your report.</p>
        </div>
    `;

    barsContainer.innerHTML = "";
    detailedReport.innerHTML = "";
    scienceContainer.innerHTML = `
        <article class="science-card">
            <h3>Next step</h3>
            <p>You can return to the survey now. Once you submit your answers, GreenMirror will build a full environmental report automatically.</p>
        </article>
    `;
}