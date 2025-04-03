class CodeBreakerGame {
    constructor() {
        this.secretCode = '';
        this.attempts = 10;
        this.guesses = [];
        this.isGameOver = false;

        // DOM elements
        this.elements = {
            gameInstructions: document.getElementById('gameInstructions'),
            gamePlay: document.getElementById('gamePlay'),
            startButton: document.getElementById('startGame'),
            guessInput: document.getElementById('guessInput'),
            submitButton: document.getElementById('submitGuess'),
            attemptsLeft: document.getElementById('attemptsLeft'),
            guessHistory: document.getElementById('guessHistory'),
            gameWon: document.getElementById('gameWon'),
            gameLost: document.getElementById('gameLost'),
            finalAttempts: document.getElementById('finalAttempts'),
            secretCode: document.getElementById('secretCode'),
            playAgain: document.getElementById('playAgain'),
            tryAgain: document.getElementById('tryAgain')
        };

        // Event listeners
        this.elements.startButton.addEventListener('click', () => this.startGame());
        this.elements.submitButton.addEventListener('click', () => this.makeGuess());
        this.elements.playAgain.addEventListener('click', () => this.restartGame());
        this.elements.tryAgain.addEventListener('click', () => this.restartGame());
        
        // Input validation
        this.elements.guessInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 4);
        });
        
        this.elements.guessInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.makeGuess();
            }
        });

        // Initialize translations if available
        if (typeof changeLanguage === 'function') {
            const lang = localStorage.getItem('selectedLanguage') || 'en';
            changeLanguage(lang);
        }
    }

    generateSecretCode() {
        let numbers = Array.from({length: 10}, (_, i) => i);
        let code = '';
        for (let i = 0; i < 4; i++) {
            const index = Math.floor(Math.random() * numbers.length);
            code += numbers[index];
            numbers.splice(index, 1);
        }
        return code;
    }

    startGame() {
        // Hide instructions, show game
        this.elements.gameInstructions.classList.add('hidden');
        this.elements.gamePlay.classList.remove('hidden');
        this.elements.gameWon.classList.add('hidden');
        this.elements.gameLost.classList.add('hidden');

        // Reset game state
        this.secretCode = this.generateSecretCode();
        this.attempts = 10;
        this.guesses = [];
        this.isGameOver = false;

        // Reset UI
        this.elements.guessHistory.innerHTML = '';
        this.elements.guessInput.value = '';
        this.elements.attemptsLeft.textContent = this.attempts;
        this.elements.guessInput.focus();
    }

    evaluateGuess(guess) {
        let a = 0; // Correct number and position
        let b = 0; // Correct number, wrong position
        
        // Count exact matches (A)
        for (let i = 0; i < 4; i++) {
            if (guess[i] === this.secretCode[i]) {
                a++;
            }
        }
        
        // Count number matches (B)
        let secretCount = new Array(10).fill(0);
        let guessCount = new Array(10).fill(0);
        
        for (let i = 0; i < 4; i++) {
            if (guess[i] !== this.secretCode[i]) {
                secretCount[this.secretCode[i]]++;
                guessCount[guess[i]]++;
            }
        }
        
        // Count common digits
        for (let i = 0; i < 10; i++) {
            b += Math.min(secretCount[i], guessCount[i]);
        }
        
        return `${a}A${b}B`;
    }

    makeGuess() {
        if (this.isGameOver) return;
        
        const guess = this.elements.guessInput.value;
        
        // Validate input
        if (guess.length !== 4) {
            alert('Please enter exactly 4 digits');
            return;
        }
        
        // Decrease attempts
        this.attempts--;
        this.elements.attemptsLeft.textContent = this.attempts;
        
        // Evaluate guess
        const result = this.evaluateGuess(guess);
        
        // Add to history
        const guessItem = document.createElement('div');
        guessItem.className = 'guess-item';
        guessItem.innerHTML = `
            <span class="guess-number">${guess}</span>
            <span class="guess-result">${result}</span>
        `;
        this.elements.guessHistory.insertBefore(guessItem, this.elements.guessHistory.firstChild);
        
        // Clear input
        this.elements.guessInput.value = '';
        this.elements.guessInput.focus();
        
        // Check win/lose conditions
        if (result === '4A0B') {
            this.winGame();
        } else if (this.attempts === 0) {
            this.loseGame();
        }
    }

    winGame() {
        this.isGameOver = true;
        this.elements.gamePlay.classList.add('hidden');
        this.elements.gameWon.classList.remove('hidden');
        this.elements.finalAttempts.textContent = 10 - this.attempts;
    }

    loseGame() {
        this.isGameOver = true;
        this.elements.gamePlay.classList.add('hidden');
        this.elements.gameLost.classList.remove('hidden');
        this.elements.secretCode.textContent = this.secretCode;
    }

    restartGame() {
        // Show instructions
        this.elements.gameInstructions.classList.remove('hidden');
        this.elements.gamePlay.classList.add('hidden');
        this.elements.gameWon.classList.add('hidden');
        this.elements.gameLost.classList.add('hidden');
    }
}

// Start game when page loads
window.addEventListener('load', () => {
    new CodeBreakerGame();
});
