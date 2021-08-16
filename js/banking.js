// get amount  from input
function getInputValue(inputId){
     const inputField = document.getElementById(inputId);
     const inputAmountText = inputField.value;
     const inputAmount = parseFloat(inputAmountText);
     // clean the  input field
     inputField.value = '';
     return inputAmount;
}
// update diposit total
function updateTotalField(totalFieldId,amount){
    const totalField = document.getElementById(totalFieldId);
    const previousAmountText = totalField.innerText;
    const previousAmount= parseFloat(previousAmountText);
    const newtotalAmount= previousAmount + amount;
    totalField.innerText = newtotalAmount;
}
// update balance total
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total')
    const previousBalanceAmountText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountText);
    return previousBalanceAmount;
}
function updateBalance(newAmount,isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceAmount = getCurrentBalance();
    if(isAdd==true){
        balanceTotal.innerText = previousBalanceAmount + newAmount;
    }
    else{
        balanceTotal.innerText = previousBalanceAmount - newAmount;
    }
}

// handle deposit button event
document.getElementById('deposit-btn').addEventListener('click',function()
{
    const depositAmount = getInputValue('deposit-input');
    if(depositAmount>0)
    {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }  
})

// handle deposit button event
document.getElementById('withdraw-btn').addEventListener('click',function()
{
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount>0 && withdrawAmount<currentBalance)
    {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if(withdrawAmount>currentBalance)
    {
        alert("You don't have enough balance to withdraw");
    }
})