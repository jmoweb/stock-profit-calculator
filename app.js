function calculateTarget() {
  const shares = parseFloat(document.getElementById("targetShares").value);
  const entryPrice = parseFloat(document.getElementById("targetEntryPrice").value);
  const desiredReturn = parseFloat(document.getElementById("desiredReturn").value);

  if (isNaN(shares) || isNaN(entryPrice) || isNaN(desiredReturn)) {
    document.getElementById("targetOutput").innerText = "Please fill in all fields correctly.";
    return;
  }

  const targetPrice = entryPrice * (1 + desiredReturn / 100);
  const totalProfit = shares * (targetPrice - entryPrice);

  document.getElementById("targetOutput").innerHTML =
    `To achieve a ${desiredReturn}% return:<br>
    Sell at: <strong>$${targetPrice.toFixed(2)}</strong><br>
    Expected Profit: <strong>$${totalProfit.toFixed(2)}</strong>`;
}
