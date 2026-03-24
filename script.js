// DrukShift — Cryptocurrency Readiness in Bhutan
// JavaScript — Modal and Interaction Functions

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

// Readiness Story - how can readiness increase over time.
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