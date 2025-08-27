// function
function getElement(id) {
    const element = document.getElementById(id);
    return element;
}

getElement('card-container').addEventListener('click', function (e) {


    if (e.target.className.includes('call-btn')) {
        e.preventDefault
        const callBtn = e.target;
        
        // coin 
        const availableCoin = callBtn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[1].children[1].children[0];
        
        const textCoin = availableCoin.innerText;
        // console.log(availableCoin);
        const numberOfCoin = Number(textCoin);
        if (numberOfCoin < 20) {
            alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে 20 কয়েন লাগবে ।')
            return;
        }
        const totalCoin = numberOfCoin - 20;
        availableCoin.innerText = totalCoin
        
        
        // call 
        const cardSub = callBtn.parentNode.parentNode.parentNode.children[0].innerText;
        const cardNumber = callBtn.parentNode.parentNode.parentNode.children[2].innerText;
        alert('📞 Calling '+cardSub+' '+cardNumber )
        // console.log(callBtn);
        const appnedRightContainer = getElement('apend-element');
        const newCard = document.createElement('div');
        newCard.innerHTML = `
<div class="flex justify-between p-6 mb-2 items-center bg-[#FAFAFA] rounded-md">
                <div>
                    <h2>${cardSub}  </h2>
                    <span class="text-[#5C5C5C]">${cardNumber}</span>
                </div>
                <span>${new Date().toLocaleTimeString()}</span>
            </div>
`;
        appnedRightContainer.append(newCard);





    }
    // heart 
    if (e.target.className.includes('heart-btn')) {
        const heartBtn = e.target;
        const availableHeart = heartBtn.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[1].children[0].children[0];
        const textHeart = availableHeart.innerText;
        const numberOfHeart = parseInt(textHeart)
        console.log(numberOfHeart);
        const totalHeart = numberOfHeart + 1;
        availableHeart.innerText = totalHeart
        // console.log(totalHeart);







    }
    // copy
    if (e.target.className.includes('copy-btn')) {
        const copyBtn = e.target;
        const availableCopy = copyBtn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[1].children[2].children[0];

        const textCopy = availableCopy.innerText;
        const numberOfCopy = Number(textCopy)

        const totalCopy = numberOfCopy + 1;
        availableCopy.innerText = totalCopy
        // console.log(totalHeart);
        const findCopytext = copyBtn.parentNode.parentNode.parentNode.children[2];
        const cardNumber = findCopytext.innerText;
        alert('নম্বর কপি হয়েছে : ' +cardNumber)
        navigator.clipboard.writeText(cardNumber)
    }
})
// clear
getElement('clear-btn').addEventListener('click', function (e) {
    e.preventDefault();
    console.log('object');
    const appnedRightContainer = getElement('apend-element');
    appnedRightContainer.innerHTML = "";
})