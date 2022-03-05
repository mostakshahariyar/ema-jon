function getInputValue(input) {
	const depositInput = document.getElementById(input);
	const depositAmountText = depositInput.value;
	const depositAmount = parseFloat(depositAmountText);
	// clear input field 
	depositInput.value = '';
	return depositAmount;

}




// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
	// get the amount deposited
	// const depositInput = document.getElementById('deposit-input');
	// const newDepositAmountText = depositInput.value;
	// const newDepositAmount = parseFloat(newDepositAmountText);
	const depositAmount = getInputValue('deposit-input');

	// update deposit total
	const depositTotal = document.getElementById('deposit-total');
	const previousDepositText = depositTotal.innerText;
	const previousDepositAmount = parseFloat(previousDepositText);
	const newDepositTotal = previousDepositAmount + newDepositAmount;

	depositTotal.innerText = newDepositTotal;

	// update account balance 
	const balanceTotal = document.getElementById('balance-total');
	const balanceTotalText = balanceTotal.innerText;
	const previousBalanceTotal = parseFloat(balanceTotalText);
	const newBalanceTotal = previousBalanceTotal + newDepositAmount;
	balanceTotal.innerText = newBalanceTotal;

});

// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
	const withdrawInput = document.getElementById('withdraw-input');
	const withdrawAmountText = withdrawInput.value;
	const newWithdrawAmount = parseFloat(withdrawAmountText);
	console.log(newWithdrawAmount);

	// set withdraw total
	// const withdrawTotal = document.getElementById('withdraw-total');
	// const previousWithdrawText = withdrawTotal.innerText;
	// const previousWithdrawTotal = parseFloat(previousWithdrawText);
	const depositAmount = getInputValue('withdraw-total');

	const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
	withdrawTotal.innerText = newWithdrawTotal;

	// update balance
	const balanceTotal = document.getElementById('balance-total');
	const previousBalanceText = balanceTotal.innerText;
	const previousBalanceTotal = parseFloat(previousBalanceText);
	const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

	balanceTotal.innerText = newBalanceTotal;


})