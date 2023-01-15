// added from browser
const getTextElementValueById = id => {
    const element = document.getElementById(id);
    const elementString = element.innerText;
    const elementValue = parseFloat(elementString);
    return elementValue;
}

const setTextElementValueById = (id, value) => {
    const element = document.getElementById(id);
    element.innerText = value;
    return;
}

const calcualteTotal = () => {
    const phoneTotal = getTextElementValueById('phone-total');
    const caseTotal = getTextElementValueById('case-total');

    const newSubTotal = phoneTotal + caseTotal;

    const taxAmount = newSubTotal * 0.1;

    const totalAmount = newSubTotal + taxAmount;

    setTextElementValueById('sub-total', newSubTotal.toFixed(2));
    setTextElementValueById('tax-amout', taxAmount.toFixed(2));
    setTextElementValueById('total-amount', totalAmount.toFixed(2));
}