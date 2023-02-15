/* 
1. ad event listener to the case plus button 
2. ge the value inside the case number field (input field)
3. convert the number to an integer
4. calculate the new case number 
5. set the value the case number filed
*/
function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phone_input_field')
    const phoneNumberFieldString = phoneNumberField.value;
    const PreviousPhoneNumber = parseInt(phoneNumberFieldString);
    let newPhoneNumber;
    if (isIncrease === true) {
        newPhoneNumber = PreviousPhoneNumber + 1;
    } else {
        newPhoneNumber = PreviousPhoneNumber - 1;    
    }
    phoneNumberField.value =newPhoneNumber;
    return newPhoneNumber;
}
function updatePhoneTotalPrice(newPhoneNumber) {
    
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone_total');
    phoneTotalElement.innerText = phoneTotalPrice;
}


document.getElementById('phone_plus_btn').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber)
    calculateSubTotal();
   
});


document.getElementById('phone_min_btn').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber)
    calculateSubTotal();
});