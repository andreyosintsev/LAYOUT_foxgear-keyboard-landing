(function() {

    const products = {
        'K2H-J1-RU': '18 990,00',
        'K2H-F1-RU': '19 990,00',
        'K2H-Q1-RU': '19 990,00'
    }

    const imagesProducts = document.querySelector('.hero-single__photos');
    if (!imagesProducts) {
        return console.error('DOM: no .hero-single__photos element found');
    }

    imagesProducts.addEventListener('click', (e) => {
        if (e.target && e.target.hasAttribute('data-product')) {
            setProductData(e.target.getAttribute('data-product'));
        };
    });

    function setProductData(product) {
        const price = products[product];
        const priceElement = document.querySelector('.hero-single__price');
        if (!priceElement) {
            return console.error('DOM: no .hero-single__price element found');
        }

        priceElement.innerHTML = `${price} ₽`;

        const modelElement = document.querySelector('.hero-single__model');
        if (!modelElement) {
            return console.error('DOM: no .hero-single__model element found');
        }

        modelElement.innerHTML = `Модель ${product}`;

        const buttonElement = document.querySelectorAll('.button_buy');
        buttonElement.forEach(button => button.dataset.product = `Keychron K2 HE модель ${product}`);
    }
})();
