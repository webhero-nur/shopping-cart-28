document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNubmer = parseInt(phoneNumberString);

    const newPhoneNumber = previousPhoneNubmer + 1;
    phoneNumberField.value = newPhoneNumber;
});