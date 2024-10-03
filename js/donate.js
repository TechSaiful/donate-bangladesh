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
        document.getElementById('my_modal_1').showModal();

    }
    else{
        alert('Invalid donation amount. Please enter a valid number.');
    }
})


// History section

document.getElementById('donate_submit_btn').addEventListener('click', function(){
    let donateAmmount = parseFloat(document.getElementById('donate_ammount_input').value);
    if( !isNaN(donateAmmount) && donateAmmount > 0 ){
        let donateTitle = document.getElementById('donate_title').innerText;
        let h = document.createElement('h2');
        let p = document.createElement('p');
        let li = document.createElement('li');
        li.classList.add('border', 'rounded-md', 'my-4', 'p-4');
        h.classList.add('text-lg', 'text-black', 'font-bold', 'capitalize');
        p.classList.add('text-sm', 'text-gray-900');
    
        h.innerText = ` ${donateAmmount} is donated for ${donateTitle} `;
        p.innerText = 'date:' + new Date();
    
        li.appendChild(h);
        li.appendChild(p);
    
        document.getElementById('history_card').appendChild(li);
        // Clear the input field after submission
        document.getElementById('donate_ammount_input').value = '';
    }

})


// blur if the page has been scrolled down
let headerBtn = document.getElementById('header_btn_main');
let navHeaderMain = document.getElementById('nav_header_main');
let mainHeader = document.getElementById('main_header');
window.addEventListener('scroll', function(){
    if(window.scrollY > 20){
        headerBtn.classList.remove('bg-white');
        navHeaderMain.classList.remove('bg-[#F9F7F3]');
        mainHeader.classList.add('backdrop-blur-3xl', 'bg-white/50');
    }
})

