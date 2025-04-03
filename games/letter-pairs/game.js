class LetterPairsGame {
    constructor() {
        this.timeLeft = 60;
        this.timer = null;
        this.cards = [];
        this.flippedCards = [];
        this.matchedPairs = 0;
        this.totalPairs = 18;
        this.isGameOver = false;

        // DOM elements
        this.elements = {
            gameInstructions: document.getElementById('gameInstructions'),
            gamePlay: document.getElementById('gamePlay'),
            startButton: document.getElementById('startGame'),
            gameBoard: document.getElementById('gameBoard'),
            timeLeft: document.getElementById('timeLeft'),
            pairsLeft: document.getElementById('pairsLeft'),
            gameOver: document.getElementById('gameOver'),
            gameWon: document.getElementById('gameWon'),
            finalScore: document.getElementById('finalScore'),
            finalTime: document.getElementById('finalTime'),
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
        this.elements.gameWon.classList.add('hidden');

        // Reset game state
        this.timeLeft = 60;
        this.matchedPairs = 0;
        this.flippedCards = [];
        this.isGameOver = false;

        // Create and shuffle cards
        this.createCards();
        this.updateUI();

        // Start timer
        this.startTimer();
    }

    createCards() {
        // Clear game board
        this.elements.gameBoard.innerHTML = '';
        
        // Create pairs of letters
        const letters = Array.from({ length: 18 }, (_, i) => 
            String.fromCharCode(65 + i)
        );
        this.cards = [...letters, ...letters].map(letter => ({
            letter,
            isFlipped: false,
            isMatched: false
        }));
        
        // Shuffle cards
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
        
        // Create card elements
        this.cards.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.dataset.index = index;
            cardElement.addEventListener('click', () => this.flipCard(index));
            this.elements.gameBoard.appendChild(cardElement);
        });
    }

    flipCard(index) {
        const card = this.cards[index];
        
        // Ignore if game is over or card is already flipped/matched
        if (this.isGameOver || card.isFlipped || card.isMatched) return;
        
        // Ignore if two cards are already flipped
        if (this.flippedCards.length === 2) return;
        
        // Flip card
        card.isFlipped = true;
        this.flippedCards.push(index);
        
        // Update UI
        this.updateUI();
        
        // Check for match if two cards are flipped
        if (this.flippedCards.length === 2) {
            const [index1, index2] = this.flippedCards;
            const card1 = this.cards[index1];
            const card2 = this.cards[index2];
            
            if (card1.letter === card2.letter) {
                // Match found
                card1.isMatched = true;
                card2.isMatched = true;
                this.matchedPairs++;
                this.flippedCards = [];
                
                if (this.matchedPairs === this.totalPairs) {
                    this.winGame();
                }
            } else {
                // No match, flip cards back after delay
                setTimeout(() => {
                    card1.isFlipped = false;
                    card2.isFlipped = false;
                    this.flippedCards = [];
                    this.updateUI();
                }, 1000);
            }
        }
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
        // Update timer and pairs left
        this.elements.timeLeft.textContent = this.timeLeft;
        this.elements.pairsLeft.textContent = this.totalPairs - this.matchedPairs;
        
        // Update cards
        this.cards.forEach((card, index) => {
            const cardElement = this.elements.gameBoard.children[index];
            cardElement.textContent = card.isFlipped || card.isMatched ? card.letter : '';
            cardElement.className = 'card' + 
                (card.isFlipped ? ' flipped' : '') + 
                (card.isMatched ? ' matched' : '');
        });
    }

    endGame() {
        clearInterval(this.timer);
        this.isGameOver = true;
        
        // Show game over screen
        this.elements.gamePlay.classList.add('hidden');
        this.elements.gameOver.classList.remove('hidden');
        this.elements.finalScore.textContent = this.matchedPairs;
    }

    winGame() {
        clearInterval(this.timer);
        this.isGameOver = true;
        
        // Show win screen
        this.elements.gamePlay.classList.add('hidden');
        this.elements.gameWon.classList.remove('hidden');
        this.elements.finalTime.textContent = 60 - this.timeLeft;
    }

    restartGame() {
        // Show instructions
        this.elements.gameInstructions.classList.remove('hidden');
        this.elements.gamePlay.classList.add('hidden');
        this.elements.gameOver.classList.add('hidden');
        this.elements.gameWon.classList.add('hidden');
    }
}

// Start game when page loads
window.addEventListener('load', () => {
    new LetterPairsGame();
});
