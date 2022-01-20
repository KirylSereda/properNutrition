import {getResource} from '../services/services'

function cards () {
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 2.5;
            this.changeToBYN();
        }

        changeToBYN() {
            this.price = this.price * this.transfer;
        }

        render() {
            let element = document.createElement('div');
            if (this.classes.length == 0) {
                this.classes = ['menu__item'];
            }
            this.classes.forEach(classNames => element.classList.add(classNames));
            element.innerHTML = ` 
        <img src="${this.src}" alt="${this.alt}">
        <h3 class="menu__item-subtitle">${this.title}"</h3>
        <div class="menu__item-descr">${this.descr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> Руб/день</div>
        
    </div>`;
            this.parent.append(element);
        }
    }

  

    axios.get('http://localhost:3000/menu')
        .then(data => {
                data.data.forEach(({ img, altimg, title, descr, price }) => {
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
            });
        });

}


export default cards;