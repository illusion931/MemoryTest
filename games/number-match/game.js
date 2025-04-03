class NumberMatchGame {
    constructor() {
        this.timeLeft = 60;
        this.timer = null;
        this.score = 0;
        this.numbers = [];
        this.selectedCells = [];
        this.isGameOver = false;

        // DOM elements
        this.elements = {
            gameInstructions: document.getElementById('gameInstructions'),
            gamePlay: document.getElementById('gamePlay'),
            startButton: document.getElementById('startGame'),
            gameBoard: document.getElementById('gameBoard'),
            timeLeft: document.getElementById('timeLeft'),
            currentScore: document.getElementById('currentScore'),
            gameOver: document.getElementById('gameOver'),
            noMatches: document.getElementById('noMatches'),
            finalScore: document.getElementById('finalScore'),
            noMatchesScore: document.getElementById('noMatchesScore'),
            restartButton: document.getElementById('restartGame'),
            playAgainButton: document.getElementById('playAgain')
        };

        // Event listeners
        this.elements.startButton.addEventListener('click', () => this.startGame());
        this.elements.restartButton.addEventListener('click', () => this.restartGame());
        this.elements.playAgainButton.addEventListener('click', () => this.restartGame());

        // Initialize translations if available
        if (typeof changeLanguage === 'function') {
            const lang = localStorage.getItem('selectedLanguage') || 'en';
            changeLanguage(lang);
        }
    }

    startGame() {
        // Hide instructions, show game
        this.elements.gameInstructions.classList.add('hidden');
        this.elements.gamePlay.classList.remove('hidden');
        this.elements.gameOver.classList.add('hidden');
        this.elements.noMatches.classList.add('hidden');

        // Reset game state
        this.timeLeft = 60;
        this.score = 0;
        this.selectedCells = [];
        this.isGameOver = false;

        // Create game board
        this.createBoard();
        this.updateUI();

        // Start timer
        this.startTimer();
    }

    createBoard() {
        // Clear game board
        this.elements.gameBoard.innerHTML = '';
        
        // Generate numbers (1-9 repeated randomly)
        const numbers = Array.from({ length: 25 }, () => Math.floor(Math.random() * 9) + 1);
        this.numbers = numbers;
        
        // Create number cells
        numbers.forEach((number, index) => {
            const cell = document.createElement('div');
            cell.className = 'number-cell';
            cell.textContent = number;
            cell.dataset.index = index;
            cell.addEventListener('click', () => this.selectCell(index));
            this.elements.gameBoard.appendChild(cell);
        });
    }

    selectCell(index) {
        if (this.isGameOver) return;
        
        const cell = this.elements.gameBoard.children[index];
        const number = this.numbers[index];
        
        // If cell is already matched or selected, ignore
        if (cell.classList.contains('matched') || cell.classList.contains('selected')) return;
        
        // Add to selected cells
        this.selectedCells.push({ index, number });
        cell.classList.add('selected');
        
        // If we have selected enough cells
        if (this.selectedCells.length >= 2) {
            // Check if all selected numbers match
            const firstNumber = this.selectedCells[0].number;
            const allMatch = this.selectedCells.every(cell => cell.number === firstNumber);
            
            if (allMatch) {
                // Match found - update score and remove cells
                this.score += this.selectedCells.length;
                this.selectedCells.forEach(cell => {
                    const element = this.elements.gameBoard.children[cell.index];
                    element.classList.remove('selected');
                    element.classList.add('matched');
                    this.numbers[cell.index] = null;
                });
                
                // Check if any matches remain
                if (!this.hasRemainingMatches()) {
                    this.endGameNoMatches();
                }
            } else {
                // No match - deselect cells
                setTimeout(() => {
                    this.selectedCells.forEach(cell => {
                        const element = this.elements.gameBoard.children[cell.index];
                        element.classList.remove('selected');
                    });
                }, 500);
            }
            
            // Clear selected cells
            this.selectedCells = [];
            this.updateUI();
        }
    }

    hasRemainingMatches() {
        const remainingNumbers = this.numbers.filter(n => n !== null);
        const counts = {};
        
        // Count occurrences of each number
        remainingNumbers.forEach(num => {
            counts[num] = (counts[num] || 0) + 1;
        });
        
        // Check if any number appears more than once
        return Object.values(counts).some(count => count >= 2);
    }

    startTimer() {
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateUI();
            
            if (this.timeLeft <= 0) {
                this.endGame();
            }
        }, 1000);
    }

    updateUI() {
        // Update timer and score
        this.elements.timeLeft.textContent = this.timeLeft;
        this.elements.currentScore.textContent = this.score;
        this.elements.finalScore.textContent = this.score;
        this.elements.noMatchesScore.textContent = this.score;
    }

    endGame() {
        clearInterval(this.timer);
        this.isGameOver = true;
        
        // Show game over screen
        this.elements.gamePlay.classList.add('hidden');
        this.elements.gameOver.classList.remove('hidden');
    }

    endGameNoMatches() {
        clearInterval(this.timer);
        this.isGameOver = true;
        
        // Show no matches screen
        this.elements.gamePlay.classList.add('hidden');
        this.elements.noMatches.classList.remove('hidden');
    }

    restartGame() {
        // Show instructions
        this.elements.gameInstructions.classList.remove('hidden');
        this.elements.gamePlay.classList.add('hidden');
        this.elements.gameOver.classList.add('hidden');
        this.elements.noMatches.classList.add('hidden');
    }
}

// Start game when page loads
window.addEventListener('load', () => {
    new NumberMatchGame();
});
