// function
function getElement(id) {
    const element = document.getElementById(id);
    return element;
}

getElement('emegency-card').addEventListener('click', function(e){

if(e.target.className.includes('call-btn')){
    alert('Calling' + getElement('card-sub'))
}
})