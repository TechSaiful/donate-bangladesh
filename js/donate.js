// donate and history switching function
document.getElementById('donation_btn').addEventListener('click', function(){
    document.getElementById('history_section').classList.add('hidden');
    document.getElementById('donation_section').classList.remove('hidden');

    // color
    document.getElementById('donation_btn').style.backgroundColor = '#B4F461';
    document.getElementById('history_btn').style.removeProperty('background-color');
    // font weight
    document.getElementById('donation_btn').style.fontWeight = '700';
    document.getElementById('history_btn').style.removeProperty('font-weight');

})
document.getElementById('history_btn').addEventListener('click', function(){
    document.getElementById('donation_section').classList.add('hidden');
    document.getElementById('history_section').classList.remove('hidden');

    // color
    document.getElementById('donation_btn').style.removeProperty('background-color');
    document.getElementById('history_btn').style.backgroundColor = '#B4F461';
    // font weight
    document.getElementById('history_btn').style.fontWeight = '700';
    document.getElementById('donation_btn').style.removeProperty('font-weight');
})


// donate ammount function
document.getElementById('donate_submit_btn').addEventListener('click', function(){
    let donateAmmount = parseFloat(document.getElementById('donate_ammount_input').value);
    if( !isNaN(donateAmmount) && donateAmmount > 0 ){
        // donate ammount add to the found
        let totalDonateAmmount = parseFloat(document.getElementById('total_donate_ammount').innerText);
        let updateAmmount = donateAmmount + totalDonateAmmount;
        document.getElementById('total_donate_ammount').innerText = updateAmmount;

        // ammount - form main balance
        let accountBalance = parseFloat(document.getElementById('account_balance').innerText);
        let updateAccountBalance = accountBalance - donateAmmount; 
        document.getElementById('account_balance').innerText = updateAccountBalance;
    }
    else{
        alert('Invalid donation amount. Please enter a valid number.');
    }
})



