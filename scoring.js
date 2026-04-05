// 1. Defining the Weight Maps Scoring Metrics
let finalSocialScore = 0
let finalEconScore = 0
let isCalculationComplete = false;
let socialIndexEnd = 35;
let econIndexStart = 36;
let econIndexEnd = 48;
let maxSocialScore = 70;
let maxEconScore = 36;

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
        "12 weeks (First Trimester)": 0,
        "16 weeks (EU Average)": -1.8,
        "24 weeks (Fetal Viability)": -2.5,
        "No gestational limit": -3,
        "Neutral": 0
    }
};

const questionConfig = {
    "q1a": "w2p",
    "q2a": "w2p",
    "q3a": "w2p",
    "q4a": "w3",
    "q5a": "w1p",
    "q6a": "w2",
    "q7a": "w2p",
    "q8a": "w3",
    "q9a": "w3p",
    "q10a": "w1p",
    "q11a": "w1p",
    "q12a": "w1p",
    "q13a": "w2",
    "q14a": "abortMap",
    "q15a": "w1p",
    "q16a": "w1p",
    "q17a": "w1p",
    "q18a": "w2p",
    "q19a": "w2p",
    "q20a": "w3",
    "q21a": "w2",
    "q22a": "w3p",
    "q23a": "w2",
    "q24a": "w2p",
    "q25a": "w1p",
    "q26a": "w1p",
    "q27a": "w2",
    "q28a": "w3p",
    "q29a": "w1p",
    "q30a": "w2",
    "q31a": "w1p",
    "q32a": "w4p",
    "q33a": "w2",
    "q34a": "w4p",
    "q35a": "w2",
    // ECON
    "q36a": "w3p",
    "q37a": "w2p",
    "q38a": "w1p",
    "q39a": "w5",
    "q40a": "w3",
    "q41a": "w3",
    "q42a": "w1p",
    "q43a": "w3p",
    "q44a": "w2p",
    "q45a": "w1",
    "q46a": "w2",
    "q47a": "w2",
    "q48a": "w3p",
    "q49a": "w2",
    "q50a": "w3p",
};

function runAllCalculations() {
    const rawData = localStorage.getItem('poliTestAnswers');
    if (!rawData) return console.error("No answers found in storage.");

    const userAnswers = JSON.parse(rawData);

    // Calculate scores and store them in the global variables
    finalSocialScore = calcSocialScore(userAnswers);
    finalEconScore = calcEconScore(userAnswers);

    isCalculationComplete = true;

    // Update the HTML text
    const socialElem = document.getElementById('social-val');
    const econElem = document.getElementById('econ-val');

    if (socialElem) socialElem.innerText = finalSocialScore;
    if (econElem) econElem.innerText = finalEconScore;

    console.log("UI Updated with scores:", finalSocialScore, finalEconScore);
} // Fixed: Removed the extra brace that was here

function calcSocialScore(answers) {
    let subtotal = 0;
    for (let i = 1; i <= 35; i++) {
        const qKey = `q${i}a`;
        const choice = answers[qKey];
        const mapName = questionConfig[qKey];

        if (choice && mapName) {
            // Added '|| 0' to prevent NaN if a choice doesn't match the map
            const points = weightmaps[mapName][choice] || 0;
            subtotal += points;

        }
    }
    console.log("Subtotal before normalization:", subtotal)
    return normalize10(subtotal, maxSocialScore);
}

function calcEconScore(answers) {
    let subtotal = 0;
    for (let i = 36; i <= 50; i++) {
        const qKey = `q${i}a`;
        const choice = answers[qKey];
        const mapName = questionConfig[qKey];

        if (choice && mapName) {
            // Added '|| 0' to prevent NaN
            const points = weightmaps[mapName][choice] || 0;
            subtotal += points;

        }
    }
    console.log("Econ Subtotal before normalization:", subtotal)

    return normalize10(subtotal, maxEconScore);
}

function normalize10(value, max) {
    return parseFloat(((value / max) * 10).toFixed(2));
}











