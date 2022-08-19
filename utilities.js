function updateCaseNumber(isIncrease, inputFieldId) {
    const caseNumberField = document.getElementById(inputFieldId);
    const caseNumber = parseInt(caseNumberField.value);
    let newCaseNumber = caseNumber;
    if (isIncrease) {
        newCaseNumber++;
    } else if (newCaseNumber > 0) {
        newCaseNumber--;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function singleProductTotalPrice(price, quantity, priceFieldId) {
    const priceField = document.getElementById(priceFieldId);

    const totalPrice = quantity * price;
    priceField.innerText = `$ ${totalPrice}`

}