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
        const rightContainer = getElement('right-container');
        const newCard = document.createElement('div');
        newCard.innerHTML = `
<div class="flex justify-between p-6 items-center bg-[#FFFFFF] rounded-md">
                <div>
                    <h2>${cardSub}  </h2>
                    <span class="text-[#5C5C5C]">${cardNumber}</span>
                </div>
                <span>${new Date().toLocaleTimeString()}</span>
            </div>
`;
        rightContainer.append(newCard)



    }
    // heart 
    if (e.target.className.includes('heart-btn')) {
        const heartBtn = e.target;
        const availableHeart = heartBtn.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[1].children[0].children[0];
        const textHeart = availableHeart.innerText;
        const NumberOfHeart = Number(textHeart)

        const totalHeart = NumberOfHeart + 1;
        availableHeart.innerText = totalHeart
        // console.log(totalHeart);







    }
    // heart 
    if (e.target.className.includes('heart-btn')) {
        const heartBtn = e.target;
        const availableHeart = heartBtn.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[1].children[0].children[0];
        const textHeart = availableHeart.innerText;
        const numberOfHeart = Number(textHeart)

        const totalHeart = numberOfHeart + 1;
        availableHeart.innerText = totalHeart
        // console.log(totalHeart);


    }
})
// getElement('whole-body').addEventListener