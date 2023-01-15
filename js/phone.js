/**
 * 1. add event listener to the Phone plus button
 * 2. get the value inside tthe Phone number field (input field)
 * 3. convert the number to an integer
 * 4. calcualte the new Phone number
 * 5. set the value to the Phone number field
 */

function updatePhoneNumber(isIncrease) {
    const PhoneNumberField = document.getElementById('phone-number-field');
    const PhoneNumberString = PhoneNumberField.value;
    const previsousPhoneNumber = parseInt(PhoneNumberString);

    let newPhoneNumber;

    if (isIncrease) {
        newPhoneNumber = previsousPhoneNumber + 1;
    }
    else {
        if (previsousPhoneNumber < 1) {
            alert('Quantity cannot be negative');
            return previsousPhoneNumber;
        }
        newPhoneNumber = previsousPhoneNumber - 1;
    }

    PhoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber, individualPrice) {
    const PhoneTotalPrice = newPhoneNumber * individualPrice;
    const PhoneTotalElement = document.getElementById('phone-total');
    PhoneTotalElement.innerText = PhoneTotalPrice;
}

document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(true);

    updatePhoneTotalPrice(newPhoneNumber, 1219);
    calcualteTotal();
});

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber, 1219);
    calcualteTotal();
});

