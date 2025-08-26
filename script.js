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
            alert('please rechage')
            return;
        }
        const totalCoin = numberOfCoin - 20;
        availableCoin.innerText = totalCoin


        // call 
        const cardSub = callBtn.parentNode.parentNode.parentNode.children[0].innerText;
        const cardNumber = callBtn.parentNode.parentNode.parentNode.children[2].innerText;
        // console.log(callBtn);
        const rightContainer = getElement('apend-element');
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
        rightContainer.append(newCard);

        



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
        const findCopytext = copyBtn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[0].children[0].children[1].children[2];
        const textNumber = findCopytext.innerText;
        navigator.clipboard.writeText(textNumber)
    }
})
getElement('clear-btn').addEventListener('click', function (e) {
            e.preventDefault();
            console.log('object');
            const rightContainer = getElement('apend-element');
            rightContainer.innerHTML = "";
        })
