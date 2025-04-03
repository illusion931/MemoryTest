class NumberPuzzleGame {
    constructor() {
        this.timeLeft = 90;
        this.timer = null;
        this.moves = 0;
        this.tiles = [];
        this.emptyTileIndex = 8; // Bottom right corner
        this.isGameOver = false;

        // DOM elements
        this.elements = {
            gameInstructions: document.getElementById('gameInstructions'),
            gamePlay: document.getElementById('gamePlay'),
            startButton: document.getElementById('startGame'),
            puzzleBoard: document.getElementById('puzzleBoard'),
            timeLeft: document.getElementById('timeLeft'),
            moveCount: document.getElementById('moveCount'),
            gameWon: document.getElementById('gameWon'),
            gameLost: document.getElementById('gameLost'),
            finalTime: document.getElementById('finalTime'),
            finalMoves: document.getElementById('finalMoves'),
            timeoutMoves: document.getElementById('timeoutMoves'),
            playAgain: document.getElementById('playAgain'),
            tryAgain: document.getElementById('tryAgain')
        };

        // Event listeners
        this.elements.startButton.addEventListener('click', () => this.startGame());
        this.elements.playAgain.addEventListener('click', () => this.restartGame());
        this.elements.tryAgain.addEventListener('click', () => this.restartGame());

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
        this.elements.gameWon.classList.add('hidden');
        this.elements.gameLost.classList.add('hidden');

        // Reset game state
        this.timeLeft = 90;
        this.moves = 0;
        this.isGameOver = false;

        // Create and shuffle puzzle
        this.createPuzzle();
        this.updateUI();

        // Start timer
        this.startTimer();
    }

    createPuzzle() {
        // Clear puzzle board
        this.elements.puzzleBoard.innerHTML = '';
        
        // Create tiles array (1-8 and empty)
        this.tiles = Array.from({length: 9}, (_, i) => i);
        
        // Shuffle tiles until we get a solvable puzzle
        do {
            this.shuffleTiles();
        } while (!this.isSolvable());
        
        // Create tile elements
        this.tiles.forEach((number, index) => {
            const tile = document.createElement('div');
            tile.className = 'puzzle-tile' + (number === 0 ? ' empty' : '');
            tile.textContent = number || '';
            tile.addEventListener('click', () => this.moveTile(index));
            this.elements.puzzleBoard.appendChild(tile);
        });
        
        // Store empty tile position
        this.emptyTileIndex = this.tiles.indexOf(0);
    }

    shuffleTiles() {
        for (let i = this.tiles.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.tiles[i], this.tiles[j]] = [this.tiles[j], this.tiles[i]];
        }
    }

    isSolvable() {
        let inversions = 0;
        const tiles = this.tiles.filter(t => t !== 0); // Remove empty tile
        
        // Count inversions
        for (let i = 0; i < tiles.length - 1; i++) {
            for (let j = i + 1; j < tiles.length; j++) {
                if (tiles[i] > tiles[j]) inversions++;
            }
        }
        
        // Puzzle is solvable if number of inversions is even
        return inversions % 2 === 0;
    }

    getAdjacentTiles(index) {
        const row = Math.floor(index / 3);
        const col = index % 3;
        const adjacent = [];
        
        // Check up
        if (row > 0) adjacent.push(index - 3);
        // Check down
        if (row < 2) adjacent.push(index + 3);
        // Check left
        if (col > 0) adjacent.push(index - 1);
        // Check right
        if (col < 2) adjacent.push(index + 1);
        
        return adjacent;
    }

    moveTile(index) {
        if (this.isGameOver) return;
        
        // Check if clicked tile is adjacent to empty tile
        const adjacentTiles = this.getAdjacentTiles(this.emptyTileIndex);
        if (!adjacentTiles.includes(index)) return;
        
        // Swap tiles
        [this.tiles[this.emptyTileIndex], this.tiles[index]] = 
        [this.tiles[index], this.tiles[this.emptyTileIndex]];
        this.emptyTileIndex = index;
        
        // Update moves count
        this.moves++;
        
        // Update UI
        this.updateUI();
        
        // Check if puzzle is solved
        if (this.isPuzzleSolved()) {
            this.winGame();
        }
    }

    isPuzzleSolved() {
        return this.tiles.every((tile, index) => {
            if (index === 8) return tile === 0;
            return tile === index + 1;
        });
    }

    startTimer() {
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateUI();
            
            if (this.timeLeft <= 0) {
                this.loseGame();
            }
        }, 1000);
    }

    updateUI() {
        // Update timer and moves
        this.elements.timeLeft.textContent = this.timeLeft;
        this.elements.moveCount.textContent = this.moves;
        this.elements.finalMoves.textContent = this.moves;
        this.elements.timeoutMoves.textContent = this.moves;
        this.elements.finalTime.textContent = 90 - this.timeLeft;
        
        // Update puzzle tiles
        this.tiles.forEach((number, index) => {
            const tile = this.elements.puzzleBoard.children[index];
            tile.textContent = number || '';
            tile.className = 'puzzle-tile' + (number === 0 ? ' empty' : '');
            
            // Highlight movable tiles
            if (number !== 0 && this.getAdjacentTiles(this.emptyTileIndex).includes(index)) {
                tile.classList.add('movable');
            }
        });
    }

    winGame() {
        clearInterval(this.timer);
        this.isGameOver = true;
        
        // Show win screen
        this.elements.gamePlay.classList.add('hidden');
        this.elements.gameWon.classList.remove('hidden');
    }

    loseGame() {
        clearInterval(this.timer);
        this.isGameOver = true;
        
        // Show lose screen
        this.elements.gamePlay.classList.add('hidden');
        this.elements.gameLost.classList.remove('hidden');
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
    new NumberPuzzleGame();
});
