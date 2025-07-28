function calculateProfit() {
  const shares = parseFloat(document.getElementById('shares').value);
  const entryPrice = parseFloat(document.getElementById('entryPrice').value);
  const exitPrice = parseFloat(document.getElementById('exitPrice').value);
  const stockSymbol = document.getElementById('stockSymbol').value;

  if (isNaN(shares) || isNaN(entryPrice) || isNaN(exitPrice)) {
    document.getElementById('output').textContent = 'Please enter valid numbers.';
    return;
  }

  const totalInvestment = shares * entryPrice;
  const totalSell = shares * exitPrice;
  const profit = totalSell - totalInvestment;
  const percentGain = ((exitPrice - entryPrice) / entryPrice) * 100;

  document.getElementById('output').innerHTML =
    `<p><strong>${stockSymbol}</strong><br>
    Invested: $${totalInvestment.toFixed(2)}<br>
    Returned: $${totalSell.toFixed(2)}<br>
    Profit: $${profit.toFixed(2)} (${percentGain.toFixed(2)}%)</p>`;
}
