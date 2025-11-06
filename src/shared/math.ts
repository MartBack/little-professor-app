// Shared types and utilities

export interface MathProblem {
  operand1: number;
  operand2: number;
  operator: '+' | '-' | '*' | '/';
  answer: number;
}

export interface GameState {
  currentProblem: MathProblem | null;
  score: number;
  totalProblems: number;
  correctAnswers: number;
  difficulty: 'easy' | 'medium' | 'hard';
}

export function generateProblem(operator: '+' | '-' | '*' | '/', difficulty: 'easy' | 'medium' | 'hard'): MathProblem {
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
  
  const operand1 = Math.floor(Math.random() * max) + 1;
  const operand2 = Math.floor(Math.random() * max) + 1;
  
  let answer: number;
  switch (operator) {
    case '+':
      answer = operand1 + operand2;
      break;
    case '-':
      answer = operand1 - operand2;
      break;
    case '*':
      answer = operand1 * operand2;
      break;
    case '/':
      answer = Math.floor(operand1 / operand2);
      break;
  }
  
  return { operand1, operand2, operator, answer };
}

