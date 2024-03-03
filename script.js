
// Плавный скролл

const Header_links = document.querySelectorAll('.link');

console.log(Header_links);

for (let menuLink of Header_links) {
    menuLink.addEventListener('click', (e) => {
        e.preventDefault();
        let scrollToElem = menuLink.getAttribute('href');
        let coordinates = document.querySelector(scrollToElem).offsetTop;
        window.scrollTo({
            top: coordinates - 100,
            behavior: 'smooth'
        });
    })
}

// Отлавливаем все кнопки покупки в список
const BUY_BUTTONS = document.querySelectorAll('.buy-button');

// Навешиваем обработчик

for (let button of BUY_BUTTONS) {
    button.addEventListener('click', function(){
        window.open("https://t.me/ponos_yzbeka")
    })
}

