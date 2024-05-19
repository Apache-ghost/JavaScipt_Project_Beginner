document.getElementById("calculateBtn").addEventListener("click", calculateTip);

function calculateTip() {
    var billAmount = parseFloat(document.getElementById("billamount").value);
    var serviceRating = parseFloat(document.getElementById("serviceRating").value);
    var splitCount = parseFloat(document.getElementById("splitCount").value);

    if (isNaN(billAmount) || isNaN(serviceRating) || isNaN(splitCount)) {
        alert("Please enter valid input values.");
        return;
    }

    var tipAmount = billAmount * (serviceRating / 100);
    var totalAmount = billAmount + tipAmount;
    var amountPerPerson = totalAmount / splitCount;

    document.getElementById("totalAmount").textContent = totalAmount.toFixed(2);
    document.getElementById("tipAmount").textContent = tipAmount.toFixed(2);
    document.getElementById("amountPerPerson").textContent = amountPerPerson.toFixed(2);
}