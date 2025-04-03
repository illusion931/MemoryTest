class WordChainGame {
    constructor() {
        this.currentLevel = 1;
        this.score = 0;
        this.timeLeft = 15;
        this.timer = null;
        this.currentWord = '';
        this.usedWords = new Set();
        this.isGameOver = false;

        // DOM elements
        this.elements = {
            gameInstructions: document.getElementById('gameInstructions'),
            gamePlay: document.getElementById('gamePlay'),
            startButton: document.getElementById('startGame'),
            currentLevel: document.getElementById('currentLevel'),
            currentScore: document.getElementById('currentScore'),
            timeLeft: document.getElementById('timeLeft'),
            currentWord: document.getElementById('currentWord'),
            wordInput: document.getElementById('wordInput'),
            submitButton: document.getElementById('submitWord'),
            usedWords: document.getElementById('usedWords'),
            gameOver: document.getElementById('gameOver'),
            finalScore: document.getElementById('finalScore'),
            scoreComment: document.getElementById('scoreComment'),
            restartButton: document.getElementById('restartGame'),
            errorMessage: document.getElementById('errorMessage')
        };

        // Event listeners
        this.elements.startButton.addEventListener('click', () => this.startGame());
        this.elements.submitButton.addEventListener('click', () => this.checkWord());
        this.elements.wordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.checkWord();
        });
        this.elements.restartButton.addEventListener('click', () => this.restartGame());

        // Initialize translations if available
        if (typeof changeLanguage === 'function') {
            const lang = localStorage.getItem('selectedLanguage') || 'en';
            changeLanguage(lang);
        }
    }

    startGame() {
        this.currentLevel = 1;
        this.score = 0;
        this.usedWords.clear();
        this.isGameOver = false;
        
        // Hide instructions, show game
        this.elements.gameInstructions.classList.add('hidden');
        this.elements.gamePlay.classList.remove('hidden');
        this.elements.gameOver.classList.add('hidden');
        
        // Update UI
        this.updateUI();
        
        // Get first word
        this.currentWord = this.getRandomWord();
        this.usedWords.add(this.currentWord.toLowerCase());
        this.elements.currentWord.textContent = this.currentWord;
        
        // Start timer
        this.startTimer();
        
        // Focus input
        this.elements.wordInput.value = '';
        this.elements.wordInput.focus();
    }

    restartGame() {
        // Show instructions
        this.elements.gameInstructions.classList.remove('hidden');
        this.elements.gamePlay.classList.add('hidden');
        this.elements.gameOver.classList.add('hidden');
        
        // Clear word history
        this.elements.usedWords.innerHTML = '';
    }

    startTimer() {
        this.timeLeft = 15;
        this.elements.timeLeft.textContent = this.timeLeft;
        
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.elements.timeLeft.textContent = this.timeLeft;
            
            if (this.timeLeft <= 0) {
                this.endGame();
            }
        }, 1000);
    }

    checkWord() {
        const input = this.elements.wordInput.value.trim().toLowerCase();
        
        if (!input) return;
        
        // Check if word starts with last letter of current word
        const lastLetter = this.currentWord.slice(-1).toLowerCase();
        const firstLetter = input.charAt(0).toLowerCase();
        const isValidStart = firstLetter === lastLetter;
        
        // Check if word exists in dictionary and hasn't been used
        const isValidWord = true; // 暂时移除字典检查，因为wordList未定义
        const isUnused = !this.usedWords.has(input);
        
        if (isValidStart && isValidWord && isUnused) {
            // Success!
            this.score++;
            this.currentLevel++;
            this.usedWords.add(input);
            
            // Update word history
            const li = document.createElement('li');
            li.textContent = `${this.currentWord} → ${input}`;
            this.elements.usedWords.insertBefore(li, this.elements.usedWords.firstChild);
            
            if (this.currentLevel > 20) {
                this.endGame();
            } else {
                // Continue game
                this.currentWord = input;
                this.elements.currentWord.textContent = this.currentWord;
                this.elements.wordInput.value = '';
                this.updateUI();
                this.startTimer();
            }
        } else {
            // Show error message
            const errorMessage = !isValidStart ? 
                `Word must start with '${lastLetter}'` :
                !isUnused ? 
                'Word has already been used' :
                'Invalid word';
            
            // 显示错误消息（需要在HTML中添加对应元素）
            const errorElement = this.elements.errorMessage;
            if (errorElement) {
                errorElement.textContent = errorMessage;
                errorElement.classList.remove('hidden');
                setTimeout(() => {
                    errorElement.classList.add('hidden');
                }, 2000);
            }
            
            // 清空输入框
            this.elements.wordInput.value = '';
            this.elements.wordInput.focus();
        }
    }

    endGame() {
        clearInterval(this.timer);
        this.isGameOver = true;
        
        // Update final score and comment
        this.elements.finalScore.textContent = this.score;
        const scoreComment = this.score >= 16 
            ? 'Excellent! You have exceptional word skills!' 
            : 'Good try! Keep practicing to improve your score.';
        this.elements.scoreComment.textContent = scoreComment;
        
        // Show game over screen
        this.elements.gameOver.classList.remove('hidden');
        this.elements.gamePlay.classList.add('hidden');
    }

    updateUI() {
        this.elements.currentLevel.textContent = this.currentLevel;
        this.elements.currentScore.textContent = this.score;
    }

    getRandomWord() {
        return wordList[Math.floor(Math.random() * wordList.length)];
    }
}

// Start game when page loads
window.addEventListener('load', () => {
    new WordChainGame();
});
