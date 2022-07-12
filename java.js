window.addEventListener('DOMContentLoaded',()=>{
    class MenuCard{
        constructor(src,alt,title,descr,price,parentSelector,...classes){
            this.src = src
            this.alt = alt
            this.title = title
            this.descr = descr
            this.price = price
            this.transfer = 10900
            this.classes = classes
            this.parent = document.querySelector(parentSelector)
            this.ConvertToUSD()
        }
        ConvertToUSD(){
            this.price = this.price * this.transfer
        }

        render(){
            const element = document.createElement('div')

            if(this.classes === 0){
                this.classes = 'menu__item'
                element.classList.add(this.classes)
            }else{
                this.classes.forEach(className =>{
                    element.classList.add(className)
                })
            }

            element.innerHTML = `
            <div class="menu__item">
                <img src="${this.src}" alt="${this.alt}">
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> $</div>
                </div>
            </div>
            `
            this.parent.append(element)
        }
    }
    new MenuCard(
        './images/audi.jpg',
        'audi',
        'AUDI',
        'Немецкий производитель легковых автомобилей премиального класса, грузовых автомобилей, автобусов и других транспортных средств, входящая в состав немецкого концерна. Является одним из самых узнаваемых автомобильных брендов во всём мире',
        '10',
        '.menu .container'
    ).render()
    new MenuCard(
        './images/bmw.jpg',
        'bmw',
        'BMW',
        'Немецкий производитель легковых автомобилей премиального класса, грузовых автомобилей, автобусов и других транспортных средств, входящая в состав немецкого концерна. Является одним из самых узнаваемых автомобильных брендов во всём мире',
        '20',
        '.menu .container'
    ).render()
    new MenuCard(
        './images/merc.jpg',
        'mers',
        'MERCEDES-BENZ',
        'Немецкий производитель легковых автомобилей премиального класса, грузовых автомобилей, автобусов и других транспортных средств, входящая в состав немецкого концерна. Является одним из самых узнаваемых автомобильных брендов во всём мире',
        '30',
        '.menu .container'
    ).render()
})