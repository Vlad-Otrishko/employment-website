(() => {
    const allSections = document.querySelectorAll('section');
    let ancestor = '';
    allSections.forEach(el => {
        ancestor = [...el.classList][0];
        check(el);   
    }
        )

    function check(item) {
                let result = [...item.classList].find(e => e.includes('form-button-text'));
                if (result) {
                    switch(ancestor){
                        case 'online-questions': item.innerHTML="Записаться на собеседование";
                    break;
                    case 'company-details': item.innerHTML="Посетить офис";
                    break;
                    case 'qwiz': item.innerHTML="Рассчитать заработную плату";
                    break;
                    default: item.innerHTML = "Получить постоянную работу";
                    }
            }
            if (item.children.length > 0) {
                    [...item.children].forEach(e=>check(e));
            } 
        }
})();
