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