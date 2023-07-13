const pricePlan = () => {
    const pricingListEl = document.querySelector('.pricing-plans-wrapper');
    const pricingInputEls = document.querySelectorAll('.pricing-input');
    pricingListEl.addEventListener('change', function(e) {
        if (e.target.value === '1') {
            pricingListEl.classList.remove('pricing-plans-wrapper-center');
            pricingListEl.classList.remove('pricing-plans-wrapper-right');
            pricingListEl.classList.add('pricing-plans-wrapper-left');
        }
        if ((e.target.value === '3')) {
            pricingListEl.classList.remove('pricing-plans-wrapper-center');
            pricingListEl.classList.remove('pricing-plans-wrapper-left');
            pricingListEl.classList.add('pricing-plans-wrapper-right');
        }
        if ((e.target.value === '2')) {
            pricingListEl.classList.remove('pricing-plans-wrapper-right');
            pricingListEl.classList.remove('pricing-plans-wrapper-left');
            pricingListEl.classList.add('pricing-plans-wrapper-center');
        }
    })
};

const changeStars = () => {
    const inputList = document.querySelectorAll('.stars-input');
    const starsListEl = document.querySelector('.stars-list');
    starsListEl.addEventListener('change', function(e) {
        let starNumber = Number(e.target.id.replace('star', ''));
        if (e.target.checked) {
            for (let i = 0; i < starNumber; i++) {
                inputList[i].parentElement.lastElementChild.lastElementChild.lastElementChild.style.fill = '#FFD36F';
            }
            for (let i = starNumber; i < inputList.length; i++) {
                inputList[i].parentElement.lastElementChild.lastElementChild.lastElementChild.style.fill = '#8989A2';
            }
        } else {
            for (let i = starNumber; i < inputList.length; i++) {
                inputList[i].parentElement.lastElementChild.lastElementChild.lastElementChild.style.fill = '#8989A2';
            }
        }
    });
}

const passTest = () => {
    const passOneEl = document.querySelector('.password');
    const passTwoEl = document.querySelector('.retype-password');
    passOneEl.addEventListener('keyup', () => {
        if (passOneEl.value !== '' && passTwoEl.value !== '') {
            if (passOneEl.value === passTwoEl.value) {
                passOneEl.style.border = '1px solid green';
                passTwoEl.style.border = '1px solid green';
            } else {
                passOneEl.style.border = '1px solid red';
                passTwoEl.style.border = '1px solid red';
            }
        }
    });
    passTwoEl.addEventListener('keyup', () => {
        if (passOneEl.value !== '' && passTwoEl.value !== '') {
            if (passOneEl.value === passTwoEl.value) {
                passOneEl.style.border = '1px solid green';
                passTwoEl.style.border = '1px solid green';
            } else {
                passOneEl.style.border = '1px solid red';
                passTwoEl.style.border = '1px solid red';
            }
        }
    });
};
pricePlan();
passTest();
changeStars();