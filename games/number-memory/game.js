let currentLevel = 1;
let currentSequence = [];
let playerInput = '';
let maxLevel = 100;

function startGame() {
    document.querySelector('.welcome-screen').style.display = 'none';
    document.querySelector('.game-screen').style.display = 'block';
    document.querySelector('.game-over').style.display = 'none';
    currentLevel = 1;
    updateProgressBar();
    startLevel();
}

function startLevel() {
    document.getElementById('currentLevel').textContent = currentLevel;
    generateSequence();
    showSequence();
}

function generateSequence() {
    currentSequence = [];
    const length = Math.min(currentLevel + 2, 10); // 每关数字长度递增，最多10位
    for (let i = 0; i < length; i++) {
        currentSequence.push(Math.floor(Math.random() * 10));
    }
}

function showSequence() {
    const display = document.querySelector('.number-display');
    display.textContent = currentSequence.join(' ');
    
    let countdown = 3;
    document.querySelector('.countdown').textContent = countdown;
    
    const timer = setInterval(() => {
        countdown--;
        document.querySelector('.countdown').textContent = countdown;
        
        if (countdown === 0) {
            clearInterval(timer);
            display.textContent = '';
            document.querySelector('.countdown').textContent = '';
            enableNumberPad();
        }
    }, 1000);
}

function enableNumberPad() {
    const buttons = document.querySelectorAll('.number-btn');
    buttons.forEach(btn => btn.disabled = false);
}

function inputNumber(num) {
    playerInput += num;
    document.querySelector('.player-input').textContent = playerInput;
}

function clearInput() {
    playerInput = playerInput.slice(0, -1);
    document.querySelector('.player-input').textContent = playerInput;
}

function submitAnswer() {
    if (playerInput === currentSequence.join('')) {
        if (currentLevel === maxLevel) {
            gameOver(true);
        } else {
            currentLevel++;
            updateProgressBar();
            playerInput = '';
            document.querySelector('.player-input').textContent = '';
            startLevel();
        }
    } else {
        gameOver(false);
    }
}

function updateProgressBar() {
    const progress = (currentLevel / maxLevel) * 100;
    document.querySelector('.progress-bar').style.width = `${progress}%`;
}

function gameOver(won) {
    document.querySelector('.game-screen').style.display = 'none';
    document.querySelector('.game-over').style.display = 'block';
    
    const score = currentLevel - 1;
    document.getElementById('finalScore').textContent = score;
    
    const message = document.querySelector('.score-message');
    if (won) {
        message.textContent = 'Perfect! You completed all levels!';
        message.style.color = 'var(--success)';
    } else {
        if (score >= 80) {
            message.textContent = 'Excellent! Your memory is amazing!';
            message.style.color = 'var(--success)';
        } else if (score >= 60) {
            message.textContent = 'Good job! Keep practicing!';
            message.style.color = 'var(--primary)';
        } else {
            message.textContent = 'Keep trying to improve your score!';
            message.style.color = 'var(--secondary)';
        }
    }
}

function restartGame() {
    playerInput = '';
    currentSequence = [];
    startGame();
}
