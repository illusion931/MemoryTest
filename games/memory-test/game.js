class MemoryLevelTest {
    constructor() {
        this.currentLevel = 1;
        this.score = 0;
        this.sequence = [];
        this.userInput = [];
        this.isDisplaying = false;
        this.displaySpeed = 3000; // Changed to 3 seconds as per new rules

        // 定义每个关卡的数字长度 (从3开始，每关+1，共30关)
        this.levelLengths = Array.from({length: 30}, (_, i) => i + 3);

        // DOM elements
        this.elements = {
            gameInstructions: document.getElementById('gameInstructions'),
            gamePlay: document.getElementById('gamePlay'),
            numberDisplay: document.getElementById('numberDisplay'),
            numberPad: document.getElementById('numberPad'),
            inputNumbers: document.getElementById('inputNumbers'),
            currentLevel: document.getElementById('currentLevel'),
            currentScore: document.getElementById('currentScore'),
            levelResult: document.getElementById('levelResult'),
            resultTitle: document.getElementById('resultTitle'),
            resultMessage: document.getElementById('resultMessage'),
            finalResult: document.getElementById('finalResult'),
            finalScore: document.getElementById('finalScore'),
            levelAchieved: document.getElementById('levelAchieved'),
            memoryLevel: document.getElementById('memoryLevel'),
            startButton: document.getElementById('startGame'),
            submitButton: document.getElementById('submitAnswer'),
            backspaceButton: document.getElementById('backspace'),
            nextLevelButton: document.getElementById('nextLevel'),
            playAgainButton: document.getElementById('playAgain')
        };

        // Event listeners
        this.elements.startButton.addEventListener('click', () => this.startGame());
        this.elements.submitButton.addEventListener('click', () => this.checkAnswer());
        this.elements.backspaceButton.addEventListener('click', () => this.backspace());
        this.elements.nextLevelButton.addEventListener('click', () => this.nextLevel());
        this.elements.playAgainButton.addEventListener('click', () => this.restartGame());

        // Number pad buttons
        document.querySelectorAll('.number-btn').forEach(button => {
            button.addEventListener('click', () => this.addNumber(button.dataset.number));
        });

        // Initialize translations if available
        if (typeof changeLanguage === 'function') {
            const lang = localStorage.getItem('selectedLanguage') || 'en';
            changeLanguage(lang);
        }
    }

    startGame() {
        this.currentLevel = 1;
        this.score = 0;
        this.updateUI();
        this.startLevel();
    }

    startLevel() {
        // Hide instructions and results, show gameplay
        this.elements.gameInstructions.classList.add('hidden');
        this.elements.levelResult.classList.add('hidden');
        this.elements.finalResult.classList.add('hidden');
        this.elements.gamePlay.classList.remove('hidden');
        
        // Generate sequence based on current level
        this.generateSequence();
        
        // Display sequence
        this.displaySequence();
    }

    generateSequence() {
        // 根据当前关卡获取数字长度
        const length = this.levelLengths[this.currentLevel - 1];
        this.sequence = Array.from({length}, () => Math.floor(Math.random() * 10));
    }

    async displaySequence() {
        this.isDisplaying = true;
        this.elements.numberPad.classList.add('hidden');
        this.userInput = [];
        this.elements.inputNumbers.textContent = '';

        for (const number of this.sequence) {
            // 显示数字
            this.elements.numberDisplay.textContent = number;
            this.elements.numberDisplay.classList.add('fade-in');
            await this.wait(this.displaySpeed / 2);

            // 隐藏数字
            this.elements.numberDisplay.classList.remove('fade-in');
            this.elements.numberDisplay.classList.add('fade-out');
            await this.wait(this.displaySpeed / 2);
            this.elements.numberDisplay.textContent = '';
            this.elements.numberDisplay.classList.remove('fade-out');
            await this.wait(300);
        }

        // 准备用户输入
        this.elements.numberDisplay.textContent = '?';
        this.elements.numberPad.classList.remove('hidden');
        this.isDisplaying = false;
    }

    wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    addNumber(number) {
        if (this.isDisplaying) return;
        if (this.userInput.length >= this.sequence.length) return;

        this.userInput.push(parseInt(number));
        this.elements.inputNumbers.textContent = this.userInput.join(' ');
    }

    backspace() {
        if (this.isDisplaying) return;
        if (this.userInput.length === 0) return;

        this.userInput.pop();
        this.elements.inputNumbers.textContent = this.userInput.join(' ');
    }

    checkAnswer() {
        if (this.userInput.length !== this.sequence.length) return;

        // 比较用户输入与原序列（不再是逆序）
        const isCorrect = this.userInput.every((num, i) => num === this.sequence[i]);

        if (isCorrect) {
            this.score++; // 每关1分
        }

        // 显示关卡结果
        this.elements.gamePlay.classList.add('hidden');
        this.elements.levelResult.classList.remove('hidden');

        if (isCorrect) {
            this.elements.resultTitle.textContent = '答对了！';
            this.elements.resultMessage.textContent = '继续下一关';
            
            // 如果是最后一关，显示最终结果
            if (this.currentLevel === this.levelLengths.length) {
                this.showFinalResult();
            }
        } else {
            this.elements.resultTitle.textContent = '答错了';
            this.elements.resultMessage.textContent = '游戏结束';
            this.showFinalResult();
        }

        this.updateUI();
    }

    nextLevel() {
        if (this.currentLevel < this.levelLengths.length) {
            this.currentLevel++;
            this.startLevel();
        } else {
            this.showFinalResult();
        }
    }

    showFinalResult() {
        this.elements.levelResult.classList.add('hidden');
        this.elements.finalResult.classList.remove('hidden');
        
        this.elements.finalScore.textContent = this.score;
        this.elements.levelAchieved.textContent = `达到第 ${this.currentLevel} 关`;

        // 根据新的评分标准
        let memoryLevel;
        if (this.score >= 25) {
            memoryLevel = '优秀';
        } else if (this.score >= 20) {
            memoryLevel = '良好';
        } else if (this.score >= 15) {
            memoryLevel = '一般';
        } else {
            memoryLevel = '需要练习';
        }
        
        this.elements.memoryLevel.textContent = `记忆水平：${memoryLevel}`;
    }

    restartGame() {
        this.elements.finalResult.classList.add('hidden');
        this.elements.gameInstructions.classList.remove('hidden');
    }

    updateUI() {
        this.elements.currentLevel.textContent = `${this.currentLevel}/30`;
        this.elements.currentScore.textContent = `${this.score}/30`;
    }

    getTranslation(key) {
        if (typeof translations === 'undefined') return key;
        const lang = localStorage.getItem('selectedLanguage') || 'en';
        const keys = key.split('.');
        let value = translations[lang];
        for (const k of keys) {
            if (!value || !value[k]) return key;
            value = value[k];
        }
        return value;
    }
}

// Start game when page loads
window.addEventListener('load', () => {
    new MemoryLevelTest();
});
