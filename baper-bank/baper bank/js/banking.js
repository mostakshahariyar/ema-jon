function getInputValue(inputId) {
    const inputField = document.getElementById('deposit-input');
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    // clear input field 
    inputField.value = '';
    return amountValue
}



// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount    deposited
    // const depositInput = document.getElementById('deposit-input');
    // const amountValueText = depositInput.value;
    // const amountValue = parseFloat(amountValueText);
    const depositAmount = getInputValue('deposit-input');

    // update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotal = previousDepositAmount + amountValue;

    depositTotal.innerText = newDepositTotal;

    // update account balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + amountValue;
    balanceTotal.innerText = newBalanceTotal;

});

// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const newWithdrawAmount = parseFloat(withdrawAmountText);
    // console.log(newWithdrawAmount);
    const depositAmount = getInputValue('withdraw-input');

    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

})