# 🌍 GreenMirror

## 📌 Overview
GreenMirror is an interactive web application that helps users understand their environmental footprint through a guided habit survey.  
It collects answers about daily choices, analyzes them with a scoring system, and generates a personalized environmental report with practical recommendations, science-based explanations, and a simple action plan.

---

## 🌍 Problem
Many people care about climate change and sustainability, but they do not always know how their everyday habits contribute to environmental impact.  
Because of that, it can be difficult to identify which behaviors matter most and what changes are realistic to start with.

---

## 💡 Solution
GreenMirror addresses this by:
- Asking users clear questions about daily environmental habits  
- Scoring answers across multiple sustainability categories  
- Detecting strengths and high-impact behaviors  
- Generating a more complete and personalized report  
- Providing practical actions the user can apply in daily life  

---

## ⚙️ How It Works
1. The user opens the survey in `index.html`  
2. Questions are loaded dynamically from `questions.js`  
3. The user answers the habit survey  
4. `script.js` stores the responses in the browser using `localStorage`  
5. The app redirects to `results.html`  
6. `results.js` reads the saved responses and analyzes them  
7. The system generates a report that includes:  
   - An overall environmental impact level  
   - An eco score out of 100  
   - A category-by-category impact breakdown  
   - Main concerns and positive habits  
   - Science-based explanations  
   - Personalized recommendations and an action plan  

---

## ✨ Key Features
- Interactive environmental habit survey
- Fully dynamic question rendering
- Personalized environmental report
- Eco score calculated from user responses
- Detailed impact breakdown by category
- Science-based explanations for each habit
- Actionable recommendations and action plan
- Responsive and user-friendly interface

---

## 🛠️ Technologies Used
- HTML5  
- CSS3  
- JavaScript (Vanilla)
- Browser localStorage for temporary data persistence


---

## 📋 Requirements
- A modern web browser such as Chrome, Edge, Firefox, or Safari

---

## ⚙️ Installation
1. Clone the repository
2. Open the project folder
3. Run the app by opening index.html in your browser

---

## 🧩 Project Structure
```text
greenmirror/
├── index.html      # Main survey interface
├── questions.js    # Question bank, scoring rules, and recommendations
├── script.js       # Renders questions and stores user responses
├── results.html    # Results page structure
├── results.js      # Builds the analysis and generates the final report
└── style.css       # Visual design, layout, and responsive styling
