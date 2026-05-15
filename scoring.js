// 1. Defining the Weight Maps Scoring Metrics
let finalSocialScore = 0
let finalEconScore = 0
let isCalculationComplete = false;
let maxSocialScore = 75;
let maxEconScore = 37;

const weightmaps = {
    w1: { "Strongly Disagree": -1, "Disagree": -0.6, "Agree": 0.6, "Strongly Agree": 1, "Neutral": 0},
    w1p: { "Strongly Disagree": 1, "Disagree": 0.6, "Agree": -0.6, "Strongly Agree": -1, "Neutral": 0},

    w2: { "Strongly Disagree": -2, "Disagree": -1.2, "Agree": 1.2, "Strongly Agree": 2, "Neutral": 0},
    w2p: { "Strongly Disagree": 2, "Disagree": 1.2, "Agree": -1.2, "Strongly Agree": -2, "Neutral": 0},

    w3: { "Strongly Disagree": -3, "Disagree": -1.8, "Agree": 1.8, "Strongly Agree": 3, "Neutral": 0},
    w3p: { "Strongly Disagree": 3, "Disagree": 1.8, "Agree": -1.8, "Strongly Agree": -3, "Neutral": 0 },

    w4: { "Strongly Disagree": -4, "Disagree": -2.4, "Agree": 2.4, "Strongly Agree": 4, "Neutral": 0 },
    w4p: { "Strongly Disagree": 4, "Disagree": 2.4, "Agree": -2.4, "Strongly Agree": -4, "Neutral": 0 },

    w5: { "Strongly Disagree": -5, "Disagree": -3, "Agree": 3, "Strongly Agree": 5, "Neutral": 0 },
    // Special map for the 6-option abortion question
    abortMap: {
        "Never Legal": 3,
        "6 weeks (Fetal Heartbeat)": 1.8,
        "12 weeks (First Trimester)": 0.6,
        "16 weeks (EU Average)": -0.6,
        "24 weeks (Fetal Viability)": -2.5,
        "No gestational limit": -4,
        "Neutral": 0
    },
    wmaxsoc: { "Strongly Disagree": -3, "Disagree": -1.8, "Agree": 3, "Strongly Agree": 5, "Neutral": 0 },
    wfisccut: { "Strongly Disagree": -2, "Disagree": -1.2, "Agree": 1.2, "Strongly Agree": 3, "Neutral": 0 },
    wcommie: { "Strongly Disagree": 1, "Disagree": 0.5, "Agree": -2, "Strongly Agree": -4, "Neutral": 0 },
    wlabour: { "Strongly Disagree": 4, "Disagree": 2, "Agree": -1.5, "Strongly Agree": -3, "Neutral": 0 },
    wrace: { "Strongly Disagree": -3, "Disagree": -1.8, "Agree": 3.6, "Strongly Agree": 6, "Neutral": 0 },
    wwest: { "Strongly Disagree": 2, "Disagree": 1.2, "Agree": -1.8, "Strongly Agree": -3, "Neutral": 0 },
    wenv: { "Strongly Disagree": 3, "Disagree": 1.8, "Agree": -2.4, "Strongly Agree": -4, "Neutral": 0 },

};

const questionConfig = {
    "q1a": "wenv",
    "q2a": "w3",
    "q3a": "w3",
    "q4a": "w3p",
    "q5a": "w5",
    "q6a": "w3p",
    "q7a": "wmaxsoc",
    "q8a": "w3",
    "q9a": "w3p",
    "q10a": "abortMap",
    "q11a": "w1p",
    "q12a": "w2p",
    "q13a": "w1p",
    "q14a": "w2p",
    "q15a": "w2",
    "q16a": "w2p",
    "q17a": "w2p",
    "q18a": "w3",
    "q19a": "w1p",
    "q20a": "w2",
    "q21a": "w2p",
    "q22a": "w2",
    "q23a": "wfisccut",
    "q24a": "wcommie",
    "q25a": "w2p",
    "q26a": "w1",
    "q27a": "w2p",
    "q28a": "w1p",
    "q29a": "w1p",
    "q30a": "w1p",
    "q31a": "w3",
    "q32a": "w3p",
    "q33a": "w1p",
    "q34a": "w1",
    "q35a": "w2",
    "q36a": "w2p",
    "q37a": "w2p",
    "q38a": "w1p",
    "q39a": "w1p",
    "q40a": "w2p",
    "q41a": "wwest",
    "q42a": "w4p",
    "q43a": "w1p",
    "q44a": "w2",
    "q45a": "wrace",
    "q46a": "w2p",
    "q47a": "w2",
    "q48a": "w2",
    "q49a": "w3p",
    "q50a": "w2"
};

function runAllCalculations() {
    const rawData = localStorage.getItem('poliTestAnswers');
    if (!rawData) return console.error("No answers found in storage.");

    const userAnswers = JSON.parse(rawData);

    finalSocialScore = calcScoreByCategory(userAnswers, "social", maxSocialScore);
    finalEconScore = calcScoreByCategory(userAnswers, "econ", maxEconScore);

    isCalculationComplete = true;

    const socialElem = document.getElementById('social-val');
    const econElem = document.getElementById('econ-val');

    if (socialElem) socialElem.innerText = finalSocialScore;
    if (econElem) econElem.innerText = finalEconScore;
}

// Simplified function to handle jumbled order by checking the category tag
function calcScoreByCategory(answers, targetCategory, maxPoints) {
    let subtotal = 0;

    // We loop through the actual questions array from questions.js
    questions.forEach(q => {
        if (q.category === targetCategory) {
            const qKey = `q${q.id}a`;
            const choice = answers[qKey];
            const mapName = questionConfig[qKey];

            if (choice && mapName) {
                const points = weightmaps[mapName][choice] || 0;
                subtotal += points;
            }
        }
    });

    return normalize10(subtotal, maxPoints);
}

function normalize10(value, max) {
    let result = (value / max) * 10;
    // Limit to range of -10 to 10
    if (result > 10) result = 10;
    if (result < -10) result = -10;
    return parseFloat(result.toFixed(2));
}










