const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    //console.log(logEntry.operation)
    console.log(logEntries);
}

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    if (
        calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACK' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE' ||
        !enteredNumber
    ) {
        return;
    }

    // if (
    //     calculationType === 'ADD' ||
    //     calculationType === 'SUBTRACK' ||
    //     calculationType === 'MULTIPLY' ||
    //     calculationType === 'DIVIDE'
    // ) {
        const initialResult = currentResult;
        let mathOperator;
        if (calculationType === 'ADD') {
            currentResult += enteredNumber;
            mathOperator = '+';
        } else if (calculationType === 'SUBTRACK') {
            currentResult -= enteredNumber;
            mathOperator = '-';
        } else if (calculationType === 'MULTIPLY') {
            currentResult *= enteredNumber;
            mathOperator = '*';
        } else if (calculationType === 'DIVIDE') {
            currentResult /= enteredNumber;
            mathOperator = '/';
        }

        createAndWriteOutput(mathOperator, initialResult, enteredNumber);
        writeToLog(calculationType, initialResult, enteredNumber, currentResult);
    }
// }

function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACK');
}

function multiply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
