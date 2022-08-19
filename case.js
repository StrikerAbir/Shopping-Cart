// 1. add event listener to the case plus button
// 2. get the value inside the case number caseNumberField
// 3. convert number to an integer value
// 4. calculate the new case number
// 5. set the value to the case number field


function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumber = parseInt(caseNumberField.value);
    let newCaseNumber= caseNumber;
    if (isIncrease) {
        newCaseNumber++;
    } else if (newCaseNumber > 0) {
        newCaseNumber--;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function casePrice(quantity) {
    const priceField = document.getElementById('priceField');
    const price = quantity * 59;
    priceField.innerText=`$ ${price}`
}
document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);
    casePrice(newCaseNumber);
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false);
    casePrice(newCaseNumber);
})