/**
 * 1. add event listener to the case plus button
 * 2. get the value inside tthe case number field (input field)
 * 3. convert the number to an integer
 * 4. calcualte the new case number
 * 5. set the value to the case number field
 */

function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previsousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;

    if (isIncrease === true) {
        newCaseNumber = previsousCaseNumber + 1;
    }
    else {
        newCaseNumber = previsousCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber, individualPrice) {
    const caseTotalPrice = newCaseNumber * individualPrice;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);

    updateCaseTotalPrice(newCaseNumber, 59);
});

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber, 59);
});

