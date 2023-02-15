function getTextElementValueById(elementId) {
    const phoneNumberElement = document.getElementById(elementId)
    const currentPhoneTotalString = phoneNumberElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
     subTotalElement.innerText = value;
}

function calculateSubTotal(params) {
     // calculate total
     const currentPhoneTotal = getTextElementValueById('phone_total')
     const currentCaseTotal = getTextElementValueById('case_total')
     
     const currentSubTotal = currentCaseTotal + currentPhoneTotal;
    setTextElementValueById('sub_total', currentSubTotal)
    //  calculate tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString)
    setTextElementValueById('tax_amount', taxAmount)

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final_total', finalAmount);
}