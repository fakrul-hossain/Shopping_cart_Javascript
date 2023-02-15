/* 
1. ad event listener to the case plus button 
2. ge the value inside the case number field (input field)
3. convert the number to an integer
4. calculate the new case number 
5. set the value the case number filed
*/
function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case_input_field');
    const caseNumberFileString = caseNumberField.value;
    const PreviousCaseNumber = parseInt(caseNumberFileString);

let newCaseNumber;
if (isIncrease === true) {
    newCaseNumber = PreviousCaseNumber + 1
} else{
    newCaseNumber = PreviousCaseNumber - 1 
}
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
};
function updateCaseTotalPrice(newCaseNumber) {
    
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case_total');
    caseTotalElement.innerText = caseTotalPrice;
}
document.getElementById('case_plus_btn').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true)
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
});

document.getElementById('case_min_btn').addEventListener('click', function(){
    // updateCaseNumber(false);
    const newCaseNumber = updateCaseNumber(false)
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
});