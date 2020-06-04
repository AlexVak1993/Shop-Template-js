let buttonsContainer = document.querySelector('#content-container');
let cartCounterLabel = document.querySelector('#cart-counter');
let cartCounter = 0;
let cartPrice = 0;


function btnClickHandler(e) {
  let target = e.target;

  if (target.classList.contains('item-actions__cart')) {
    cartCounterLabel.innerHTML = ++cartCounter;

    if (cartCounter === 1) cartCounterLabel.style.display = 'block';

    let dataPrice = target.parentElement.previousElementSibling.innerHTML;
        dataPrice = +dataPrice.replace(/^\$(\d+)\s\D+(\d+).*/gu, '$1.$2');
        
    let restoreHTML = target.innerHTML;

    cartPrice = Math.round((cartPrice + dataPrice) * 100) / 100;
    target.innerHTML = `Added ${cartPrice.toFixed(2)} $`;

    buttonsContainer.removeEventListener('click', btnClickHandler);
    target.disabled = true;

    setTimeout(() => {
      target.innerHTML = restoreHTML;
      buttonsContainer.addEventListener('click', btnClickHandler);
      target.disabled = false;
    }, 2000);
  };
}

buttonsContainer.addEventListener('click', btnClickHandler)