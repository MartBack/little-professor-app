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
  selectedOperator: '+' | '-' | '*' | '/' | 'mixed';
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
      // Ensure non-negative results for subtraction
      const minOperand = Math.min(operand1, operand2);
      const maxOperand = Math.max(operand1, operand2);
      answer = maxOperand - minOperand;
      return { operand1: maxOperand, operand2: minOperand, operator, answer };
    case '*':
      // For multiplication, limit operands to keep problems manageable
      const multMax = difficulty === 'easy' ? 10 : difficulty === 'medium' ? 12 : 15;
      const op1 = Math.floor(Math.random() * multMax) + 1;
      const op2 = Math.floor(Math.random() * multMax) + 1;
      return { operand1: op1, operand2: op2, operator, answer: op1 * op2 };
    case '/':
      // For division, ensure whole number answers
      const divisor = Math.floor(Math.random() * (difficulty === 'easy' ? 5 : difficulty === 'medium' ? 10 : 12)) + 1;
      const quotient = Math.floor(Math.random() * (difficulty === 'easy' ? 5 : difficulty === 'medium' ? 10 : 12)) + 1;
      const dividend = divisor * quotient;
      return { operand1: dividend, operand2: divisor, operator, answer: quotient };
  }
  
  return { operand1, operand2, operator, answer };
}

export function getOperatorSymbol(operator: '+' | '-' | '*' | '/'): string {
  switch (operator) {
    case '+': return '+';
    case '-': return '−';
    case '*': return '×';
    case '/': return '÷';
  }
}

export function generateRandomOperator(): '+' | '-' | '*' | '/' {
  const operators: ('+' | '-' | '*' | '/')[] = ['+', '-', '*', '/'];
  return operators[Math.floor(Math.random() * operators.length)];
}
