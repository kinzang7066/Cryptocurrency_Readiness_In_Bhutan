// DrukShift â€” Cryptocurrency Readiness in Bhutan
// JavaScript â€” Modal and Interaction Functions

// Scam Vulnerability Story
window.openScamModal = function() {
    const overlay = document.getElementById('scamModalOverlay');
    const body = document.getElementById('scamModalBody');
    if (!body.querySelector('tableau-viz')) {
        const viz = document.createElement("tableau-viz");
        viz.setAttribute("src", "https://public.tableau.com/views/Tableaucryptoreadiness/Story4");
        viz.setAttribute("width", "100%");
        viz.setAttribute("height", "900");
        viz.setAttribute("hide-tabs", "false");
        viz.setAttribute("toolbar", "bottom");
        body.appendChild(viz);
    }
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    setTimeout(() => overlay.classList.add('active'), 10);
}

window.closeScamModal = function() {
    const overlay = document.getElementById('scamModalOverlay');
    overlay.classList.remove('active');
    setTimeout(() => {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    }, 300);
}

window.handleScamOverlayClick = function(e) {
    if (e.target === document.getElementById('scamModalOverlay')) closeScamModal();
}

// Solutions Story
window.openSolutionsModal = function() {
    const overlay = document.getElementById('solutionsModalOverlay');
    const body = document.getElementById('solutionsModalBody');
    if (!body.querySelector('tableau-viz')) {
        const viz = document.createElement("tableau-viz");
        viz.setAttribute("src", "https://public.tableau.com/views/Tableaucryptoreadiness/Story4");
        viz.setAttribute("width", "100%");
        viz.setAttribute("height", "900");
        viz.setAttribute("hide-tabs", "false");
        viz.setAttribute("toolbar", "bottom");
        body.appendChild(viz);
    }
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    setTimeout(() => overlay.classList.add('active'), 10);
}

window.closeSolutionsModal = function() {
    const overlay = document.getElementById('solutionsModalOverlay');
    overlay.classList.remove('active');
    setTimeout(() => {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    }, 300);
}

window.handleSolutionsOverlayClick = function(e) {
    if (e.target === document.getElementById('solutionsModalOverlay')) closeSolutionsModal();
}

// GNH Story
window.openGNHModal = function() {
    const overlay = document.getElementById('gnhModalOverlay');
    const body = document.getElementById('gnhModalBody');
    if (!body.querySelector('tableau-viz')) {
        const viz = document.createElement("tableau-viz");
        viz.setAttribute("src", "https://public.tableau.com/views/Tableaucryptoreadiness/Story2");
        viz.setAttribute("width", "100%");
        viz.setAttribute("height", "900");
        viz.setAttribute("hide-tabs", "false");
        viz.setAttribute("toolbar", "bottom");
        body.appendChild(viz);
    }
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    setTimeout(() => overlay.classList.add('active'), 10);
}

window.closeGNHModal = function() {
    const overlay = document.getElementById('gnhModalOverlay');
    overlay.classList.remove('active');
    setTimeout(() => {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    }, 300);
}

window.handleGNHOverlayClick = function(e) {
    if (e.target === document.getElementById('gnhModalOverlay')) closeGNHModal();
}

// Readiness Story
window.openReadinessModal = function() {
    const overlay = document.getElementById('readinessModalOverlay');
    const body = document.getElementById('readinessModalBody');
    if (!body.querySelector('tableau-viz')) {
        const viz = document.createElement("tableau-viz");
        viz.setAttribute("src", "https://public.tableau.com/views/Tableaucryptoreadiness/Readinesss");
        viz.setAttribute("width", "100%");
        viz.setAttribute("height", "900");
        viz.setAttribute("hide-tabs", "false");
        viz.setAttribute("toolbar", "bottom");
        body.appendChild(viz);
    }
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    setTimeout(() => overlay.classList.add('active'), 10);
}

window.closeReadinessModal = function() {
    const overlay = document.getElementById('readinessModalOverlay');
    overlay.classList.remove('active');
    setTimeout(() => {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    }, 300);
}

window.handleReadinessOverlayClick = function(e) {
    if (e.target === document.getElementById('readinessModalOverlay')) closeReadinessModal();
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeGNHModal();
        closeReadinessModal();
        closeScamModal();
        closeSolutionsModal();
    }
});

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// INLINE READINESS QUIZ â€” Likert Scale 1-10
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

const qQuestions = [
    {
        text: "How familiar are you with what cryptocurrency is and how it works?",
        area: "Knowledge"
    },
    {
        text: "How confident are you in your ability to use a crypto wallet or exchange app?",
        area: "Technical Skill"
    },
    {
        text: "How much do you trust cryptocurrency as a reliable form of digital money?",
        area: "Trust"
    },
    {
        text: "How aware are you of the risks and scams associated with cryptocurrency?",
        area: "Security Awareness"
    },
    {
        text: "How ready do you feel personally to start investing or transacting with cryptocurrency today?",
        area: "Personal Readiness"
    },
    {
        text: "How stable and reliable is your internet connection for daily digital activities?",
        area: "Infrastructure"
    },
    {
        text: "How comfortable are you with digital financial tools such as mobile banking or e-wallets?",
        area: "Digital Comfort"
    },
    {
        text: "How informed are you about cryptocurrency regulations and laws in Bhutan?",
        area: "Regulatory Awareness"
    },
    {
        text: "How willing are you to adopt cryptocurrency if it becomes safe and widely accepted in Bhutan?",
        area: "Adoption Willingness"
    },
    {
        text: "How clearly do you understand how cryptocurrency aligns with Bhutan's GNH values and way of life?",
        area: "GNH Alignment"
    }
];

const qAreaColors = {
    'Knowledge': '#2a6aad',
    'Technical Skill': '#2a9d8f',
    'Trust': '#e9c46a',
    'Security Awareness': '#e63946',
    'Personal Readiness': '#9b5de5',
    'Infrastructure': '#f4a261',
    'Digital Comfort': '#2a9d8f',
    'Regulatory Awareness': '#d4537e',
    'Adoption Willingness': '#2a9d8f',
    'GNH Alignment': '#e9c46a'
};

let qCurrent = 0;
let qAnswers = new Array(qQuestions.length).fill(null);

function qRender() {
    const q = qQuestions[qCurrent];
    const pct = Math.round((qCurrent / qQuestions.length) * 100);

    document.getElementById('qProgressText').textContent = `Question ${qCurrent + 1} of ${qQuestions.length}`;
    document.getElementById('qProgressPct').textContent = pct + '%';
    document.getElementById('qProgressFill').style.width = pct + '%';
    document.getElementById('qDomain').textContent = q.area;
    document.getElementById('qText').textContent = q.text;

    const row = document.getElementById('qLikertRow');
    row.innerHTML = '';
    for (let i = 1; i <= 10; i++) {
        const btn = document.createElement('button');
        btn.className = 'q-likert-btn' + (qAnswers[qCurrent] === i ? ' selected' : '');
        btn.textContent = i;
        btn.onclick = () => qSelect(i);
        row.appendChild(btn);
    }

    document.getElementById('qPrevBtn').style.visibility = qCurrent > 0 ? 'visible' : 'hidden';
    document.getElementById('qNextBtn').disabled = qAnswers[qCurrent] === null;
    document.getElementById('qNextBtn').textContent = qCurrent === qQuestions.length - 1 ? 'See my results â†’' : 'Next â†’';
}

function qSelect(val) {
    qAnswers[qCurrent] = val;
    document.querySelectorAll('.q-likert-btn').forEach((b, i) => {
        b.className = 'q-likert-btn' + (i + 1 === val ? ' selected' : '');
    });
    document.getElementById('qNextBtn').disabled = false;
}

function qNext() {
    if (qCurrent < qQuestions.length - 1) {
        qCurrent++;
        qRender();
    } else {
        qShowResults();
    }
}

function qPrev() {
    if (qCurrent > 0) { qCurrent--; qRender(); }
}

function qShowResults() {
    const total = qAnswers.reduce((a, b) => a + b, 0);
    const score = Math.round((total / 100) * 100);
    const diff = score - 80;

    document.getElementById('quizWrap').style.display = 'none';
    document.getElementById('qResultWrap').style.display = 'block';
    document.getElementById('qScoreNum').textContent = score;
    document.getElementById('qYourPct').textContent = score + '%';
    document.getElementById('qVsAvg').textContent = (diff >= 0 ? '+' : '') + diff + '%';

    const circle = document.getElementById('qScoreCircle');
    let title, desc;
    if (score >= 80) {
        circle.className = 'q-score-circle high';
        title = 'You are highly ready!';
        desc = 'Your readiness is at or above the Bhutan average of 80%. You have strong knowledge, confidence and willingness to adopt cryptocurrency safely.';
    } else if (score >= 60) {
        circle.className = 'q-score-circle mid';
        title = 'You are somewhat ready';
        desc = 'You have a solid foundation but some areas need strengthening. Targeted education and practice will help you reach full readiness.';
    } else {
        circle.className = 'q-score-circle low';
        title = 'You need more support';
        desc = 'Your readiness is below the Bhutan average. This is common and fixable â€” with the right education, awareness and support you can improve significantly.';
    }

    document.getElementById('qResultTitle').textContent = title;
    document.getElementById('qResultDesc').textContent = desc;

    const domainContainer = document.getElementById('qDomainBars');
    domainContainer.innerHTML = '<div style="font-size:13px;font-weight:600;color:var(--navy);margin-bottom:12px;">Your score by readiness area</div>';
    qQuestions.forEach((q, i) => {
        const pct = Math.round((qAnswers[i] / 10) * 100);
        const color = qAreaColors[q.area] || '#888';
        domainContainer.innerHTML += `
            <div class="q-domain-row">
                <div class="q-domain-label"><span>${q.area}</span><span>${qAnswers[i]}/10</span></div>
                <div class="q-domain-track"><div class="q-domain-fill" style="width:${pct}%;background:${color}"></div></div>
            </div>`;
    });

    const recos = [];
    if (qAnswers[0] < 6) recos.push('Learn crypto basics â€” understand what Bitcoin and blockchain actually mean before investing');
    if (qAnswers[1] < 6) recos.push('Practice with a small demo wallet app to build your technical confidence before using real money');
    if (qAnswers[3] < 6) recos.push('Study common crypto scams â€” high promises, fake apps and phishing are the biggest threats in Bhutan');
    if (qAnswers[5] < 6) recos.push('Improve your internet access â€” reliable connectivity is essential for safe crypto transactions');
    if (qAnswers[7] < 6) recos.push('Learn about Royal Monetary Authority of Bhutan guidelines on digital finance and cryptocurrency');
    if (recos.length === 0) recos.push('You are well prepared â€” stay updated on Bhutan crypto regulations and new developments');

    document.getElementById('qRecoList').innerHTML = recos
        .map(r => `<div class="q-reco-item"><div class="q-reco-dot"></div><span>${r}</span></div>`)
        .join('');

    document.getElementById('quiz').scrollIntoView({ behavior: 'smooth' });
}

function qRestart() {
    qCurrent = 0;
    qAnswers = new Array(qQuestions.length).fill(null);
    document.getElementById('qResultWrap').style.display = 'none';
    document.getElementById('quizWrap').style.display = 'block';
    qRender();
}

qRender();