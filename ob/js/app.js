let currentMood = 'romantic';
let isSpinning = false;

// Initialize Icons
lucide.createIcons();

function setMood(mood) {
    if (isSpinning) return;
    
    currentMood = mood;
    
    // Update Buttons UI
    document.querySelectorAll('.mood-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-primary', 'border-primary', 'bg-red-500', 'border-red-500', 'bg-purple-500', 'border-purple-500');
        btn.classList.add('bg-white/10', 'border-white/20');
    });
    
    const activeBtn = event.target;
    activeBtn.classList.remove('bg-white/10', 'border-white/20');
    
    if(mood === 'romantic') activeBtn.classList.add('bg-primary', 'border-primary');
    if(mood === 'spicy') activeBtn.classList.add('bg-red-500', 'border-red-500');
    if(mood === 'fun') activeBtn.classList.add('bg-purple-500', 'border-purple-500');
}

function spinWheel() {
    if (isSpinning) return;
    isSpinning = true;
    
    const wheel = document.getElementById('wheel');
    const btn = document.getElementById('spin-btn');
    
    // Disable button
    btn.classList.add('opacity-50', 'cursor-not-allowed');
    btn.innerHTML = 'GIRANDO...';
    
    // Random rotation (between 5 and 10 full spins + random offset)
    const spins = 5 + Math.random() * 5;
    const degrees = spins * 360 + Math.floor(Math.random() * 360);
    
    wheel.style.transform = `rotate(${degrees}deg)`;
    
    // Wait for animation to finish
    setTimeout(() => {
        showResult();
        isSpinning = false;
        
        // Reset wheel visual (keep rotation but allow next spin to add to it or reset)
        // For simplicity in this static version, we just leave it rotated.
        
        // Reset button
        btn.classList.remove('opacity-50', 'cursor-not-allowed');
        btn.innerHTML = `
            <i data-lucide="refresh-cw" class="w-6 h-6 group-hover:rotate-180 transition-transform duration-700"></i>
            GIRAR AGORA
        `;
        lucide.createIcons();
    }, 4000);
}

function showResult() {
    // Pick random challenge from current mood
    const pool = challenges[currentMood];
    const result = pool[Math.floor(Math.random() * pool.length)];
    
    // Update Modal Content
    document.getElementById('result-title').textContent = result.title;
    document.getElementById('result-desc').textContent = result.desc;
    
    // Update Icon
    const iconContainer = document.getElementById('result-icon').parentElement;
    iconContainer.innerHTML = `<i data-lucide="${result.icon}" class="w-8 h-8"></i>`;
    lucide.createIcons();
    
    // Show Modal
    const modal = document.getElementById('result-modal');
    modal.classList.add('modal-open');
    
    createConfetti();
}

function closeModal() {
    const modal = document.getElementById('result-modal');
    modal.classList.remove('modal-open');
    
    // Clear confetti
    document.getElementById('confetti').innerHTML = '';
}

function spinAgain() {
    closeModal();
    spinWheel();
}

function createConfetti() {
    const container = document.getElementById('confetti');
    const colors = ['#FF4D80', '#8B5CF6', '#F43F5E', '#FFD700', '#FFFFFF'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-piece');
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animation = `confettiDrop ${1 + Math.random() * 2}s linear forwards`;
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        container.appendChild(confetti);
    }
}
