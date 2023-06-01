const prompt = require('prompt-sync')();

const deposit = () => {
while (true) {
    const depositAmount = prompt("Enter a deposit amount: ")
    const numberDepositNumber = parseFloat(depositAmount);

    if (NaN(numberDepositNumber) || numberDepositNumber <= 0) {
        console.log("Invalid deposit amount, Try again.");
    }
    else {
        return numberDepositNumber
    }
}
}


const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ") 
        const numberOfLines = parseFloat(lines);
    
        if (NaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number of lines, try again.");
        }
        else {
            return numberOfLines
        }
    }
}

const depositAmount = deposit()
const numberOfLines = getNumberOfLines