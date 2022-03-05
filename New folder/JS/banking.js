
function getInput(inputId){
    const input = document.getElementById(inputId);
    const inputValue = input.value;
    const inputAmountInt = parseFloat(inputValue);
    input.value = '';
    return inputAmountInt;
}

function getTotal(totalId, amount) {
    // debugger
    const total = document.getElementById(totalId);
    const totalAmountText = total.innerText;
    const totalAmountInt = parseFloat(totalAmountText);
    const newTotalAmount = amount + totalAmountInt;
    total.innerText = newTotalAmount;
    return totalAmountInt;
}

function getBalanceTotal(Amount, isadd){
    const balanceInput = document.getElementById('balance-total');
    const balanceAmount = balanceInput.innerText;
    const balanceAmountInt = parseInt(balanceAmount);
        if(isadd == true){
            balanceInput.innerText = balanceAmountInt + Amount;
        }
        else{
            balanceInput.innerText = balanceAmountInt - Amount;
        }
}


document.getElementById('diposit-button').addEventListener('click', function(){
    // const dipositInput = document.getElementById('diposit-amount');
    // const dipositAmount = dipositInput.value;
    // const dipositAmountInt = parseFloat(dipositAmount);
    const dipositAmount = getInput('diposit-amount');
    

    // const newDiposit = document.getElementById('diposit-total');
    // const newDipositAmount = newDiposit.innerText;
    // const newDipositeAmountInt = parseFloat(newDipositAmount);
    const dipositTotalAmount = getTotal('diposit-total', dipositAmount);
    
    
    // const newDipositTotal = dipositAmount + dipositTotal;

    // html er ai inner text take call kortei hobe nahole output ashbei na
    // newDiposit.innerText = newDipositTotal;
    
    // for Balance 
    // const balanceInput = document.getElementById('balance-total');
    // const balanceAmount = balanceInput.innerText;
    // const balanceAmountInt = parseInt(balanceAmount);
    // balanceInput.innerText = dipositAmount + balanceAmountInt;

    // const newBalanceTotal = balanceAmountInt + newDipositTotal;
    
    const newTotalBalance = getBalanceTotal(dipositAmount, true);

    // balanceInput.innerText = newBalanceTotal; 
    
   
    
    // dipositInput.value = '';
    
})












document.getElementById('withdraw-button').addEventListener('click', function(){
    // const withdrawInput = document.getElementById('withdraw-amount');
    // const withdrawAmount = withdrawInput.value;
    // const newWithdrawAmountInt = parseFloat(withdrawAmount);
    const withdrawAmount = getInput('withdraw-amount');

    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previousAmount = withdrawTotal.innerText;
    // const previousAmountInt = parseFloat(previousAmount);
    const withdrawTotalAmount = getTotal('withdraw-total', withdrawAmount)

     
    // const totalWithdraw = withdrawInput + previousAmountInt ;

    // html er ai inner text take call kortei hobe nahole output ashbei na
    // withdrawTotal.innerText = totalWithdraw;

    // withdrawInput.value = '';
    
    // for Balance 
    // const balanceInput = document.getElementById('balance-total');
    // const balanceAmount = balanceInput.innerText;
    // const balanceAmountInt = parseInt(balanceAmount);

    // const newBalanceTotal = balanceAmountInt - withdrawAmount;

    // balanceInput.innerText = newBalanceTotal;    

    newTotalBalance = getBalanceTotal(withdrawAmount, false);


})