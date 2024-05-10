document.getElementById("calculateBtn").addEventListener("click", calculateLoan);

function calculateLoan() {
    const loanAmount = parseFloat(document.getElementById("loanamount").value);
    const interestRate = parseFloat(document.getElementById("interestrate").value);
    const loanTerm = parseFloat(document.getElementById("loanterm").value);

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
        alert("Please fill in all the fields or enter valid values.");
        return;
    }

    const monthInterest = interestRate / 100 / 12;
    const totalPayment = loanTerm * 12; // Fix: Calculate the total number of months
    const monthlyPayment = (loanAmount * monthInterest) / (1 - Math.pow(1 + monthInterest, -totalPayment));
    const totalInterest = (monthlyPayment * totalPayment) - loanAmount;

    displayResult(monthlyPayment, totalInterest);
}

function displayResult(monthlyPayment, totalInterest) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML =
        `<p><strong>Monthly Payment: $${monthlyPayment.toFixed(2)}</strong></p>
         <p><strong>Total Interest: $${totalInterest.toFixed(2)}</strong></p>`;
}