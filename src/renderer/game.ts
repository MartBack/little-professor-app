// Game logic and UI interaction
// All math functions are inlined here for browser compatibility

interface MathProblem {
  operand1: number;
  operand2: number;
  operator: '+' | '-' | '*' | '/';
  answer: number;
}

interface GameState {
  currentProblem: MathProblem | null;
  score: number;
  totalProblems: number;
  correctAnswers: number;
  difficulty: 'easy' | 'medium' | 'hard';
  selectedOperator: '+' | '-' | '*' | '/' | 'mixed';
}

// Helper functions (inline for browser compatibility)
function generateProblem(operator: '+' | '-' | '*' | '/', difficulty: 'easy' | 'medium' | 'hard'): MathProblem {
  let max: number;
  
  switch (difficulty) {
    case 'easy':
      max = 10;
      break;
    case 'medium':
      max = 50;
      break;
    case 'hard':
      max = 100;
      break;
  }
  
  let operand1: number;
  let operand2: number;
  let answer: number;
  
  switch (operator) {
    case '+':
      operand1 = Math.floor(Math.random() * max) + 1;
      operand2 = Math.floor(Math.random() * max) + 1;
      answer = operand1 + operand2;
      break;
    case '-':
      // Ensure non-negative results for subtraction
      const minOp = Math.floor(Math.random() * max) + 1;
      const maxOp = Math.floor(Math.random() * max) + 1;
      operand1 = Math.max(minOp, maxOp);
      operand2 = Math.min(minOp, maxOp);
      answer = operand1 - operand2;
      break;
    case '*':
      // For multiplication, limit operands to keep problems manageable
      const multMax = difficulty === 'easy' ? 10 : difficulty === 'medium' ? 12 : 15;
      operand1 = Math.floor(Math.random() * multMax) + 1;
      operand2 = Math.floor(Math.random() * multMax) + 1;
      answer = operand1 * operand2;
      break;
    case '/':
      // For division, ensure whole number answers
      const divisor = Math.floor(Math.random() * (difficulty === 'easy' ? 5 : difficulty === 'medium' ? 10 : 12)) + 1;
      const quotient = Math.floor(Math.random() * (difficulty === 'easy' ? 5 : difficulty === 'medium' ? 10 : 12)) + 1;
      operand1 = divisor * quotient;
      operand2 = divisor;
      answer = quotient;
      break;
  }
  
  return { operand1, operand2, operator, answer };
}

function getOperatorSymbol(operator: '+' | '-' | '*' | '/'): string {
  switch (operator) {
    case '+': return '+';
    case '-': return '−';
    case '*': return '×';
    case '/': return '÷';
  }
}

function generateRandomOperator(): '+' | '-' | '*' | '/' {
  const operators: ('+' | '-' | '*' | '/')[] = ['+', '-', '*', '/'];
  return operators[Math.floor(Math.random() * operators.length)];
}

class MathGame {
    private state: GameState;
    private answerInput!: HTMLInputElement;
    private operand1Display!: HTMLElement;
    private operand2Display!: HTMLElement;
    private operatorDisplay!: HTMLElement;
    private feedbackDisplay!: HTMLElement;
    private scoreDisplay!: HTMLElement;
    private correctDisplay!: HTMLElement;
    private totalDisplay!: HTMLElement;
    private difficultySelect!: HTMLSelectElement;
    private operatorSelect!: HTMLSelectElement;
    private newGameBtn!: HTMLButtonElement;
    private keypadButtons!: NodeListOf<HTMLButtonElement>;

    constructor() {
        this.state = {
            currentProblem: null,
            score: 0,
            totalProblems: 0,
            correctAnswers: 0,
            difficulty: 'medium',
            selectedOperator: 'mixed'
        };

        this.initializeElements();
        this.attachEventListeners();
        this.startNewGame();
    }

    private initializeElements(): void {
        this.answerInput = document.getElementById('answer-input') as HTMLInputElement;
        this.operand1Display = document.getElementById('operand1')!;
        this.operand2Display = document.getElementById('operand2')!;
        this.operatorDisplay = document.getElementById('operator-symbol')!;
        this.feedbackDisplay = document.getElementById('feedback')!;
        this.scoreDisplay = document.getElementById('score')!;
        this.correctDisplay = document.getElementById('correct')!;
        this.totalDisplay = document.getElementById('total')!;
        this.difficultySelect = document.getElementById('difficulty') as HTMLSelectElement;
        this.operatorSelect = document.getElementById('operator') as HTMLSelectElement;
        this.newGameBtn = document.getElementById('new-game-btn') as HTMLButtonElement;
        this.keypadButtons = document.querySelectorAll('.key');
    }

    private attachEventListeners(): void {
        // Answer input
        this.answerInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.checkAnswer();
            }
        });

        // Keypad buttons
        this.keypadButtons.forEach(button => {
            button.addEventListener('click', () => {
                const value = button.getAttribute('data-value');
                const action = button.getAttribute('data-action');
                
                if (action === 'clear') {
                    this.clearInput();
                } else if (action === 'submit') {
                    this.checkAnswer();
                } else if (value !== null) {
                    this.appendToInput(value);
                }
            });
        });

        // Controls
        this.difficultySelect.addEventListener('change', () => {
            this.state.difficulty = this.difficultySelect.value as 'easy' | 'medium' | 'hard';
            this.generateNewProblem();
        });

        this.operatorSelect.addEventListener('change', () => {
            this.state.selectedOperator = this.operatorSelect.value as '+' | '-' | '*' | '/' | 'mixed';
            this.generateNewProblem();
        });

        this.newGameBtn.addEventListener('click', () => {
            this.startNewGame();
        });
    }

    private startNewGame(): void {
        this.state.score = 0;
        this.state.totalProblems = 0;
        this.state.correctAnswers = 0;
        this.state.difficulty = this.difficultySelect.value as 'easy' | 'medium' | 'hard';
        this.state.selectedOperator = this.operatorSelect.value as '+' | '-' | '*' | '/' | 'mixed';
        this.updateScoreDisplay();
        this.clearFeedback();
        this.generateNewProblem();
    }

    private generateNewProblem(): void {
        const operator = this.state.selectedOperator === 'mixed' 
            ? generateRandomOperator() 
            : this.state.selectedOperator as '+' | '-' | '*' | '/';
        
        this.state.currentProblem = generateProblem(operator, this.state.difficulty);
        this.displayProblem();
        this.clearInput();
        this.clearFeedback();
        this.answerInput.focus();
    }

    private displayProblem(): void {
        if (!this.state.currentProblem) return;

        const problem = this.state.currentProblem;
        this.operand1Display.textContent = problem.operand1.toString();
        this.operand2Display.textContent = problem.operand2.toString();
        this.operatorDisplay.textContent = getOperatorSymbol(problem.operator);
    }

    private appendToInput(value: string): void {
        const currentValue = this.answerInput.value;
        // Prevent leading zeros (except for single zero)
        if (currentValue === '0' && value !== '0') {
            this.answerInput.value = value;
        } else if (currentValue === '0' && value === '0') {
            // Keep as is
        } else {
            this.answerInput.value = currentValue + value;
        }
    }

    private clearInput(): void {
        this.answerInput.value = '';
        this.answerInput.focus();
    }

    private checkAnswer(): void {
        if (!this.state.currentProblem) return;

        const userAnswer = parseInt(this.answerInput.value, 10);
        
        if (isNaN(userAnswer)) {
            this.showFeedback('Please enter a number', false);
            return;
        }

        this.state.totalProblems++;
        const isCorrect = userAnswer === this.state.currentProblem.answer;

        if (isCorrect) {
            this.state.correctAnswers++;
            this.state.score += 10;
            this.showFeedback('Correct! ✓', true);
        } else {
            this.showFeedback(`Incorrect. The answer is ${this.state.currentProblem.answer}`, false);
        }

        this.updateScoreDisplay();

        // Generate new problem after a short delay
        setTimeout(() => {
            this.generateNewProblem();
        }, 2000);
    }

    private showFeedback(message: string, isCorrect: boolean): void {
        this.feedbackDisplay.textContent = message;
        this.feedbackDisplay.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    }

    private clearFeedback(): void {
        this.feedbackDisplay.textContent = '';
        this.feedbackDisplay.className = 'feedback empty';
    }

    private updateScoreDisplay(): void {
        this.scoreDisplay.textContent = this.state.score.toString();
        this.correctDisplay.textContent = this.state.correctAnswers.toString();
        this.totalDisplay.textContent = this.state.totalProblems.toString();
    }
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MathGame();
});
