document.getElementById('btn-case-plus').addEventListener('click', function () {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumber = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumber);
    
    const newCaseNumber = previousCaseNumber + 1;
    caseNumberField.value=newCaseNumber;
})