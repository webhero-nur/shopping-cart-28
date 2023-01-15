const getValueById = id => {
    const element = document.getElementById(id);
    const elementString = element.innerText;
    const elementValue = parseFloat(elementString);
    return elementValue;
}

const calcualteTotal = () => {
    const phoneTotal = getValueById('phone-total');
    const caseTotal = getValueById('case-total');
    const newSubTotal = phoneTotal + caseTotal;
    const previousSubTotal = document.getElementById('sub-total');
    previousSubTotal.innerText = newSubTotal.toFixed(2);
    const taxAmount = document.getElementById('tax-amout');
    taxAmount.innerText = (newSubTotal * 0.1).toFixed(2);
    const totalAmount = document.getElementById('total-amount');
    totalAmount.innerText = (newSubTotal * 1.1).toFixed(2);
}