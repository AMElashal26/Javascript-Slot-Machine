//1. Deposit some money
// 2. Determine number of lines to bet on
// 3.Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7. Ask if they want to play again

const prompt = require('prompt-sync')();

const deposit = () => {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log("Invalid deposit amount. Please enter a valid number.");
        return deposit();
    }

    return numberDepositAmount;
};

const getNumberOfLines = () => {
    const lines = prompt("Enter the number of lines to bet on (1-3): ");
    const numberLines = parseFloat(lines);

    if (isNaN(numberLines) || numberLines < 1 || numberLines > 3) {
        console.log("Invalid number of lines. Please enter a number between 1 and 3.");
        return getNumberOfLines();
    }

    return numberLines;
}

const getBet = (balance, lines) => {
    const bet = prompt("Enter the bet per line: ");
    const numberBet = parseFloat(bet);

    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
        console.log("Invalid bet amount. Please enter a valid number.");
        return getBet(balance, lines);
    }

    return numberBet;
}

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);

//console.log(depositAmount);