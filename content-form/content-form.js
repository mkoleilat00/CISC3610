function calculateValue() {
    const initialAmount = parseFloat(document.getElementById('initialAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    const years = parseInt(document.getElementById('years').value);
    const compoundFrequencyElement = document.getElementById('compoundFrequency');
    const compoundFrequency = compoundFrequencyElement.options[compoundFrequencyElement.selectedIndex].value;

    let compoundingFactor;
    if (compoundFrequency === 'annually') {
        compoundingFactor = 1;
    } else if (compoundFrequency === 'semiannually') {
        compoundingFactor = 2;
    } else if (compoundFrequency === 'quarterly') {
        compoundingFactor = 4;
    } else if (compoundFrequency === 'monthly') {
        compoundingFactor = 12;
    }

    const futureValue = initialAmount * Math.pow((1 + interestRate / compoundingFactor), compoundingFactor * years);
    document.getElementById('result').innerHTML = `Future Value: $${futureValue.toFixed(2)}`;
}

function reset() {
    document.getElementById('result').innerHTML = '';
}
