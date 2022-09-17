(() => {
const inputRef = document.querySelectorAll('input');
    const mainBtn = document.querySelector('.qwiz-main-button');
    const warningMessageRef = document.querySelector('.warning-message');
    

    mainBtn.addEventListener('click', checkSelected);

    function checkSelected() {
        if (![...inputRef].some(el => el.checked === true)) {
            warningMessageRef.classList.remove('is-hidden');
            setTimeout(() => {
                warningMessageRef.classList.add('is-hidden');
            }, 3000);
      };
    }
})();
