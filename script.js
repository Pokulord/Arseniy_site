// Список товаров

var PC_CATALOG = [
    {
        available: true, 
        label : "Мечта Сани",
        cpu_model : "I7-970",
        gpu_model : "GT 210",
        motherboard_model : "GIGABYTE A120",
        ram : 8,
        price : 10000,
        image : "images/computers/PC1.png", 
    }, 
    {
        available: true, 
        label : "Коля сказал, что это купят",
        cpu_model : "I7-9700К",
        gpu_model : "RTX 2060",
        motherboard_model : "ASROCK Z450",
        ram : 16,
        price : 75000,
        image : "images/computers/Мечта Сани.png"
    },
    {
        available: true, 
        label : "Тест",
        cpu_model : "Будет позже",
        gpu_model : "Сегодня без видеокарты",
        motherboard_model : "И без материнской платы",
        ram : 0,
        price : 0,
        image : "images/computers/nophoto.jpg"
    }, 

    {
        available: true, 
        label : "Тест",
        cpu_model : "Будет позже",
        gpu_model : "Сегодня без видеокарты",
        motherboard_model : "И без материнской платы",
        ram : 0,
        price : 0,
        image : "images/computers/nophoto.jpg"
    }, 
    {
        available: true, 
        label : "Тест",
        cpu_model : "Будет позже",
        gpu_model : "Сегодня без видеокарты",
        motherboard_model : "И без материнской платы",
        ram : 0,
        price : 0,
        image : "images/computers/nophoto.jpg"
    }, 
    {
        available: true, 
        label : "Тест",
        cpu_model : "Будет позже",
        gpu_model : "Сегодня без видеокарты",
        motherboard_model : "И без материнской платы",
        ram : 0,
        price : 0,
        image : "images/computers/nophoto.jpg"
    }, 
    {
        available: true, 
        label : "Тест",
        cpu_model : "Будет позже",
        gpu_model : "Сегодня без видеокарты",
        motherboard_model : "И без материнской платы",
        ram : 0,
        price : 0,
        image : "images/computers/nophoto.jpg"
    }, 
] ; 


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


// Переменная для вставки
var htmlCatalog = ''; 
// ВЫВод содержимого каталога

// Отлавливаем секцию товаров

var products_grid = document.querySelector(".catalog-grid");

function Generate_Computers_list(catalog) {
    catalog.forEach(({available, label, cpu_model, gpu_model, motherboard_model, ram, price , image}) => {
        if (available) {
            htmlCatalog += `
        <div class="product-card">
                <div class="product-card-container">
                    <div class="product-card-image">
                        <img src="${image}" alt="">
                    </div>
                    <div class="product-label" style="text-align: justify ; font-size: 20px; margin-bottom: 23px;">
                       ${label}
                    </div>
                    <div class="product-card-specs">
                            <div class="cpu-icon">
                                <img src="images/cpu.svg" alt="">
                            </div>
                            <div class="cpu-model" id="product-card_models">
                                CPU: ${cpu_model}
                            </div>
                            <div class="gpu-icon">
                                <img src="images/gpu.svg" alt="">
                            </div>
                            <div class="gpu-model" id="product-card_models">
                                GPU: ${gpu_model}
                            </div>
                            <div class="motherboard-icon">
                                <img src="images/mb.svg" alt="">
                            </div>
                            <div class="motherboard-model" id="product-card_models">
                                MOTHERBOARD: ${motherboard_model}
                            </div>
                            <div class="ram-logo">
                                <img src="images/ram.svg" alt="">
                            </div>
                            <div class="ram-model" id="product-card_models">
                                RAM: ${ram} GB
                            </div>
                    </div>
                    <div class="price-and-buy-section">
                        <div class="price-label">
                            <div class="">Цена </div><div class="colored-text" style="margin-left: 5px; margin-right: 5px;"> ${price} </div>  <div class="">рублей*</div>
                        </div>
                        <div class="buy-button-section">
                            <button class = "buy-button">
                                <div class="cart-image">
                                    <img src="images/buy-button-icon.svg" alt="">
                                </div>
                                <div class="label-to-buy" style="position: relative;">
                                    Купить
                                </div>
                            </button>
                        </div>
                    </div>
                    <div class="underprice-label">*цена указана без учёта доставки</div>
                </div>
                </div>
        `;
        }
        


    // Очищаем переменную для вставки

    });
    products_grid.innerHTML = htmlCatalog;
    htmlCatalog = "";
}


Generate_Computers_list(PC_CATALOG);

// Отлавливаем все кнопки покупки в список
const BUY_BUTTONS = document.querySelectorAll('.buy-button');

// Навешиваем обработчик

for (let button of BUY_BUTTONS) {
    button.addEventListener('click', function(){
        window.open("https://t.me/ponos_yzbeka")
    })
}