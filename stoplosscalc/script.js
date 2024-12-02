// Switch between calculators
function showCalculator(calculatorId) {
	document
		.querySelectorAll('.calculator')
		.forEach((calc) => (calc.style.display = 'none'));
	document.getElementById(calculatorId).style.display = 'block';
}

// Stop Loss & Take Profit Calculator
document.getElementById('calculateButton').addEventListener('click', () => {
	const startingPrice = parseFloat(
		document.getElementById('startingPrice').value
	);
	const stopLossPercent = parseFloat(document.getElementById('stopLoss').value);
	const takeProfitPercent = parseFloat(
		document.getElementById('takeProfit').value
	);

	if (
		isNaN(startingPrice) ||
		isNaN(stopLossPercent) ||
		isNaN(takeProfitPercent)
	) {
		alert('Please enter valid numbers for all fields.');
		return;
	}

	const stopLossPrice = startingPrice * (1 - stopLossPercent / 100);
	const takeProfitPrice = startingPrice * (1 + takeProfitPercent / 100);

	document.getElementById(
		'stopLossResult'
	).innerText = `$${stopLossPrice.toFixed(2)}`;
	document.getElementById(
		'takeProfitResult'
	).innerText = `$${takeProfitPrice.toFixed(2)}`;
});

// 1:2 Ratio Calculator
document
	.getElementById('calculateRatioButton')
	.addEventListener('click', () => {
		const makerFee = parseFloat(document.getElementById('makerFee').value);
		const takerFee = parseFloat(document.getElementById('takerFee').value);
		const startingPrice = parseFloat(
			document.getElementById('startingPrice2').value
		);

		if (isNaN(makerFee) || isNaN(takerFee) || isNaN(startingPrice)) {
			alert('Please enter valid numbers for all fields.');
			return;
		}

		const totalFee = makerFee + takerFee;
		const adjustedTakeProfitPercent = 2 + totalFee;
		const adjustedStopLossPercent = adjustedTakeProfitPercent / 2;

		const stopLossPrice = startingPrice * (1 - adjustedStopLossPercent / 100);
		const takeProfitPrice =
			startingPrice * (1 + adjustedTakeProfitPercent / 100);

		document.getElementById(
			'adjustedStopLoss'
		).innerText = `${adjustedStopLossPercent.toFixed(2)}%`;
		document.getElementById(
			'adjustedTakeProfit'
		).innerText = `${adjustedTakeProfitPercent.toFixed(2)}%`;
		document.getElementById(
			'stopLossPrice'
		).innerText = `$${stopLossPrice.toFixed(2)}`;
		document.getElementById(
			'takeProfitPrice'
		).innerText = `$${takeProfitPrice.toFixed(2)}`;
	});

// Copy to Clipboard
function copyToClipboard(elementId) {
	const valueToCopy = document.getElementById(elementId).innerText;
	navigator.clipboard
		.writeText(valueToCopy)
		.then(() => {
			alert(`${valueToCopy} copied to clipboard!`);
		})
		.catch(() => {
			alert('Failed to copy text. Please try again.');
		});
}
